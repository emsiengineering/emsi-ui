import AriaModal from 'react-aria-modal';
import CSSModules from 'react-css-modules';
import React from 'react';

import styles from './modal.styl';
import Button from '../Button';
import Icon from '../Icon';

type Props = {
  /** A string to use as the modal's accessible title */
  title: string,
  /** Display the content inside the modal */
  children: any,
  /** Click outsid the modal to close it, default true */
  underlayClickExits?: boolean | void,
  /** Provide your main application node here (which the modal should render outside of) */
  rootElementId?: string | void,
  focusElementId?: string | void,
  /** If true, the modal will receive a role of alertdialog, instead of its default dialog */
  alert?: boolean | void,
  /** pass in string or another component to click on */
  buttonChild?: any,
  /** if the modal should be a card with white background and box-shadow */
  isCard?: boolean | void,
  /** style the button */
  buttonClass?: any
};

class Modal extends React.Component<void, Props, void> {
  constructor(props: Props) {
    super(props);

    const state: { active: boolean, entered: boolean } = {
      active: false,
      entered: false
    };

    this.state = state;
  }

  render() {
    const {
      children,
      rootElementId,
      title,
      focusElementId,
      underlayClickExits,
      alert,
      buttonChild,
      isCard,
      buttonClass
    } = this.props;

    const extras = {
      focusDialog: !focusElementId
    };

    let underlayClass: string = styles['modal-underlay'];
    let dialogContentClass: string = 'modal modal-animated';

    if (this.state.entered) {
      dialogContentClass += ' has-entered';
      underlayClass += ` ${styles['has-entered']}`;
    }

    if (isCard) dialogContentClass += ' modal-card';

    return (
      <div>
        <Button
          type="primary"
          styleName={buttonClass}
          onClick={this.handleActive}
        >
          {buttonChild}
        </Button>
        <AriaModal
          {...extras}
          titleText={title}
          underlayClickExits={underlayClickExits}
          mounted={this.state.active}
          onEnter={this.handleEnter}
          onExit={this.handleExit}
          applicationNode={document.getElementById(rootElementId)}
          underlayClass={underlayClass}
          underlayColor={false}
          initialFocus="#close-modal"
          alert={alert}
        >
          <div styleName={dialogContentClass}>
            <button
              id="close-modal"
              aria-label="Close Dialog Box"
              onClick={this.handleExit}
              styleName="modal-close-icon"
            >
              <Icon name="close" />
            </button>
            {children}
          </div>
        </AriaModal>
      </div>
    );
  }

  handleEnter = () => {
    this.setState({
      entered: true
    });
  };

  handleActive = () => {
    this.setState({
      active: true
    });
  };

  handleExit = () => {
    this.setState(
      {
        entered: false
      },
      () => {
        setTimeout(() => {
          this.setState({
            active: false
          });
        }, 300);
      }
    );
  };
}

export default CSSModules(Modal, styles, { allowMultiple: true });

import AriaModal from 'react-aria-modal';
import CSSModules from 'react-css-modules';
import React from 'react';

import styles from './modal.styl';
import Button from '../Button';
import Icon from '../Icon';

type Props = {
  /** A string to use as the modal's accessible title */
  title: string,
  /** A function to handle close of the modal outside the component */
  closeModal?: Function,
  /** A function to handle open of the modal outside the component */
  openModal?: Function,
  /** Display the content inside the modal */
  children: any,
  /** Click outsid the modal to close it, default true */
  underlayClickExits?: boolean | void,
  /** Provide your main application node here (which the modal should render outside of) */
  rootElementId?: string | void,
  focusElementId?: string | void,
  /** If true, the modal will receive a role of alertdialog, instead of its default dialog */
  alert?: boolean | void,
  /** If true render a button to click on to open Modal */
  button?: boolean | void,
  /** If true render the modal on props */
  isOpen?: boolean | void
};

class Modal extends React.Component<void, Props, void> {
  static defaultProps = {
    closeModal: function noop() {},
    openModal: function noop() {}
  };

  constructor(props: Props) {
    super(props);

    const state: { active: boolean, entered: boolean } = {
      active: false,
      entered: true
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
      button,
      isOpen,
      closeModal,
      openModal
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

    return (
      <div>
        {button &&
          <Button type="primary" onClick={this.handleActive}>
            {title}
          </Button>}
        <AriaModal
          {...extras}
          underlayClickExits={underlayClickExits}
          mounted={isOpen ? isOpen : this.state.active}
          titleText={title}
          onEnter={isOpen ? openModal : this.handleEnter}
          onExit={isOpen ? closeModal : this.handleExit}
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
              onClick={isOpen ? closeModal : this.handleExit}
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

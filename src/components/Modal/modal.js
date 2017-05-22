import AriaModal from 'react-aria-modal';
import CSSModules from 'react-css-modules';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import React from 'react';

import styles from './modal.styl';
import Button from '../Button';
import Icon from '../Icon';

type Props = {
  /** A string to use as the modal's accessible title */
  title: string,
  /** A function to handle close of the modal outside the component */
  onExit: Function,
  /** Display the content inside the modal */
  children: any,
  /** Click outsid the modal to close it, default true */
  underlayClickExits?:boolean|void,
  /** Provide your main application node here (which the modal should render outside of) */
  rootElementId?: string|void,
  focusElementId?: string|void,
  /** If true, the modal will receive a role of alertdialog, instead of its default dialog */
  alert?: boolean|void,
  /** If true render a button to click on to open Modal */
  button?: boolean|void,
  /** If true render the modal on props */
  isOpen?: boolean|void
}

class Modal extends React.Component<void, Props, void> {
  static defaultProps = {
    onExit: function noop() {}
  }

  constructor(props: Props) {
    super(props);

    const state: { active: boolean, entered: boolean } = {
      active: false,
      entered: true
    };

    this.state = state;
  }

  render() {
    const { children, rootElementId, onExit, title, focusElementId, underlayClickExits, alert, button, isOpen } = this.props;

    const extras = {
      focusDialog: !focusElementId
    };

    let underlayClass: string = styles['modal-underlay'];

    if (this.state.entered)
      underlayClass += ' entered';

    const transitionNames = {
      enter: styles['modal-enter'],
      enterActive: styles['modal-enter-active'],
      leave: styles['modal-leave'],
      leaveActive: styles['modal-leave-active'],
      appear: styles['modal-enter'],
      appearActive: styles['modal-enter-active']
    };
    return (
      <div>
        {button && <Button type='primary' onClick={this.handleActive} active={this.state.active}>{title}</Button>}
        <AriaModal
          {...extras}
          underlayClickExits={underlayClickExits}
          mounted={isOpen ? isOpen : this.state.active}
          titleText={title}
          onEnter={this.handleEnter}
          onExit={this.handleExit}
          applicationNode={document.getElementById(rootElementId)}
          underlayClass={underlayClass}
          underlayColor={false}
          alert={alert}
          className={styles.modal}
        >
          <CSSTransitionGroup
            transitionName={transitionNames}
            transitionAppear
            transitionEnterTimeout={300}
            transitionAppearTimeout={300}
            transitionLeaveTimeout={300}
          >
           { this.state.entered &&
             <div styleName='modal' key='animationItem'>
              <Icon name='close' styleName='modal-close-icon' onClick={this.handleExit}/>
              {children}
            </div> }
          </CSSTransitionGroup>
        </AriaModal>
      </div>
    );
  }

  handleEnter = () => {
    this.setState({
      entered: true
    });
  }

  handleActive = () => {
    this.setState({
      active: true
    });
  }

  handleExit = () => {
    this.setState({
      entered: false
    }, () => {
      setTimeout(() => {
        this.setState({
          active: false
        });
      }, 300);
    });
  }
}

export default CSSModules(Modal, styles);

import AriaModal from 'react-aria-modal';
import CSSModules from 'react-css-modules';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import React from 'react';
import Icon from '../Icon';

import styles from './modal.css';
import Button from '../Button';

type Props = {
  title: string,
  onExit: Function,
  underlayClickExits?:boolean,
  rootElementId?: string|void,
  focusElementId?: string|void
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
    const { children, rootElementId, onExit, title, focusElementId, underlayClickExits } = this.props;

    const extras = {
      focusDialog: !focusElementId
    };

    let underlayClass: string = styles.underlay;

    if (this.state.entered)
      underlayClass += ` ${styles.underlayEntered}`;

    const transitionNames = {
      enter: styles.enter,
      enterActive: styles.enterActive,
      leave: styles.leave,
      leaveActive: styles.leaveActive,
      appear: styles.enter,
      appearActive: styles.enterActive
    };

    return (
      <div>
        <Button type='primary' onClick={this.handleActive} active={this.state.active}>Text</Button>
        <AriaModal
          {...extras}
          underlayClickExits={underlayClickExits}
          mounted={this.state.active}
          titleText={title}
          onEnter={this.handleEnter}
          onExit={this.handleExit}
          applicationNode={document.getElementById(rootElementId)}
          underlayClass={underlayClass}
          underlayColor={false}
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
              <Icon name='close' styleName='close-icon' onClick={this.handleExit}/>
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

import AriaModal from 'react-aria-modal';
import CSSModules from 'react-css-modules';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import React from 'react';
import { IoAndroidArrowDropdown, IoAndroidClose } from 'react-icons/io';

import styles from './modal.css';
import Button from '../Button';

class Modal extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    onExit: React.PropTypes.func,
    underlayClickExits: React.PropTypes.bool,
    rootElementId: React.PropTypes.string,
    focusElementId: React.PropTypes.string,
    alert: React.PropTypes.bool,
    active: React.PropTypes.bool
  }

  static defaultProps = {
    onExit: function noop() {}
  }

  constructor(...props) {
    super(...props);

    this.state = {
      active: false,
      entered: true
    };
  }

  render() {
    const { children, rootElementId, onExit, title, focusElementId, active, underlayClickExits } = this.props;

    const extras = {
      focusDialog: !focusElementId
    };

    let underlayClass = styles.underlay;

    if (this.state.entered)
      underlayClass += ` ${styles.underlayEnter}`;

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
              <IoAndroidClose styleName='close-icon' onClick={this.handleExit}/>
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

export default CSSModules(Modal, styles, { allowMultiple: true });

import AriaModal from 'react-aria-modal';
import CSSModules from 'react-css-modules';
import React from 'react';
import { IoAndroidArrowDropdown, IoAndroidClose } from 'react-icons/io';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import styles from './modal.css';

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
      unmount: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.active && !nextProps.active) {
      this.setState({
        unmount: true
      });
    }
  }

  render() {
    const { children, rootElementId, onExit, title, focusElementId, active, underlayClickExits } = this.props;

    const extras = {
      focusDialog: !focusElementId
    };

    const transitionNames = {
      enter: styles.enter,
      enterActive: styles.enterActive,
      leave: styles.leave,
      leaveActive: styles.leaveActive,
      appear: styles.enter,
      appearActive: styles.enterActive
    };

    return (
        <AriaModal
          {...extras}
          underlayClickExits={underlayClickExits}
          mounted={active}
          titleText={title}
          onExit={onExit}
          applicationNode={document.getElementById(rootElementId)}
          underlayClass={styles.underlay}
          className={styles.modal}
        >
          <CSSTransitionGroup transitionName={transitionNames}
            transitionAppear
            transitionEnterTimeout={300}
            transitionAppearTimeout={300}
            transitionLeaveTimeout={300}
          >
            {!this.state.unmount && <div styleName='modal' key='animationItem'>
              <IoAndroidClose styleName='close-icon'/>
              {children}
            </div>}
          </CSSTransitionGroup>
        </AriaModal>
    );
  }
}

export default CSSModules(Modal, styles, { allowMultiple: true });

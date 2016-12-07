import CSS from './nav-panel.styl';
import ContentWrap from '../ContentWrap';
import Measure from 'react-measure';
import React from 'react';
import cx from 'classnames';
import whatInput from 'what-input';

type Props = {
  /** adds the active class, when true */
  top?: boolean|void,
  /** position the active class on the bottom or top of the text */
  styles: Object|void,
  /** any additional props to add */
  onNavigate: Function
}

class NavPanel extends React.Component<void, Props, void> {
  constructor(props) {
    super(props);

    this.state = {
      animate: false,
      hovering: false,
      widths: [],
      active: 0,
      hover: 1
    };
  }

  renderSpan() {
    const { widths, active, hovering, hover } = this.state;
    let width = widths[active];
    let offset = 0;
    let by = 'active';

    if (hovering) {
      by = 'hover';
      width = widths[hover];
    }

    for (let i = this.state[by] - 1; i >= 0; i--) {
      offset += widths[i];
    }

    return (
      <span
        className='nav-panel-border'
        style={{
          left: offset + 'px',
          width: width + 'px'
        }}/>
    );
  }

  render() {
    const { animate, hovering, widths, active, hover } = this.state;
    const { children, top, onNavigate, className, ...other } = this.props;

    let styleName = cx(
      {
        'nav-panel': true,
        top
      },
      className
    );

    const menu = this.props.children.map((child, index) => {

      const clone = React.cloneElement(
        child,
        {
          onClick: () => this.handleClick(index, this.props.onNavigate, child.props.to),
          onMouseEnter: () => this.handleEnter(index),
          onMouseLeave: () => this.handleLeave(index),
          active: this.state.active === index ? true : false
        }
      );

      return (
        <Measure
          key={`navitem-${index}`}
          accurate
          onMeasure={dimensions => {
            let childWidths = this.state.widths;
            childWidths[index] = dimensions.width;

            this.setState({
              widths: childWidths
            });
          }}
        >
          {clone}
        </Measure>
      );
    });

    return (
      <ul className={styleName} {...other}>
        {menu}
        {this.renderSpan()}
      </ul>
    );
  }

  handleClick(index, onNavigate, to) {
    this.setState({
      active: index
    }, () => {
      if (onNavigate)
        onNavigate(to);
    });
  }

  handleEnter(index) {
    this.setState({
      hovering: true,
      hover: index
    });
  }

  handleLeave(index) {
    this.setState({
      hovering: false,
      hover: index
    });
  }
}

export default NavPanel;

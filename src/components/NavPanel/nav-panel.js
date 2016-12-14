import CSS from './nav-panel.styl';
import CSSModules from 'react-css-modules';
import ContentWrap from '../ContentWrap';
import Measure from 'react-measure';
import React from 'react';
import cx from 'classnames';
import { getChildIndexByProp } from '../utils';
import whatInput from 'what-input';

type Props = {
  /** adds the active class, when true */
  top: boolean,
  /** position the active class on the bottom or top of the text */
  styles: Object|void
}

class NavPanel extends React.Component<void, Props, void> {
  static defaultProps = {
    top: false
  }

  constructor(props) {
    super(props);

    const active = getChildIndexByProp(props.children);

    this.state = {
      animate: false,
      hovering: false,
      widths: [],
      active: active[0] || -1,
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

    if (active < 0 && !hovering)
      offset = -300;
    else
      for (let i = this.state[by] - 1; i >= 0; i--) {
        offset += widths[i];
      }

    return (
      <span
        styleName='nav-panel-border'
        style={{
          left: offset + 'px',
          width: width + 'px'
        }}/>
    );
  }

  render() {
    const { animate, hovering, widths, active, hover } = this.state;
    const { children, top, className, ...other } = this.props;

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
          onClick: () => this.handleClick(index, child.props.to),
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
      <ul styleName={styleName} {...other}>
        {menu}
        {this.renderSpan()}
      </ul>
    );
  }

  handleClick(index, onNavigate, to) {
    this.setState({
      active: index
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

export default CSSModules(NavPanel, CSS, { allowMultiple: true });

import whatInput from 'what-input';
import CSSModules from 'react-css-modules';
import Measure from 'react-measure';
import React from 'react';

import ContentWrap from '../ContentWrap';
import CSS from './nav-panel.styl';

type Props = {
  /** adds the active class, when true */
  align?: "bottom"|"top",
  /** position the active class on the bottom or top of the text */
  styles: Object|void,
  /** any additional props to add */
}

class NavPanel extends React.Component<void, Props, void> {
  static defaultProps = {
    align: 'bottom'
  }

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
        styleName='nav-panel-border'
        style={{
          left: offset + 'px',
          width: width + 'px'
        }}/>
    );
  }

  render() {
    const { animate, hovering, widths, active, hover } = this.state;
    const { children, align, styles, ...other } = this.props;
    const styleName = align === 'bottom' ? 'nav-panel' : 'nav-panel top';
    const menu = this.props.children.map((child, index) => {

      const clone = React.cloneElement(
        child,
        {
          onClick: () => this.handleClick(index),
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
      <ContentWrap styleName='nav-content'>
        <ul styleName={styleName} {...other}>
          {menu}
          {this.renderSpan()}
        </ul>
      </ContentWrap>
    );
  }

  handleClick(index) {
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

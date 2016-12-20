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
  styles: Object|void,

  offset: string,

  offsetDirection: 'left'|'right'
}

class NavPanel extends React.Component<void, Props, void> {
  static defaultProps = {
    top: false,
    offset: 300
  }

  constructor(props) {
    super(props);

    this.state = {
      animate: false,
      hovering: false,
      widths: [],
      active: -1,
      hover: 1
    };
  }

  componentWillMount() {
    const active = getChildIndexByProp(this.props.children);

    this.setState({
      active: active.length > 0 ? active[0] : -1
    });
  }

  componentWillReceiveProps(nextProps) {
    const active = getChildIndexByProp(nextProps.children);

    if (this.state.active !== active)
      this.setState({
        active: active.length > 0 ? active[0] : -1
      });
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

    if (active < 0 && !hovering) {
      width = widths[0];
      offset = -widths[0];
    } else
      for (let i = this.state[by] - 1; i >= 0; i--) {
        offset += widths[i];
      }

    return (
      <span
        styleName='nav-panel-border'
        data-theme='nav-panel-border'
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

    const menu = React.Children.toArray(this.props.children).map((child, index) => {

      const clone = React.cloneElement(
        child,
        {
          ...child.props,
          onMouseEnter: () => this.handleEnter(index),
          onMouseLeave: () => this.handleLeave(index)
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

  handleEnter(index) {
    this.setState({
      hovering: true,
      hover: index
    });
  }

  handleLeave(index) {
    this.setState({
      hovering: false,
      hover: this.state.active
    });
  }
}

export default CSSModules(NavPanel, CSS, { allowMultiple: true });

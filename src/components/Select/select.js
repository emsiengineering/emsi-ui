import { IoAndroidArrowDropdown } from 'react-icons/io';
import { Wrapper, Button, Menu, openMenu, closeMenu } from 'react-aria-menubutton';
import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './select.css';
import uniqueId from 'lodash.uniqueid';

class Select extends React.Component {
  static propTypes = {
    children: React.PropTypes.arrayOf(
      React.PropTypes.object.isRequired
    ).isRequired,
    onSelect: React.PropTypes.func,
    disabled: React.PropTypes.bool
  }

  static defaultProps = {
    onSelect: function noop() {}
  }

  constructor(...props) {
    super(...props);

    this.state = {
      activeOption: null,
      open: false,
      id: uniqueId('wrapper')
    };
  }

  renderChildren() {
    return this.props.children.map((option, index) => {
      return React.cloneElement(
        option,
        {
          active: option.props.children === this.state.activeOption,
          key: `option${index}`
        }
      );
    });
  }

  renderMenu = (menu) => {
    if (menu.isOpen && this.state.open)
      return <ul styleName='ul'>{this.renderChildren()}</ul>;
    else if (menu.isOpen && !this.state.open)
      closeMenu(this.state.id);
    else if (!menu.isOpen && this.state.open)
      openMenu(this.state.id);
    else
      return null;
  }

  render() {
    return (
      <Wrapper
        onSelection={this.handleSelection}
        id={this.state.id}
      >
        <Button disabled={this.props.disabled} styleName={this.props.disabled ? 'wrapper disabled' : 'wrapper '} onClick={this.handleClick}>
          {this.state.activeOption === null ? 'Select Option' : this.state.activeOption}
          <IoAndroidArrowDropdown styleName='icon'/>
        </Button>
          {
            !this.props.disabled &&
            <Menu styleName='menu'>
              {this.renderMenu}
            </Menu>
          }
      </Wrapper>
    );
  }

  handleClick = () => {
    this.setState({
      open: !this.state.open
    });
  }

  handleSelection = (option, event) => {
    this.props.onSelect(option);
    this.setState({
      activeOption: option
    });
  }
}


export default CSSModules(Select, styles, { allowMultiple: true });

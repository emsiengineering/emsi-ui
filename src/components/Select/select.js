import React, { PropTypes } from 'react';
import { Wrapper, Button, Menu, openMenu, closeMenu } from 'react-aria-menubutton';

import CSSModules from 'react-css-modules';
import styles from './select.css';
import uniqueId from 'lodash.uniqueid';
import Icon from '../Icon';

class Select extends React.Component {
  static propTypes = {
    children: PropTypes.arrayOf(
      PropTypes.object.isRequired
    ).isRequired,
    onSelect: PropTypes.func,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    styles: PropTypes.object
  }

  static defaultProps = {
    onSelect: function noop() {}
  }

  constructor(...props) {
    super(...props);

    this.state = {
      activeOption: null,
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
  render() {
    const { styles: CSSStyles, ...other } = this.props;
    return (
			<div>
				<label htmlFor={this.state.id}>{this.props.label}</label>
				<Wrapper
          {...other}
					onSelection={this.handleSelection}
					id={this.state.id}
				>
					<Button disabled={this.props.disabled} styleName={this.props.disabled ? 'disabled' : 'wrapper'}>
						<span>{this.state.activeOption === null ? 'Select Option' : this.state.activeOption}</span>
						<Icon name='dropdown' size='small' />
					</Button>
						{
							!this.props.disabled &&
							<Menu styleName='menu'>
								<ul styleName='ul'>{this.renderChildren()}</ul>
							</Menu>
						}
				</Wrapper>
			</div>
    );
  }

  handleSelection = (option, event) => {
    this.props.onSelect(option);
    this.setState({
      activeOption: option
    });
  }
}


export default CSSModules(Select, styles);

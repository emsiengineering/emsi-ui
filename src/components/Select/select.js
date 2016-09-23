import React, { PropTypes } from 'react';
import { Wrapper, Button, Menu } from 'react-aria-menubutton';

import CSSModules from 'react-css-modules';
import styles from './select.css';
import uniqueId from 'lodash.uniqueid';
import Icon from '../Icon';

type Props = {
  children: Array<Object>,
  onSelect?: Function,
  disabled?: boolean,
  styles?: Object,
  other?: Object
}

class Select extends React.Component {
  static defaultProps = {
    onSelect: function noop() {}
  }

  constructor(props: Props) {
    super(props);

    this.state = {
      activeOption: null,
      id: uniqueId('wrapper')
    };
  }

  renderChildren(children: Array<Object>) {
    return children.map((option: Object, index: number) => {
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
								<ul styleName='ul'>{this.renderChildren(this.props.children)}</ul>
							</Menu>
						}
				</Wrapper>
			</div>
    );
  }

  handleSelection = (option: any, e: Object) => {
    this.props.onSelect(option);
    this.setState({
      activeOption: option
    });
  }
}


export default CSSModules(Select, styles);

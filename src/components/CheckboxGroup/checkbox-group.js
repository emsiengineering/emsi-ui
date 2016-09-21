import React, { PropTypes } from 'react';
import Checkbox from '../Checkbox';
import Radio from '../Radio';

class CheckboxGroup extends React.Component {
  static propTypes = {
    allowMultiple: React.PropTypes.bool,
    required: React.PropTypes.bool,
    onChange: React.PropTypes.func,
    children: React.PropTypes.array.isRequired
  }

  static defaultProps = {
    allowMultiple: true,
    onChange: function noop() {}
  }

  constructor(...props) {
    super(...props);

    this.state = {
      selected: []
    };
  }

  componentWillMount() {
    let selected = [];
    let firstChild = '';

    // loop through children looking for default checked
    React.Children.toArray(this.props.children).forEach((child, index) => {
      if (child.props.checked)
        selected.push(child.props.value);

      // grab the first child
      if (index === 0)
        firstChild = child.props.value;
    });

    // if this doesn't allow multiples, only grab the first checked
    if (selected.length > 0 && !this.props.allowMultiple)
      selected = [selected[0]];

    // if none are checked and required is on, grab the first child
    else if (selected.length === 0 && this.props.required)
      selected = [firstChild];

    if (selected.length > 0)
      this.setState({
        selected
      });
  }

  renderChildren() {
    const { children } = this.props;

    return children.map((child, index) => {
      return React.cloneElement(
        child,
        {
          ...child.props,
          checked: this.state.selected.includes(child.props.value),
          onChange: this.handleClick,
          key: `checkbox-${index}`
        }
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderChildren()}
      </div>
    );
  }

  handleClick = (e, value) => {
    let selected = this.state.selected;
    let changeCallback = () => {
      const state = this.state.selected.length == 1 ? this.state.selected[0] : this.state.selected;
      this.props.onChange(e, state);
    };

    // if the value is in the array and this doesn't force a selection
    // remove it.
    if (selected.includes(value) && !this.props.required) {
      selected = selected.filter(input => input !== value);

    // selection is forced, so don't remove values.
    } else if (selected.includes(value) && this.props.required) {
      return;

    // it's not already selected, so if we allow multiple push it
    } else if (this.props.allowMultiple) {
      selected.push(value);

    // we don't allow multiples so reset it
    } else {
      selected = [];
      selected.push(value);
    }


    this.setState({
      selected
    }, changeCallback);
  }
}

export default CheckboxGroup;

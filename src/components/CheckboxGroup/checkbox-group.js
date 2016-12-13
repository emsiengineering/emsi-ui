import React, { PropTypes } from 'react';

import Checkbox from '../Checkbox';
import Radio from '../Radio';

type Props = {
  /** false will only you let you select one option */
  allowMultiple?: boolean,
  /** selects the first option if required is true */
  required?: boolean,
  /** add any other props to the component */
  other?: any,
  children: Array<Object>,
  /** function to pass in to track the change of state outside the component */
  onChange?: Function
}

class CheckboxGroup extends React.Component<void, Props, void> {
  static defaultProps = {
    required: false,
    allowMultiple: true,
    onChange: function noop() {}
  }

  constructor(props: Props) {
    super(props);

    this.state = {
      selected: []
    };
  }

  componentWillMount() {
    let selected: Array = [];
    let firstChild: string = '';

    // loop through children looking for default checked
    React.Children.toArray(this.props.children).forEach((child: Object, index: number) => {
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

  renderChildren(children: Array, onChange: Function) {
    return children.map((child: Object, index: number) => {
      return React.cloneElement(
        child,
        {
          ...child.props,
          checked: this.state.selected.includes(child.props.value),
          onClick: () => this.handleClick(child.props.value),
          onKeyDown: (e) => this.handleKeyPress(e, child.props.value),
          onChange: onChange,
          key: `checkbox-${index}`
        }
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderChildren(this.props.children, this.props.onChange)}
      </div>
    );
  }

  handleKeyPress = (e: Object, value: string) => {
    if (e.which == 32) {
      e.preventDefault();
      this.handleClick(value);
    }
  }

  handleClick = (value: string) => {
    let selected: Array = this.state.selected;

    console.log('Adding', value, 'to', selected);

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

    console.log('New selected state is', selected);


    this.setState({
      selected
    });
  }
}

export default CheckboxGroup;

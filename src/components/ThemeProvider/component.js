import React, { Children } from 'react';

class ThemeProvider extends React.Component {
  static propTypes = {
    theme: React.PropTypes.object.isRequired
  }

  static childContextTypes = {
    theme: React.PropTypes.object.isRequired
  }

  getChildContext() {
    const { theme } = this.props;
    return { theme };
  }

  render() {
    return Children.only(this.props.children);
  }
}

export default ThemeProvider;

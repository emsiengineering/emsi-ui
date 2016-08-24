import React from 'react';

const useTheme = (Component) => {
  return class ThemeComponent extends React.Component {
    static propTypes = {
      theme: React.PropTypes.object
    }

    static contextTypes = {
      theme: React.PropTypes.object.isRequired
    }

    render() {
      let { theme } = this.context;

      if (this.props.theme) {
        theme = {
          ...theme,
          ...this.props.theme
        };
      }

      return (
        <Component {...this.props} theme={theme} />
      );
    }
  };
};

export default useTheme;

import React, { PropTypes } from 'react';

import CSS from './checkbox.styl';
import CSSModules from 'react-css-modules';
import Icon from '../Icon';
import Label from '../Label';
import Text from '../Text';
import whatInput from 'what-input';

type Props = {
  styles: any,
  /** the value to pass into the component */
  value?: string,
  /** sets the checkbox to radio */
  radio?: boolean,
  /** active state of the checkbox */
  checked?: boolean,
  /** add any other props to the component */
  other?: any,
  children: any,
  /** unquie id of the label and input, a11y purposes */
  id?: string
};

function renderRadio(checked) {
  return checked ? (
    <Icon name="radioChecked" styleName="selected" size="medium" />
  ) : (
    <Icon name="radio" size="medium" />
  );
}

function renderCheckbox(checked) {
  return checked ? (
    <Icon name="checkboxChecked" size="medium" />
  ) : (
    <Icon name="checkbox" size="medium" />
  );
}

function Checkbox({ value, radio, checked, children, id, ...other }: Props) {
  const role: string = radio ? 'radio' : 'checkbox';

  return (
    <Label htmlFor={id}>
      <div styleName="container">
        <div
          tabIndex="0"
          {...other}
          role={role}
          aria-checked={checked}
          styleName={checked ? 'checkbox selected' : 'checkbox'}
        >
          {radio ? renderRadio(checked) : renderCheckbox(checked)}
          {React.Children.toArray(children).length > 0 && (
            <Text type="caption">{children}</Text>
          )}
        </div>
        <input
          id={id}
          type={role}
          style={{ display: 'none' }}
          defaultValue={value}
          defaultChecked={checked}/>
      </div>
    </Label>
  );
}

export default CSSModules(Checkbox, CSS, { allowMultiple: true });

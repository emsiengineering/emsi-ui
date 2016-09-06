import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import { IoAndroidCheckboxOutlineBlank, IoAndroidCheckbox, IoIosCircleOutline, IoIosCircleFilled } from 'react-icons/io';

import styles from './checkbox.css';

const Checkbox = ({ children, value, name, isChecked, isRadio, styles: CSS, ...other }) => {
	return (
		<label htmlFor={value}>
			<span
				{...other}
				role={isRadio ? 'radio' : 'checkbox'}
				tabIndex='0'
				aria-checked={isChecked}
				id={value}
				styleName='checkbox'
			>
			{
				isChecked ?
					<span>
						{ isRadio ? <IoIosCircleFilled styleName='checkbox selected' /> : <IoAndroidCheckbox styleName='checkbox selected' /> }
						<span styleName='checkbox selected'>{children}</span>
					</span> :
					<span>
						{ isRadio ? <IoIosCircleOutline value={value} /> : <IoAndroidCheckboxOutlineBlank value={value} /> }
						<span>{children}</span>
					</span>
			}
			</span>
		</label>
	);
};

Checkbox.propTypes = {
	styles: PropTypes.object,
	value: PropTypes.string,
	name: PropTypes.string,
	isChecked: PropTypes.bool,
	isRadio: PropTypes.bool
};

Checkbox.defaultProps = {
	isRadio: false
};

export default CSSModules(Checkbox, styles, { allowMultiple: true });

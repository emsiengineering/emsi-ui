import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import { IoAndroidCheckboxOutlineBlank, IoAndroidCheckbox, IoIosCircleOutline, IoIosCircleFilled } from 'react-icons/io';

import styles from './checkbox.css';

class Checkbox extends React.Component {
	static propTypes = {
		styles: PropTypes.object,
		value: PropTypes.string,
		isRadio: PropTypes.bool
	}
	static defaultProps = {
    isRadio: false
	}
	constructor(props) {
		super(props);

		this.state = {
			isChecked: false
		};
	}
	render() {
		const { children, value, isRadio, styles: CSS, ...other } = this.props;

		return (
			<label htmlFor={value}>
				<div
					{...other}
					role={isRadio ? 'radio' : 'checkbox'}
					tabIndex='0'
					aria-checked={this.state.isChecked}
					id={value}
					onClick={this.handleCheckBox}
					styleName='checkbox'
				>
				<div styleName='content'>
					{
					this.state.isChecked ?
						<span>
						{ isRadio ? <IoIosCircleFilled styleName='checkbox selected' /> : <IoAndroidCheckbox styleName='checkbox selected' /> }
						<span styleName='checkbox selected'>{children}</span>
						</span> :
						<span>
							{ isRadio ? <IoIosCircleOutline value={value} /> : <IoAndroidCheckboxOutlineBlank value={value} /> }
							<span>{children}</span>
						</span>
					}
				</div>
			</div>
			</label>
		);
	}
	handleCheckBox = () => this.setState({ isChecked: !this.state.isChecked })
}

export default CSSModules(Checkbox, styles, { allowMultiple: true });

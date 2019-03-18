import React from 'react';
import PropTypes from 'prop-types';

const FormGroup = ({ id, label, name, value, type, placeholder, onChange, error }) => {
	return (
			<div className='form-group'>
				<label htmlFor={name}>{label}</label>

				<input
					id={id}
					className='form-control'
					value={value}
					type={type}
					name={name}
					placeholder={placeholder}
					onChange={onChange}
				 />

				<div className='invalid-feedback'>
					{error}
				</div>
			</div>
	);
};

FormGroup.defaultProps = {
	type: 'text'
};

FormGroup.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	error: PropTypes.string
};

export default FormGroup;

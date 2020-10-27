import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ type, name, value, handleChange, label }) => (
    <div className="form-input-group">
        { label && <label className={`${value.length && 'shrink'} form-input-group__label`}>{label}</label>}
        <input
            name={name}
            type={type}
            value={value}
            onChange={handleChange}
        />
    </div>
)

export default FormInput;
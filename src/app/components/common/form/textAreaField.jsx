import React from "react";
import PropTypes from "prop-types";

const TextAreaField = ({ label, type, value, name, onChange, error }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };

    const getInputClasses = () => {
        return " mb-3 form-control" + (error ? " is-invalid" : "");
    };

    return (
        <div className="mb-4">
            <label htmlFor={name} className="form-label">
                {label}
            </label>

            <textarea
                type={type}
                name={name}
                value={value}
                className={getInputClasses()}
                rows="3"
                onChange={handleChange}
            ></textarea>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

TextAreaField.defaultProps = {
    type: "text"
};
TextAreaField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};

export default TextAreaField;

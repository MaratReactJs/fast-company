import React from "react";
import PropTypes from "prop-types";

const RadioField = ({ options, value, name, onChange }) => {
    return (
        <div className="mb-4">
            {options.map((option) => (
                <div
                    key={option.name + " " + option.value}
                    className="form-check form-check-inline"
                >
                    <input
                        className="form-check-input"
                        type="radio"
                        name={name}
                        id={option.name + " " + option.value}
                        value={option.value}
                        onChange={onChange}
                        checked={option.value === value}
                    />
                    <label
                        className="form-check-label"
                        htmlFor={option.name + " " + option.value}
                    >
                        {option.name}
                    </label>
                </div>
            ))}
        </div>
    );
};

RadioField.propTypes = {
    options: PropTypes.array,
    value: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func
};

export default RadioField;

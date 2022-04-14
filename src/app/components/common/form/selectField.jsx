import React from "react";
import PropTypes from "prop-types";

const SelectField = ({
    label,
    value,
    onChange,
    defaultOption,
    options,
    error
}) => {
    const getInputClasses = () => {
        return "form-select" + (error ? " is-invalid" : "");
    };
    return (
        <div className="mb-4">
            <label htmlFor="validationCustom04" className="form-label">
                {label}
            </label>
            <select
                className={getInputClasses()}
                id="validationCustom04"
                name="profession"
                value={value}
                onChange={onChange}
            >
                <option disabled value="">
                    {defaultOption}
                </option>
                {options &&
                    Object.keys(options).map((optionName) => (
                        <option
                            value={options[optionName]._id}
                            key={options[optionName]._id}
                        >
                            {options[optionName].name}
                        </option>
                    ))}
            </select>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

SelectField.propTypes = {
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    label: PropTypes.string,
    defaultOption: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};

export default SelectField;

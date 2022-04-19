import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const MultiSelectField = ({ options, onChange, name, label, defaultValue }) => {
    const optionArray =
        options &&
        Object.keys(options).map((optionName) => ({
            label: options[optionName].name,
            value: options[optionName]._id
        }));

    const handleChange = (value) => {
        onChange({ name: name, value: value });
    };

    return (
        <div className="mb-4">
            <label className="form-label ">{label}</label>
            <Select
                isMulti
                options={optionArray}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={handleChange}
                name={name}
                closeMenuOnSelect={false}
                defaultValue={defaultValue}
            />
        </div>
    );
};

MultiSelectField.propTypes = {
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    defaultValue: PropTypes.array
};

export default MultiSelectField;

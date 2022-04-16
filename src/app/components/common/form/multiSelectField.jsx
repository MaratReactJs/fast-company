import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const MultiselectField = ({ options, onChange, name }) => {
    const optionArray =
        !Array.isArray(options) && typeof options === "object"
            ? Object.keys(options).map((optionName) => ({
                  label: options[optionName].name,
                  value: options[optionName]._id
              }))
            : options;

    const handleChange = (e) => {
        console.log(e);
        onChange(e);
    };

    return (
        <Select
            isMulti
            options={optionArray}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={handleChange}
            name={name}
        />
    );
};

MultiselectField.propTypes = {
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    label: PropTypes.string,
    defaultOption: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};

export default MultiselectField;

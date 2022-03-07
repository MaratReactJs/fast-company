import React from "react";
import PropTypes from "prop-types";

const TextField = ({ label, type, value, name, onChange }) => {
    return (
        <div>
            <label htmlFor={name}>
                {label}
                <input
                    type={type}
                    id={name}
                    value={value}
                    name={name}
                    onChange={onChange}
                />
            </label>
        </div>
    );
};

TextField.defaultProps = {
    type: "text"
};
TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func
};

export default TextField;

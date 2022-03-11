import React from "react";
import PropTypes from "prop-types";

const TextField = ({ label, type, value, name, onChange, error }) => {
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
            {error && <p>{error}</p>}
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
    onChange: PropTypes.func,
    error: PropTypes.string
};

export default TextField;

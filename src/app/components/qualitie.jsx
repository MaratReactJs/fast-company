import React from "react";
import PropTypes from "prop-types";

const Qualitie = ({ quality }) => {
    return (
        <>
            <span className={`badge bg-${quality.color} me-2`}>
                {quality.name}
            </span>
        </>
    );
};

Qualitie.propTypes = {
    quality: PropTypes.object
};

export default Qualitie;

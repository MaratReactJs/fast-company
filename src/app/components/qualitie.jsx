import React from "react";
import PropTypes from "prop-types";
// PropTypes = Типы реквизита

const Qualitie = ({ quality }) => {
    // Qualitie = качество
    // quality = качественный
    // span = охватывать
    // badge = значок
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

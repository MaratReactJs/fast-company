import PropTypes from "prop-types";
import React from "react";
import Qualitie from "./qualitie";

const QualitiesList = ({ user }) => {
    // QualitiesList = список качеств
    return (
        <>
            {user.qualities.map((quality) => {
                return <Qualitie quality={quality} key={quality._id} />;
            })}
        </>
    );
};

QualitiesList.propTypes = {
    user: PropTypes.object
};

export default QualitiesList;

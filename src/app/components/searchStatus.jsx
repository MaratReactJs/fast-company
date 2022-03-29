import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
    const clasess = length > 0 ? "badge bg-primary" : "badge bg-danger";

    const renderPhrase = (number) => {
        if (number > 4) {
            return number + " человек тусанет с тобой сегодня";
        }
        if (number <= 4 && number > 1) {
            return number + " человека тусанут с тобой сегодня";
        } else if (number === 1) {
            return number + " человек тусанет с тобой сегодня";
        } else {
            return "никто не тусанет с тобой";
        }
    };

    return (
        <>
            <h2>
                <span className={clasess}> {renderPhrase(length)}</span>
            </h2>
        </>
    );
};

SearchStatus.propTypes = {
    length: PropTypes.number
};

export default SearchStatus;

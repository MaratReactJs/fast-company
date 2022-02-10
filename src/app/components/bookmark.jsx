import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ user, handleToogleBookmark }) => {
    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() => {
                    handleToogleBookmark(user._id);
                }}
            >
                <i
                    className={`"bi bi-bookmark" ${
                        user.bookmark ? "bi bi-bookmark-fill" : "bi bi-bookmark"
                    }`}
                ></i>
            </button>
        </>
    );
};

Bookmark.propTypes = {
    user: PropTypes.object,
    handleToogleBookmark: PropTypes.func
};

export default Bookmark;

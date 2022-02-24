import React from "react";
import PropTypes from "prop-types";
// PropTypes = тип реквизита

const Bookmark = ({ user, handleToogleBookmark }) => {
    // Bookmark = закладка
    // user = пользователь
    // handleToogleBookmark = обработка переключателя закладки
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

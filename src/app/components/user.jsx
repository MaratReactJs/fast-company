import React from "react";
import Bookmark from "./bookmark";
import PropTypes from "prop-types";
import QualitiesList from "./qualitiesList";

const User = ({ user, handleDelete, handleToogleBookmark }) => {
    console.log(user);
    return (
        <>
            <tr>
                <td>{user.name}</td>
                <td>
                    <QualitiesList user={user} />
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>
                <td>
                    <Bookmark
                        bookmark={user.bookmark}
                        user={user}
                        handleToogleBookmark={handleToogleBookmark}
                    />
                </td>
                <td>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                            handleDelete(user._id);
                        }}
                    >
                        delete
                    </button>
                </td>
            </tr>
        </>
    );
};

User.propTypes = {
    user: PropTypes.object,
    handleDelete: PropTypes.func,
    handleToogleBookmark: PropTypes.func
};

export default User;

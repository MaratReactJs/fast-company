import React from "react";
import Bookmark from "./bookmark";
import Qualitie from "./qualitie";
import PropTypes from "prop-types";

const User = ({ user, handleDelete, handleToogleBookmark }) => {
    return (
        <>
            <tr>
                <td>{user.name}</td>
                <td>
                    {user.qualities.map((quality) => {
                        return <Qualitie quality={quality} key={quality._id} />;
                    })}
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
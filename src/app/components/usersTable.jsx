import React from "react";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import Bookmark from "./bookmark";
import QualitiesList from "./qualitiesList";
import Table from "./table";
import { Link } from "react-router-dom";

const UsersTable = ({
    allUsers,
    handleToogleBookmark,
    onSort,
    selectedSort,
    handleDelete
}) => {
    const columns = {
        name: {
            path: "name",
            name: "Имя",
            component: (user) => (
                <Link to={`users/${user._id}`}>{user.name}</Link>
            )
        },
        qualities: {
            name: "Качества",
            component: (user) => <QualitiesList user={user} />
        },
        profession: { path: "profession.name", name: "Профессия" },
        completedMeetings: {
            path: "completedMeetings",
            name: "Встретился,раз"
        },
        rate: { path: "rate", name: "Оценка" },
        bookmark: {
            path: "bookmark",
            name: "Избранное",
            component: (user) => (
                <Bookmark
                    bookmark={user.bookmark}
                    user={user}
                    handleToogleBookmark={handleToogleBookmark}
                />
            )
        },

        delete: {
            component: (user) => (
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                        handleDelete(user._id);
                    }}
                >
                    delete
                </button>
            )
        }
    };

    return (
        <Table>
            <TableHeader
                onSort={onSort}
                selectedSort={selectedSort}
                columns={columns}
            />
            <TableBody data={allUsers} columns={columns} />
        </Table>
    );
};

UsersTable.propTypes = {
    allUsers: PropTypes.array,
    handleDelete: PropTypes.func,
    handleToogleBookmark: PropTypes.func,
    onSort: PropTypes.func,
    selectedSort: PropTypes.object
};

export default UsersTable;

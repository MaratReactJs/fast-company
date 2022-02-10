import React, { useState } from "react";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import User from "./user";
import PropTypes from "prop-types";

const Users = ({ users, handleDelete, handleToogleBookmark }) => {
    // currentPage = текущая страница
    // countUsers = количество пользователей
    // pageSize = количество пользователей на странице
    // pageIndex = показывает какая страница
    // userCrop = разделение пользователей на страницы
    const countUsers = users.length;
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const userCrop = paginate(users, currentPage, pageSize);

    return (
        <>
            {countUsers > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился,раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userCrop.map((user) => {
                            return (
                                <User
                                    handleDelete={handleDelete}
                                    user={user}
                                    key={user._id}
                                    handleToogleBookmark={handleToogleBookmark}
                                />
                            );
                        })}
                    </tbody>
                </table>
            )}
            <Pagination
                itemsCount={countUsers}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
};

Users.propTypes = {
    users: PropTypes.array,
    handleDelete: PropTypes.func,
    handleToogleBookmark: PropTypes.func
};

export default Users;

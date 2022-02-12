import React, { useState, useEffect } from "react";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import User from "./user";
import PropTypes from "prop-types";
import GroupList from "./groupList";
import api from "../api";
import SearchStatus from "./searchStatus";

const Users = ({ users, handleDelete, handleToogleBookmark }) => {
    // currentPage = текущая страница
    // countUsers = количество пользователей
    // pageSize = количество пользователей на странице
    // pageIndex = показывает какая страница
    // userCrop = разделение пользователей на страницы

    const pageSize = 2;
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
    }, []);

    useEffect(() => {
        setCurrentPage();
    }, [selectedProf]);

    // чтобы вызвать useEffect один раз, нужно добавить через запятую пустой объект. В этот объект мы вписываем то что нам надо отследить

    const handlePofessionsSelect = (item) => {
        setSelectedProf(item);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleResetProf = () => {
        setSelectedProf();
    };

    const filteredUsers = selectedProf
        ? users.filter((user) => user.profession._id === selectedProf._id)
        : users;

    const countUsers = filteredUsers.length;

    const usersCrop = paginate(filteredUsers, currentPage, pageSize);

    return (
        <div className="d-flex ">
            {professions && (
                <div className="d-flex flex-column p-3">
                    <GroupList
                        items={professions}
                        onItemSelect={handlePofessionsSelect}
                        selectedItem={selectedProf}
                    />
                    <button
                        type="button"
                        className="btn btn-secondary mt-1"
                        onClick={handleResetProf}
                    >
                        Сбросить
                    </button>
                </div>
            )}

            <div className="d-flex flex-column ">
                <SearchStatus length={countUsers} />
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
                            {usersCrop.map((user) => {
                                return (
                                    <User
                                        handleDelete={handleDelete}
                                        user={user}
                                        key={user._id}
                                        handleToogleBookmark={
                                            handleToogleBookmark
                                        }
                                    />
                                );
                            })}
                        </tbody>
                    </table>
                )}
                <div className="d-flex justify-content-center">
                    <Pagination
                        itemsCount={countUsers}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
};

Users.propTypes = {
    users: PropTypes.array,
    handleDelete: PropTypes.func,
    handleToogleBookmark: PropTypes.func
};

export default Users;

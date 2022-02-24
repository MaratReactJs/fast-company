import React, { useState, useEffect } from "react";
import { paginate } from "../utils/paginate";
import Pagination from "../components/pagination";
import PropTypes from "prop-types";
import GroupList from "../components/groupList";
import api from "../api";
import SearchStatus from "../components/searchStatus";
import UsersTable from "../components/usersTable";
import _ from "lodash";

// useState = использовать состояние
// useEffect = использовать эффект
// paginate = разбивать на страницы

const Users = () => {
    // currentPage = текущая страница
    // countUsers = количество пользователей
    // pageSize = размер страницы
    // pageIndex = показывает какая страница
    // userCrop = обрезать пользователя (разделение пользователей на страницы)
    // selectedProf = выбранная профессия
    // sortBy = сортировать по
    // path = путь сортировки
    // order =  порядок
    // prevState = предыдущее состояние
    // fetchAll = получить все
    // setUsers = установить пользователей
    // data = данные
    // then = тогда
    // handleDelete = обработчик удаления
    // handleToogleBookmark = обработчик переключателя закладки
    // handleSort = обработчик сортировки
    // handlePofessionsSelect = обработчик выбора профессии
    // handleResetProf = обработчик сброса професий
    // orderBy = сортировать по
    // filteredUsers = отфильтрованные пользоватли

    const pageSize = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
    const [users, setUsers] = useState();

    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const handleDelete = (userId) => {
        setUsers((prevState) =>
            prevState.filter((user) => user._id !== userId)
        );
    };

    const handleToogleBookmark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    user.bookmark = !user.bookmark;
                }
                return user;
            })
        );
    };

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
    }, []);

    useEffect(() => {
        setCurrentPage();
    }, [selectedProf]);

    // чтобы вызвать useEffect один раз, нужно добавить через запятую пустой объект. В этот объект мы вписываем то что нам надо отследить

    const handleSort = (item) => {
        setSortBy(item);
    };

    const handlePofessionsSelect = (item) => {
        setSelectedProf(item);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleResetProf = () => {
        setSelectedProf();
    };

    if (users) {
        const filteredUsers = selectedProf
            ? users.filter((user) => user.profession._id === selectedProf._id)
            : users;

        const countUsers = filteredUsers.length;
        const sortedUsers = _.orderBy(
            filteredUsers,
            [sortBy.path],
            [sortBy.order]
        );
        // метод из библиотеки Lodash для сортировки _orderBy(наш массив,массив из параметров по которым будут сортировка, массив с параметром направления сортировки  по возрастанию или убыванию asc и desc)

        const usersCrop = paginate(sortedUsers, currentPage, pageSize);

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
                        <UsersTable
                            allUsers={usersCrop}
                            handleDelete={handleDelete}
                            handleToogleBookmark={handleToogleBookmark}
                            onSort={handleSort}
                            selectedSort={sortBy}
                        />
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
    }
    return "Loading...";
};

Users.propTypes = {
    users: PropTypes.array,
    handleDelete: PropTypes.func,
    handleToogleBookmark: PropTypes.func
};

export default Users;

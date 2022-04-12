import React from "react";
import { useParams } from "react-router-dom";
import UserPage from "../components/page/UserPage/userPage";
import UsersListPage from "../components/page/UserListPage/usersListPage";

const Users = () => {
    const params = useParams();
    const { userId } = params;
    return <>{userId ? <UserPage userId={userId} /> : <UsersListPage />}</>;
};

export default Users;

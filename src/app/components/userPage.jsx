import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../api";

const UserPage = ({ match, history }) => {
    //
    const UserPageId = match.params.users_id;

    const [user, setUser] = useState();

    useEffect(() => {
        api.users.getById(UserPageId).then((data) => setUser(data));
    }, []);

    const handleReturn = () => {
        history.replace("/users");
    };

    if (user) {
        return (
            <div className="ms-4">
                <h1>{user.name}</h1>
                <h2>{"Профессия: " + user.profession.name}</h2>
                {user.qualities.map((quality) => (
                    <span
                        key={quality._id}
                        className={`badge bg-${quality.color} me-2`}
                    >
                        {quality.name}
                    </span>
                ))}
                <h4>{"completedMeetings: " + user.completedMeetings}</h4>
                <h2>{"Rate: " + user.rate}</h2>
                <button
                    onClick={() => {
                        handleReturn();
                    }}
                >
                    Все пользователи
                </button>
            </div>
        );
    }
    return <h2>Loading...</h2>;
};

UserPage.propTypes = {
    match: PropTypes.object,
    history: PropTypes.object
};

export default UserPage;

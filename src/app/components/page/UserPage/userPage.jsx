import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import { Link } from "react-router-dom";

const UserPage = ({ userId }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);

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
                <Link
                    className="btn btn-secondary mb-3"
                    type="button"
                    to="/edit"
                >
                    Изменить
                </Link>
            </div>
        );
    }
    return <h2>Loading...</h2>;
};

UserPage.propTypes = {
    userId: PropTypes.string,
    history: PropTypes.object
};

export default UserPage;

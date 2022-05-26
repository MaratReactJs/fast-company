import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import { useHistory } from "react-router-dom";

const UserPage = ({ userId }) => {
    const history = useHistory();
    const [user, setUser] = useState();

    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);

    const handleClick = () => {
        history.push(history.location.pathname + "/edit");
    };

    if (user) {
        return (
            <div className="col-md-4 mb-3">
                <div className="card mb-3">
                    <div className="card-body">
                        <button
                            className="
                        position-absolute
                        top-0
                        end-0
                        btn btn-light btn-sm
                    "
                        >
                            <i className="bi bi-gear" onClick={handleClick}></i>
                        </button>
                        <div
                            className="
                        d-flex
                        flex-column
                        align-items-center
                        text-center
                        position-relative
                    "
                        >
                            <img
                                src="https://avatars.dicebear.com/api/avataaars/qweqwdas.svg"
                                className="rounded-circle"
                                width="150"
                            />
                            <div className="mt-3">
                                <h4>{user.name}</h4>
                                <p className="text-secondary mb-1">
                                    {user.profession.name}
                                </p>
                                <div className="text-muted">
                                    <i
                                        className="
                                    bi bi-caret-down-fill
                                    text-primary
                                "
                                        role="button"
                                    ></i>
                                    <i
                                        className="
                                    bi bi-caret-up
                                    text-secondary
                                "
                                        role="button"
                                    ></i>
                                    <span className="ms-2">{user.rate}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3">
                    <div
                        className="
                    card-body
                    d-flex
                    flex-column
                    justify-content-center
                    text-center
                "
                    >
                        <h5 className="card-title">
                            <span>Qualities</span>
                        </h5>
                        <p className="card-text">
                            {user.qualities.map((quality) => (
                                <span
                                    key={quality._id}
                                    className={`badge bg-${quality.color} me-2`}
                                >
                                    {quality.name}{" "}
                                </span>
                            ))}
                        </p>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="card mb-3">
                        <div
                            className="
                        card-body
                        d-flex
                        flex-column
                        justify-content-center
                        text-center
                    "
                        >
                            <h5 className="card-title">
                                <span>Completed meetings</span>
                            </h5>

                            <h1 className="display-1">125</h1>
                        </div>
                    </div>
                </div>
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

/* <div classNameName="ms-4">
                <h1>{user.name}</h1>
                <h2>{"Профессия: " + user.profession.name}</h2>
                {user.qualities.map((quality) => (
                    <span
                        key={quality._id}
                        classNameName={`badge bg-${quality.color} me-2`}
                    >
                        {quality.name}
                    </span>
                ))}
                <h4>{"completedMeetings: " + user.completedMeetings}</h4>
                <h2>{"Rate: " + user.rate}</h2>
                <button classNameName="btn btn-primary m-2" onClick={handleClick}>
                    Изменить
                </button>
            </div> */

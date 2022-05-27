import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import { useHistory } from "react-router-dom";
import * as yup from "yup";

import SelectField from "../../common/form/selectField";
import TextAreaField from "../../common/form/textAreaField";

const UserPage = ({ userId }) => {
    const history = useHistory();
    const [user, setUser] = useState();
    const [users, setUsers] = useState();
    const [data, setData] = useState({
        comment: "",
        userSelected: ""
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const validateSheme = yup.object().shape({
        comment: yup.string().required("Поле обязательно для заполнения"),
        userSelected: yup.string().required("Поле обязательно для заполнения")
    });

    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        validateSheme
            .validate(data)
            .then(() => setErrors({}))
            .catch((err) => setErrors({ [err.path]: err.message }));
        return Object.keys(errors).length === 0;
    };

    const noErrors = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(data);
    };

    const handleChange = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    const handleClick = () => {
        history.push(history.location.pathname + "/edit");
    };

    if (user) {
        return (
            <div className="container d-flex">
                <div className="col-md-4 mb-3 me-3 ">
                    {/* User Card */}
                    <div className="card mb-3 ">
                        <div className="card-body">
                            <button className="position-absolute top-0 end-0 btn btn-light btn-sm">
                                <i
                                    className="bi bi-gear"
                                    onClick={handleClick}
                                ></i>
                            </button>
                            <div className="d-flex flex-column align-items-center text-center position-relative">
                                <img
                                    src={`https://avatars.dicebear.com/api/avataaars/${(
                                        Math.random() + 1
                                    )
                                        .toString(36)
                                        .substring(7)}.svg`}
                                    className="rounded-circle shadow-1-strong me-3"
                                    alt="avatar"
                                    width="65"
                                    height="65"
                                />
                                <div className="mt-3">
                                    <h4>{user.name}</h4>
                                    <p className="text-secondary mb-1">
                                        {user.profession.name}
                                    </p>
                                    <div className="text-muted">
                                        <i
                                            className="bi bi-caret-down-fill text-primary"
                                            role="button"
                                        ></i>
                                        <i
                                            className="bi bi-caret-up text-secondary"
                                            role="button"
                                        ></i>
                                        <span className="ms-2">
                                            {user.rate}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Qualities Card */}
                    <div className="card mb-3">
                        <div className="card-body d-flex flex-column justify-content-center text-center">
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
                    {/* MeetingsCard */}
                    <div className="card mb-3">
                        <div className="card-body d-flex flex-column justify-content-center text-center">
                            <h5 className="card-title">
                                <span>Completed meetings</span>
                            </h5>

                            <h1 className="display-1">
                                {user.completedMeetings}
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    {/* CommentsListComponent */}
                    <div className="card mb-2">
                        <div className="card-body">
                            <h2>New comment</h2>
                            <form onSubmit={handleSubmit}>
                                <SelectField
                                    label="Выберите пользователя"
                                    value={data.userSelected}
                                    onChange={handleChange}
                                    options={users}
                                    defaultOption="Choose...."
                                    error={errors.userSelected}
                                    name="userSelected"
                                />
                                <TextAreaField
                                    label="Сообщение"
                                    value={data.comment}
                                    onChange={handleChange}
                                    error={errors.comment}
                                    name="comment"
                                />

                                <button
                                    className="btn btn-primary"
                                    type="submit"
                                    disabled={!noErrors}
                                >
                                    Опубликовать
                                </button>
                            </form>
                        </div>
                    </div>
                    {/* Comment Components */}
                    <div className="card mb-3">
                        <div className="card-body">
                            <h2>Comments</h2>
                            <hr />
                            <div className="bg-light card-body mb-3">
                                <div className="row">
                                    <div className="col">
                                        <div className="d-flex flex-start">
                                            <img
                                                src={`https://avatars.dicebear.com/api/avataaars/${(
                                                    Math.random() + 1
                                                )
                                                    .toString(36)
                                                    .substring(7)}.svg`}
                                                className="rounded-circle shadow-1-strong me-3"
                                                alt="avatar"
                                                width="65"
                                                height="65"
                                            />
                                            <div className="flex-grow-1 flex-shrink-1">
                                                <div className="mb-4">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <p className="mb-1">
                                                            Джон Дориан
                                                            <span className="small">
                                                                {" "}
                                                                5 минут назад{" "}
                                                            </span>
                                                        </p>
                                                        <button className="btn btn-sm text-primary d-flex align-items-center">
                                                            <i className="bi bi-x-lg"></i>
                                                        </button>
                                                    </div>
                                                    <p className="small mb-0">
                                                        Lorem ipsum dolor sit
                                                        amet consectetur
                                                        adipisicing elit.
                                                        Corporis, soluta facilis
                                                        fugit hic quasi sapiente
                                                        accusamus quia
                                                        voluptatem dolorum
                                                        laboriosam id iste
                                                        voluptas modi animi eius
                                                        voluptatum adipisci amet
                                                        officiis.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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

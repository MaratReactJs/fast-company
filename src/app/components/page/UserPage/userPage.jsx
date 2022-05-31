import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../../../api";

import UserCard from "../../ui/userCard";
import QualitiesCard from "../../ui/qualitiesCard";
import MeetingsCard from "../../ui/meetingsCard";

const UserPage = ({ userId }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);

    if (user) {
        return (
            <div className="container d-flex">
                <div className="col-md-4 mb-3 me-3 ">
                    <UserCard user={user} />
                    <QualitiesCard data={user.qualities} />
                    <MeetingsCard value={user.completedMeetings} />
                </div>
                <div className="col-md-8"></div>
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

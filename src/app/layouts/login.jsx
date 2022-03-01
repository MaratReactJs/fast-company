import React, { useState } from "react";

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });

    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    return (
        <form action="">
            <div>
                <label htmlFor="email">
                    {" "}
                    Email
                    <input
                        type="text"
                        id="email"
                        value={data.email}
                        name="email"
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="password">
                    {" "}
                    Password
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                    />
                </label>
            </div>
        </form>
    );
};

export default Login;

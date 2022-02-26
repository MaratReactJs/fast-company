import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import UserPage from "./components/userPage";
import Login from "./layouts/login";
import Main from "./layouts/main";
import NotFoundPage from "./layouts/notFoundPage";
import Users from "./layouts/users";

const App = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/login" component={Login} />
                <Route
                    path="/users/:users_id"
                    render={(props) => <UserPage {...props} />}
                />
                <Route path="/users" component={Users} />
                <Route path="/404" component={NotFoundPage} />
                <Redirect from="/stats" to="/users" />
                <Redirect to="/404" />
            </Switch>
        </>
    );
};

export default App;

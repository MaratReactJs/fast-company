import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import Login from "./layouts/login";
import Main from "./layouts/main";
import NotFoundPage from "./layouts/notFoundPage";
import Users from "./layouts/users";

const App = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/users/:userId?" component={Users} />
                <Route exact path="/" component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/404" component={NotFoundPage} />
                <Redirect to="/404" />
            </Switch>
        </>
    );
};

export default App;

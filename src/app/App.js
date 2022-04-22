import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./components/ui/navBar";
import Login from "./layouts/login";
import Main from "./layouts/main";
import NotFoundPage from "./components/page/notFoundPage";
import Users from "./layouts/users";

const App = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/users/:userId?/:edit?" component={Users} />
                <Route exact path="/" component={Main} />
                <Route path="/login/:type?" component={Login} />
                <Route path="/404" component={NotFoundPage} />
                <Redirect to="/404" />
            </Switch>
        </>
    );
};

export default App;

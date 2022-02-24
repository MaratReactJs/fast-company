import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import Login from "./layouts/login";
import Main from "./layouts/main";
import Stats from "./layouts/stats";
import Users from "./layouts/users";

const App = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/login/stats" component={Stats} />
                <Route
                    path="/login"
                    render={(props) => <Login isAdmin={false} {...props} />}
                />
                <Route path="/users" component={Users} />
                <Route path="/" component={Main} />
            </Switch>
        </>
    );
};

export default App;

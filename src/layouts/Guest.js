import React from 'react';
import {Route, Switch, useHistory} from "react-router-dom";
import routes from "routes.js";
import store from "../store";

const Guest = (props) => {
    const user = store.getState().user;
    const history = useHistory();
    const getGuestRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.layout === "/auth") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        component={prop.component}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    }
    const content = React.useRef(null);

    return (
        <div className="content d-flex container" ref={content} style={{
            minHeight: "100vh",
        }}>
            {user && user.token && history.push('/')}
            <Switch>
                {getGuestRoutes(routes)}
            </Switch>
        </div>
    );
}

export default Guest;

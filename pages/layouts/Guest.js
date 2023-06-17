import React from 'react';
import {Route, Switch, useHistory} from "react-router-dom";
import routes from "../routes.js";
import store from "../store";

const Guest = ({children}) => {
    const user = store.getState().user;
    const history = useHistory();
    const content = React.useRef(null);

    return (
        <div className="content d-flex container" ref={content} dir={"rtl"}>
            {user && user.token && history.push('/')}
            {children}
        </div>
    );
}

export default Guest;

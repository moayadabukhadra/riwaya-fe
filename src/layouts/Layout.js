import React from 'react';
import store from "../store";
import {Provider} from "react-redux";
import {Redirect, Route, Switch} from "react-router-dom";
import routes from "routes.js";
import NavBar from "../common/NavBar";
import Footer from "../common/Footer";


const Layout = (props) => {
    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.layout === "/front") {
                return (
                    <Route
                        path={prop.path}
                        component={prop.component}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    }
    const mainContent = React.useRef(null);
        return (
            <Provider store={store}>
                <div className={"d-flex flex-column"}>
                    <NavBar/>
                    <div className="main-content p-0 m-0" ref={mainContent}>
                        <Switch>
                            {getRoutes(routes)}
                            <Redirect from="*" to="/"/>
                        </Switch>
                    </div>
                    <Footer/>
                    <a href="#" className={"scroll-to-top text-decoration-none"}>
                        <i className="fas fa-chevron-up"/>
                    </a>
                </div>
            </Provider>
        );
}

export default Layout;

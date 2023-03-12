import React from 'react';
import store from "../store";
import {Provider} from "react-redux";
import {Redirect, Route, Switch, useLocation} from "react-router-dom";
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
    const location = useLocation();
    React.useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        mainContent.current.scrollTop = 0;
    }, [location]);

    return (
        <Provider store={store}>
               <div className={"d-flex flex-column gap-4 mvh-100"}>
                   <NavBar/>
                   <div className="main-content" ref={mainContent}>
                       <Switch>
                           {getRoutes(routes)}
                           <Redirect from="*" to="/"/>
                       </Switch>
                   </div>
                   <Footer/>
               </div>
        </Provider>
    );
}

export default Layout;

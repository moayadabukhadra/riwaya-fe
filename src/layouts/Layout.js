import React, {useEffect, useState} from 'react';
import store from "../store";
import {Provider} from "react-redux";
import {Redirect, Route, Switch} from "react-router-dom";
import routes from "routes.js";
import NavBar from "../common/NavBar";
import Footer from "../common/Footer";
import toast, {Toaster} from "react-hot-toast";
import $ from "jquery";
import Pusher from 'pusher-js';

const Layout = (props) => {
    const [loginModal, setLoginModal] = useState(false);
    const user = store.getState().user

    useEffect(() => {
        const user = store.getState().user;
        const pusher = new Pusher('1d2155e8f9d2d65bf322', {
            cluster: 'ap2',
            encrypted: true,
        });

        const channel = pusher.subscribe('comments.' + user?.id);

        channel.bind('App\\Events\\NewComment', function (data) {
            toast.success('تم الرد على تعليقك من قبل ' + data.comment.user.name, {
                icon: '👏',
                duration: 5000,
                position: 'bottom-right',
                style: {
                    border: '1px solid #713200',
                    padding: '16px',
                    color: '#713200',
                    fontWeight: 600,
                    fontSize: '1.2rem',
                },
                id: 'custom-id-yes',
            });
        });

    }, []);
    const toggle = () => setLoginModal(!loginModal);
    $(document).ready(function () {

        $('[data-auth="true"]').each(function () {
            $(this)[0].addEventListener('submit', function (e) {
                e.stopImmediatePropagation();
                if (!user) {
                    toggle();
                }
            });
            $(this)[0].addEventListener('click', function (e) {
                e.stopImmediatePropagation();
                if (!user) {
                    toggle();
                }
            });
        });
    });


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
            <div className={"d-flex justify-content-between gap-5 flex-column"}>
                <Toaster/>
                <NavBar/>
                <div className="main-content m-0" ref={mainContent}>
                    <Switch>
                        {getRoutes(routes)}
                        <Redirect from="*" to="/"/>
                    </Switch>
                </div>
                <Footer/>
                <a href="#" className={"scroll-to-top text-decoration-none d-none"}>
                    <i className="fas fa-chevron-up"/>
                </a>
            </div>

        </Provider>
    );
}

export default Layout;

import React, {useEffect, useState} from 'react';
import store from "../store";
import {Provider} from "react-redux";
import {Redirect, Route, Switch} from "react-router-dom";
import routes from "routes.js";
import NavBar from "../common/NavBar";
import Footer from "../common/Footer";
import {Toaster} from "react-hot-toast";
import $ from "jquery";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

const Layout = (props) => {
    const [loginModal, setLoginModal] = useState(false);
    const user = store.getState().user
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
                <a href="#" className={"scroll-to-top text-decoration-none"}>
                    <i className="fas fa-chevron-up"/>
                </a>
            </div>
            <Modal isOpen={loginModal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Do Something
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </Provider>
    );
}

export default Layout;

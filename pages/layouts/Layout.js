import React, { useEffect } from 'react';
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import store from "/src/store";
import NavBar from "../common/NavBar";
import Footer from "../common/Footer";
import Pusher from 'pusher-js';

const Layout = ({ children }) => {
    const router = useRouter();
    const user = store.getState().user;

    useEffect(() => {
        const pusher = new Pusher('1d2155e8f9d2d65bf322', {
            cluster: 'ap2',
            encrypted: true,
        });

        const channel = pusher.subscribe('comments.' + user?.id);

        channel.bind('App\\Events\\NewComment', function (data) {
            // Handle toast notification
        });

        return () => {
            // Unsubscribe from Pusher channel on component unmount
            pusher.unsubscribe('comments.' + user?.id);
        };
    }, [user]);

    return (
        <div dir={"rtl"}>
            <Provider store={store}>
                <NavBar />
                <div className="main-content">{children}</div>
                <Footer />
            </Provider>
        </div>
    );
}

export default Layout;

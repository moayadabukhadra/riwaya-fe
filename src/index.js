import {BrowserRouter, Route, Switch} from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactDOM from "react-dom/client";
import Layout from "./layouts/Layout";
import Guest from "./layouts/Guest";
import "assets/css/custom.scss";
import 'assets/css/custom.css';
import "./index.css";
import "fonts/Gulzar/Gulzar-Regular.ttf";
import "fonts/Amiri/Amiri-Regular.ttf";
import {HelmetProvider} from "react-helmet-async";
import {GoogleOAuthProvider} from "@react-oauth/google";
import React from "react";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <GoogleOAuthProvider clientId={"568497747334-dt5ek21j3prthr149h5cirve4gtfeqcj.apps.googleusercontent.com"}>
        <HelmetProvider>
            <BrowserRouter>
                <Switch>
                    <Route path="/auth" render={(props) => <Guest {...props} />}/>
                    <Route path="/" render={(props) => <Layout {...props} />}/>
                </Switch>
            </BrowserRouter>
        </HelmetProvider>
    </GoogleOAuthProvider>
);

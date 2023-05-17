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


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <HelmetProvider>
        <BrowserRouter>
            <Switch>
                <Route path="/auth" render={(props) => <Guest {...props} />}/>
                <Route path="/" render={(props) => <Layout {...props} />}/>
            </Switch>
        </BrowserRouter>
    </HelmetProvider>
);

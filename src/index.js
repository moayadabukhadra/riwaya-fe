import {BrowserRouter, Route, Switch} from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactDOM from "react-dom/client";
import Layout from "./layouts/Layout";
import "assets/css/custom.scss";
import 'assets/css/custom.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
        <BrowserRouter>
            <Switch>
                <Route path="/" render={(props) => <Layout {...props} />}/>
            </Switch>
        </BrowserRouter>
);

import {BrowserRouter, Route, Switch} from "react-router-dom";
import "./assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";
import "./assets/css/styles.css";
import ReactDOM from "react-dom/client";
import AdminLayout from "./layouts/Admin.js";
import AuthLayout from "./layouts/Auth.js";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

        <BrowserRouter>
            <Switch>
                <Route path="/admin" render={(props) => <AdminLayout {...props} />}/>
                <Route path="/auth" render={(props) => <AuthLayout {...props} />}/>
            </Switch>
        </BrowserRouter>
);

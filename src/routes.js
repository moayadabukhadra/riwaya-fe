
import Books from "./views/Front/Books";

var routes = [
    /* front */
    {
        path: "/books",
        name: "الكتب",
        icon: "fa fa-book text-red",
        component: Books,
        layout: "/front",
        role: ['guest','user'],
        show: true,
    }
];
export default routes;

/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Icons from "views/examples/Icons.js";
import BookForm from "views/Admin/books/BookForm.js";
import BooksTable from "./views/Admin/books/BooksTable";
import CategoryForm from "./views/Admin/Ctegories/CategoryForm";
import CategoriesTable from "./views/Admin/Ctegories/CategoriesTable";
import AuthorsTable from "./views/Admin/Authors/AuthorsTable";
import AuthorForm from "./views/Admin/Authors/AuthorForm";

var routes = [
    {
        path: "/index",
        name: "Dashboard",
        icon: "ni ni-tv-2 text-primary",
        component: Index,
        layout: "/admin",
        role: ["admin"],
        show: true,
    },
    {
        path: "/user-profile",
        name: "User Profile",
        icon: "ni ni-single-02 text-yellow",
        component: Profile,
        layout: "/admin",
        'role': [null],
        show: true,
    },
    {
        path: "/login",
        name: "Login",
        icon: "ni ni-key-25 text-info",
        component: Login,
        layout: "/auth",
        role: ['guest'],
        show: false,
    },
    {
        path: "/register",
        name: "Register",
        icon: "ni ni-circle-08 text-pink",
        component: Register,
        layout: "/auth",
        role: ['guest'],
        show: false,
    },
    {
        path: "/book/show",
        name: "اضافة كتاب",
        icon: "ni ni-circle-08 text-pink",
        component: BookForm,
        layout: "/admin",
        role: ['admin' , 'content_creator' , 'content_manager'],
        show: false,
    },
    {
        path: "/books",
        name: "الكتب",
        icon: "fa fa-book text-red",
        component: BooksTable,
        layout: "/admin",
        role: ['admin' , 'content_creator' , 'content_manager'],
        show: true,
    },
    {
        path: "/categories",
        name: "التصنيفات",
        icon: "ni ni-bullet-list-67 text-red",
        component: CategoriesTable,
        layout: "/admin",
        role: ['admin' , 'content_creator' , 'content_manager'],
        show: true,
    },
    {
        path: "/category/show",
        name: "اضافة تصنيف",
        icon: "ni ni-circle-08 text-pink",
        component: CategoryForm,
        layout: "/admin",
        role: ['admin' , 'content_creator' , 'content_manager'],
        show: false,
    },
    /* Authors */
    {
        path: "/authors",
        name: "المؤلفين",
        icon: "ni ni-bullet-list-67 text-red",
        component: AuthorsTable,
        layout: "/admin",
        role: ['admin' , 'content_creator' , 'content_manager'],
        show: true,
    },
    {
        path: "/author/show",
        name: "اضافة مؤلف",
        icon: "ni ni-circle-08 text-pink",
        component: AuthorForm,
        layout: "/admin",
        role: ['admin' , 'content_creator' , 'content_manager'],
        show: false,
    }
];
export default routes;

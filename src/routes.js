import Books from "./views/Books";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import Authors from "./views/Authors";
import ProfilePage from "./views/ProfilePage";
import Home from "./views/Home";
import Quotes from "./views/Quotes";
import SearchResults from "./views/SearchResults";
import ContactUs from "./views/ContactUs";
import ForgotPassword from "./views/auth/ForgotPassword";
import ResetPassword from "./views/auth/ResetPassword";

const routes = [
    /* front */
    {
        path: "/books",
        name: "الكتب",
        component: Books,
        layout: "/front",
        role: ['guest', 'user'],
    },
    {
        path: '/authors',
        name: 'المؤلفين',
        component: Authors,
        layout: '/front',
        role: ['guest', 'user'],
    },
    {
        path: '/profile',
        name: 'الملف الشخصي',
        component: ProfilePage,
        layout: '/front',
        role: ['user'],
    },
    {
        path: '/quotes',
        name: 'الاقتباسات',
        component: Quotes,
        layout: '/front',
        role: ['user'],
    },
    {
        path: '/search',
        name: 'البحث',
        component: SearchResults,
        layout: '/front',
        role: ['user', 'guest']
    },
    {
        path: '/contact-us',
        name: 'تواصل معنا',
        component: ContactUs,
        layout: '/front',
        role: ['user', 'guest']
    },
    {
        path: '/',
        name: 'الرئيسية',
        component: Home,
        layout: '/front',
        role: ['user', 'guest']
    },
    /* auth routes */
    {
        path: "/login",
        name: "تسجيل الدخول",
        component: Login,
        layout: "/auth",
        role: ['guest'],
    },
    {
        path: "/register",
        name: "انشاء حساب",
        component: Register,
        layout: "/auth",
        role: ['guest'],
    },
    {
        path: "/forgot-password",
        name: "نسيت كلمة المرور",
        component: ForgotPassword,
        layout: "/auth",
        role: ['guest'],
    },
    {
        path: "/reset-password/:token/:email",
        name: "اعادة تعيين كلمة المرور",
        component: ResetPassword,
        layout: "/auth",
        role: ['guest'],
    }
];
export default routes;

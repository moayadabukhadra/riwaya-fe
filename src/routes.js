import Books from "./books";
import Login from "./auth/login";
import Register from "./auth/register";
import Authors from "./authors";
import ProfilePage from "./profile-page";
import Index from "./index";
import Quotes from "./quotes";
import SearchResults from "./SearchResults";
import ContactUs from "./contact-us";
import ForgotPassword from "./auth/forgot-password";
import ResetPassword from "./auth/reset-password";
import MyLibrary from "./my-library";

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
        path: '/my-library',
        name: 'مكتبتي',
        component: MyLibrary,
        layout: '/front',
        role: ['user']
    },
    {
        path: '/',
        name: 'الرئيسية',
        component: Index,
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
    },

];
export default routes;

(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[76],{9104:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/forgot-password",function(){return n(3917)}])},7521:function(e,t,n){"use strict";var o=n(8682);t.Z={login:function(e){return o.Z.post("login",e)},register:function(e){return o.Z.post("/register",e)},getRole:function(){return o.Z.post("user-role")},logout:function(){return o.Z.post("/logout")},facebookLogin:function(e){return o.Z.post("auth/facebook",e)},editProfile:function(e){return o.Z.post("edit-profile",e)},editProfileImage:function(e){return o.Z.post("edit-profile-image",e)},forgetPassword:function(e){return o.Z.post("auth/forgot-password",e)},resetPassword:function(e){return o.Z.post("auth/reset-password",e)},googleLogin:function(e){return o.Z.post("auth/google",e)},getUserBooks:function(e){return console.log("page",e),o.Z.get("my-library?page=".concat(e))},checkLibraryForBook:function(e){return o.Z.get("check-library-for-book/".concat(e))},updateLibrary:function(e){return o.Z.post("update-library/".concat(e))}}},8682:function(e,t,n){"use strict";var o=n(6154),r=n(5991),a=n(3454),s=o.Z.create({baseURL:a.env.API_URL||"https://riwaya.rf.gd/api"});s.interceptors.request.use(function(e){var t=r.Z.getState().token;return t&&(e.headers.Authorization="Bearer ".concat(t)),e},function(e){Promise.reject(e)}),t.Z=s},3917:function(e,t,n){"use strict";n.r(t);var o=n(5893),r=n(8489);n(7294);var a=n(7521);t.default=function(){return(0,o.jsxs)("div",{className:"d-flex align-items-center justify-content-between flex-grow-1",children:[(0,o.jsxs)("a",{className:"position-absolute text-primary d-flex align-items-center gap-1",href:"/",style:{top:"2rem",left:"2rem"},children:[(0,o.jsx)("i",{className:"fas fa-arrow-left"}),(0,o.jsx)("span",{children:"الصفحة الرئيسية"})]}),(0,o.jsxs)(r.l0,{onSubmit:function(e){e.preventDefault();var t={email:e.target.email.value};a.Z.forgetPassword(t).then(function(e){console.log(e.data)})},className:"guest-container shadow p-5 rounded-3",children:[(0,o.jsx)("h1",{className:"text-amiri text-center mb-3",children:"نسيت كلمة المرور"}),(0,o.jsxs)("div",{className:"mb-3 position-relative",children:[(0,o.jsx)("i",{className:"fa fa-envelope position-absolute end-0 border-start px-2 fs-4 text-secondary",style:{top:"40px"}}),(0,o.jsx)("label",{className:"form-label",children:"البريد الالكتروني"}),(0,o.jsx)("input",{type:"email",className:"form-control  pe-5",name:"email"})]}),(0,o.jsx)("button",{type:"submit",className:"btn btn-primary text-white w-100",children:"ارسال رابط استعادة كلمة المرور"})]}),(0,o.jsx)("div",{className:"col-7 h-100 d-none d-md-block",style:{backgroundImage:'url("/images/login-img.png")',backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"}})]})}}},function(e){e.O(0,[18,774,888,179],function(){return e(e.s=9104)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[35],{6742:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/reset-password",function(){return n(2709)}])},7521:function(e,t,n){"use strict";var r=n(8682);t.Z={login:function(e){return r.Z.post("login",e)},register:function(e){return r.Z.post("/register",e)},getRole:function(){return r.Z.post("user-role")},logout:function(){return r.Z.post("/logout")},facebookLogin:function(e){return r.Z.post("auth/facebook",e)},editProfile:function(e){return r.Z.post("edit-profile",e)},editProfileImage:function(e){return r.Z.post("edit-profile-image",e)},forgetPassword:function(e){return r.Z.post("auth/forgot-password",e)},resetPassword:function(e){return r.Z.post("auth/reset-password",e)},googleLogin:function(e){return r.Z.post("auth/google",e)},getUserBooks:function(e){return console.log("page",e),r.Z.get("my-library?page=".concat(e))},checkLibraryForBook:function(e){return r.Z.get("check-library-for-book/".concat(e))},updateLibrary:function(e){return r.Z.post("update-library/".concat(e))}}},8682:function(e,t,n){"use strict";var r=n(6154),o=n(5991),a=n(3454),s=r.Z.create({baseURL:a.env.API_URL||"https://riwaya.rf.gd/api"});s.interceptors.request.use(function(e){var t=o.Z.getState().token;return t&&(e.headers.Authorization="Bearer ".concat(t)),e},function(e){Promise.reject(e)}),t.Z=s},2709:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=n(8489);n(7294);var a=n(7521),s=n(3879),i=n(6455),c=n.n(i);t.default=function(e){var t,n,i=null==e?void 0:null===(t=e.match)||void 0===t?void 0:t.params.token,u=null==e?void 0:null===(n=e.match)||void 0===n?void 0:n.params.email,l=(0,s.k6)();return(0,r.jsxs)("div",{className:"d-flex align-items-center justify-content-center flex-grow-1",children:[(0,r.jsxs)("a",{className:"position-absolute text-primary d-flex align-items-center gap-1",href:"/",style:{top:"2rem",left:"2rem"},children:[(0,r.jsx)("i",{className:"fas fa-arrow-left"}),(0,r.jsx)("span",{children:"الصفحة الرئيسية"})]}),(0,r.jsxs)(o.l0,{onSubmit:function(e){e.preventDefault();var t=e.target.password.value,n=e.target.password_confirmation.value;t===n&&a.Z.resetPassword({password:t,password_confirmation:n,token:i,email:u}).then(function(){}).then(function(){l.push("/auth/login")}).catch(function(e){c().fire({title:e.response.data.message,text:"يرجى المحاولة مرة أخرى",icon:"error",confirmButtonText:"حسناً"})})},className:"guest-container shadow p-5 rounded-3",children:[(0,r.jsx)("h1",{className:"text-amiri text-center mb-3",children:"إعادة تعيين كلمة المرور"}),(0,r.jsx)("input",{hidden:!0,name:"token",value:i}),(0,r.jsx)("input",{hidden:!0,name:"email"}),(0,r.jsxs)("div",{className:"mb-3 position-relative",children:[(0,r.jsx)("label",{className:"form-label",children:"كلمة المرور الجديدة"}),(0,r.jsx)("input",{type:"password",className:"form-control",name:"password"})]}),(0,r.jsxs)("div",{className:"mb-3 position-relative",children:[(0,r.jsx)("label",{className:"form-label",children:"تأكيد كلمة المرور الجديدة"}),(0,r.jsx)("input",{type:"password",className:"form-control",name:"password_confirmation"})]}),(0,r.jsx)("button",{type:"submit",className:"btn btn-primary text-white w-100",children:"إعادة تعيين كلمة المرور"})]}),(0,r.jsx)("div",{className:"w-50 h-100 d-none d-md-block",style:{backgroundImage:'url("/images/login-img.png")',backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"}})]})}}},function(e){e.O(0,[18,746,879,774,888,179],function(){return e(e.s=6742)}),_N_E=e.O()}]);
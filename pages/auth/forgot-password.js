import {Form, Row} from "reactstrap";
import React from "react";
import UserApi from "../../src/api/User";
const ForgotPassword = () => {
    const handleSendResetPasswordLink = (e) => {
        e.preventDefault();
        const credentials = {
            email: e.target.email.value,
        }
        UserApi.forgetPassword(credentials).then(({data}) => {
            console.log(data)

        });
    }
    return (
        <div className={"d-flex align-items-center justify-content-between flex-grow-1"}>
            <a className={"position-absolute text-primary d-flex align-items-center gap-1"} href={"/"} style={{
                top: '2rem',
                left: '2rem'
            }}>
                <i className={"fas fa-arrow-left"}></i>
                <span>الصفحة الرئيسية</span>
            </a>
            <Form onSubmit={handleSendResetPasswordLink} className={"guest-container shadow p-5 rounded-3"} >
                <h1 className={"text-amiri text-center mb-3"}>نسيت كلمة المرور</h1>
                <div className="mb-3 position-relative">
                    <i className={"fa fa-envelope position-absolute end-0 border-start px-2 fs-4 text-secondary"}
                       style={{top: "40px"}}></i>
                    <label className="form-label">البريد الالكتروني</label>
                    <input type="email" className="form-control  pe-5" name={"email"}/>
                </div>

                <button type="submit" className="btn btn-primary text-white w-100">
                    ارسال رابط استعادة كلمة المرور
                </button>


            </Form>
            <div className={"col-7 h-100 d-none d-md-block"} style={{
                backgroundImage: `url("/images/login-img.png")`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}></div>
        </div>
    );
}

export default ForgotPassword;
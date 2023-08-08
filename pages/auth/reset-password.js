import {Form} from "reactstrap";
import React from "react";
import UserApi from "../../src/api/User";
import {useHistory} from "react-router-dom";
import Swal from "sweetalert2";

const ResetPassword = (props) => {
    const token = props?.match?.params.token;
    const email = props?.match?.params.email;
    const history = useHistory();
    const handleResetPassword = (e) => {
        e.preventDefault();
        const password = e.target.password.value;
        const password_confirmation = e.target.password_confirmation.value;
        if (password !== password_confirmation) {
            return;
        }
        const data = {password, password_confirmation, token, email};

        UserApi.resetPassword(data).then(() => {
        }).then(() => {
            history.push('/auth/login');
        }).catch((err) => {
            Swal.fire({
                title: err.response.data.message,
                text:  'يرجى المحاولة مرة أخرى',
                icon: 'error',
                confirmButtonText: 'حسناً'
            })
        })
    }
    return (

        <div className={"d-flex align-items-center justify-content-center flex-grow-1"}>
            <a className={"position-absolute text-primary d-flex align-items-center gap-1"} href={"/"} style={{
                top: '2rem',
                left: '2rem'
            }}>
                <i className={"fas fa-arrow-left"}></i>
                <span>الصفحة الرئيسية</span>
            </a>
            <Form onSubmit={handleResetPassword} className={"guest-container shadow p-5 rounded-3"}>
                <h1 className={"text-amiri text-center mb-3"}>
                    إعادة تعيين كلمة المرور
                </h1>
                <input hidden name={"token"} value={token}/>
                <input hidden name={"email"}/>
                <div className="mb-3 position-relative">
                    <label className="form-label">كلمة المرور الجديدة</label>
                    <input type="password" className="form-control" name={"password"}/>
                </div>
                <div className="mb-3 position-relative">

                    <label className="form-label">تأكيد كلمة المرور الجديدة</label>
                    <input type="password" className="form-control" name={"password_confirmation"}/>
                </div>

                <button type="submit" className="btn btn-primary text-white w-100">
                    إعادة تعيين كلمة المرور
                </button>


            </Form>
            <div className={"w-50 h-100 d-none d-md-block"} style={{
                backgroundImage: `url("/images/login-img.png")`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}></div>
        </div>
    );
}

export default ResetPassword;
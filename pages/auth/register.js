import {Form, Row} from "reactstrap";
import React from "react";
import UserApi from "../api/User";
import store from "../store";
import {useHistory} from "react-router-dom";
import FacebookLogin from "@greatsumini/react-facebook-login";
import {GoogleLogin} from "@react-oauth/google";

const Register = () => {
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        const credentials = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            c_password: e.target.c_password.value,
        }
        UserApi.register(credentials).then(({data}) => {
            console.log(data)
            store.dispatch({
                type: 'REGISTER',
                payload: data.success
            });
            history.push('/');
        })
    }

    const handleFacebookLogin = (response) => {
        UserApi.facebookLogin({
            accessToken: response.accessToken
        }).then(({data}) => {
            store.dispatch({
                type: 'LOGIN',
                payload: data.success
            });
            history.push('/');
        })
    }

    const handleGoogleLogin = (response) => {

        const encodedPayload = response.credential.split('.')[1];
        const decodedPayload = atob(encodedPayload);
        const utf8Payload = decodeURIComponent(escape(decodedPayload));
        const payload = JSON.parse(utf8Payload);
        UserApi.googleLogin(
            payload
        ).then(({data}) => {
            store.dispatch({
                type: 'LOGIN',
                payload: data.success
            });
            history.push('/');
        })
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
            <Form className={"guest-container shadow p-5 rounded-3"} onSubmit={handleSubmit}>
                <h1 className={"text-amiri text-center mb-3"}>إنشاء حساب</h1>
                <div className="mb-2">
                    <label className="form-label">الاسم</label>
                    <input type="name" className="form-control" name={"name"}/>
                </div>
                <div className="mb-2">
                    <label className="form-label">البريد الالكتروني</label>
                    <input type="email" className="form-control" name={"email"}/>
                </div>
                <div className="mb-2">
                    <label className="form-label"> كلمة المرور</label>
                    <input type="password" className="form-control" name={"password"}/>
                </div>
                <div className="mb-2">
                    <label className="form-label">تاكيد كلمة المرور</label>
                    <input type="password" className="form-control" name={"c_password"}/>
                </div>
                <button type="submit" className="btn btn-primary text-white w-100">إنشاء حساب</button>

                <div className={"text-center mt-3"}>
                    <span className={"text-secondary"}>
                        لديك حساب؟
                    </span>
                    <a href="/auth/login" className={"text-decoration-none text-gulzar"}>
                        تسجيل الدخول
                    </a>
                </div>

                <div className={"text-center mt-3"}>
                    <span className={"text-secondary"}>تسجيل الدخول بواسطة</span>
                    <Row className={"justify-content-center mt-1"}>
                        <div className={"col-2"}>
                            <FacebookLogin
                                appId="1304757180291828"
                                style={{
                                    backgroundColor: '#3b5998',
                                    border: 'none',
                                    color: 'white',
                                    padding: '10px 15px',
                                    textAlign: 'center',
                                    borderRadius: '5px',
                                    cursor: 'pointer'
                                }}
                                children={<i className={"fab fa-facebook-f"}></i>}
                                onSuccess={(response) => handleFacebookLogin(response)}
                            />


                        </div>
                        <div className={"col-2"}>
                            <GoogleLogin
                                onSuccess={handleGoogleLogin}
                                onFailure={handleGoogleLogin}
                                containerProps={{
                                    dir: 'rtl',
                                    lang: 'ar',
                                }}
                                useOneTap={true}
                            />
                        </div>
                    </Row>
                </div>
            </Form>
            <div className={"w-50 h-100  d-none d-md-block"} style={{
                backgroundImage: `url("/images/login-img.png")`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}></div>
        </div>
    );

}
export default Register;
import {Form, Row} from "reactstrap";
import React from "react";
import UserApi from "../api/User";
import store from "/src/store";
import FacebookLogin from '@greatsumini/react-facebook-login';
import {GoogleLogin} from '@react-oauth/google';
import {useRouter} from "next/router";

const Login = () => {
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        const credentials = {
            email: e.target.email.value,
            password: e.target.password.value,
        }
        UserApi.login(credentials).then(({data}) => {
            store.dispatch({
                type: 'LOGIN',
                payload: data.success
            });
            router.push('/');
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
            router.push('/');
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
            router.push('/');
        })
    }
    return (
        <div className={"d-flex align-items-start justify-content-between flex-grow-1"}>
            <a className={"position-absolute text-primary d-flex align-items-center gap-1"} href={"/"} style={{
                top: '2rem',
                left: '2rem'
            }}>
                <i className={"fas fa-arrow-left"}></i>
                <span>الصفحة الرئيسية</span>
            </a>
            <Form className={"guest-container shadow p-4 rounded-3"} onSubmit={handleSubmit}>
                <h1 className={"text-amiri text-center mb-3"}>تسجيل الدخول</h1>
                <div className="mb-3 position-relative">
                    <i className={"fa fa-envelope position-absolute end-0 border-start px-2 fs-4 text-secondary"}
                       style={{top: "40px"}}></i>
                    <label className="form-label">البريد الالكتروني</label>
                    <input type="email" className="form-control  pe-5" name={"email"}/>
                </div>
                <div className="mb-3 position-relative">
                    <i className={"fa fa-lock position-absolute end-0 border-start px-2 fs-4 text-secondary"}
                       style={{top: "40px"}}></i>
                    <label className="form-label"> كلمة المرور</label>
                    <input type="password" className="form-control pe-5" name={"password"}/>
                </div>
                <div className={"d-flex align-items-center justify-content-between"}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">تذكرني</label>
                        <input type="checkbox" className="form-check-input me-1"/>
                    </div>
                    <div className={"mb-3"}>
                        <a href="/auth/forgot-password" className={"text-decoration-none text-gulzar"}>نسيت كلمة
                            المرور؟</a>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary text-white w-100">تسجيل الدخول</button>

                <div className={"text-center mt-3"}>
                    <span className={"text-secondary"}>ليس لديك حساب؟</span>
                    <a href="/auth/register" className={"text-decoration-none text-gulzar"}>انشاء حساب</a>
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
                            >
                            </FacebookLogin>


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
            <div className={"w-50 h-100 d-none d-md-block"} style={{
                backgroundImage: `url("/images/login-img.png")`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}></div>
        </div>
    );

}
export default Login;

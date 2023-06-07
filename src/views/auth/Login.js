import {Form, Row} from "reactstrap";
import React from "react";
import UserApi from "../../api/User";
import store from "../../store";
import {useHistory} from "react-router-dom";
import FacebookLogin from '@greatsumini/react-facebook-login';
import {GoogleLogin} from '@react-oauth/google';

const Login = () => {
    const history = useHistory();
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
        console.log(encodedPayload);
        const decodedPayload = atob(encodedPayload);
        const utf8Payload = decodeURIComponent(escape(decodedPayload));
        const payload = JSON.parse(utf8Payload);
        console.log(payload);
        // UserApi.googleLogin(
        //     payload
        // ).then(({data}) => {
        //     console.log(data);
        //     // store.dispatch({
        //     //     type: 'LOGIN',
        //     //     payload: data.success
        //     // });
        //     // history.push('/');
        // })
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
                                    padding: '10px',
                                    borderRadius: '5px',
                                    cursor: 'pointer'
                                }}
                                children={<i className={"fab fa-facebook-f p-0 fs-5"}></i>}
                                onSuccess={(response) => handleFacebookLogin(response)}
                            />


                        </div>
                        <div className={"col-2"}>
                            <GoogleLogin

                                onSuccess={handleGoogleLogin}
                            />


                        </div>
                        <div className={"col-2"}>
                            <a href="#" className={"text-decoration-none text-danger"}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="icon icon-tabler icon-tabler-brand-instagram"
                                     width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                     fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path
                                        d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                                    <path d="M16.5 7.5l0 .01"></path>
                                </svg>
                            </a>
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

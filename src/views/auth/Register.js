import {Form, Row} from "reactstrap";
import React from "react";
import UserApi from "../../api/User";
import store from "../../store";
import {useHistory} from "react-router-dom";

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
    return (
        <div className={"d-flex align-items-center justify-content-between flex-grow-1"}>
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
                            <a href="#" className={"text-decoration-none text-gulzar"}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="icon icon-tabler icon-tabler-brand-facebook"
                                     width="24" height="24" viewBox="0 0 24 24" stroke="currentColor"
                                     fill="none">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path
                                        d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                                </svg>
                            </a>
                        </div>
                        <div className={"col-2"}>
                            <a href="#" className={"text-decoration-none text-dark"}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="icon icon-tabler icon-tabler-brand-github-filled" width="24" height="24"
                                     viewBox="0 0 24 24" stroke="currentColor" fill="none">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path
                                        d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z"
                                        fill="currentColor"></path>
                                </svg>
                            </a>
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
            <div className={"w-50 h-100"} style={{
                backgroundImage: `url("/images/login-img.png")`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}></div>
        </div>
    );

}
export default Register;
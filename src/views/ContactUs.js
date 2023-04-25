import React from "react";
import MessageApi from "../api/Message";

const ContactUs = () => {

    const handleSendMessage = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;

        MessageApi.sendMessage({name, email, message}).then(({data}) => {
            console.log(data);
        }).catch(err => {
            console.log(err);
        });
    }
    return (
        <div className="container content">
            <h1 className={"text-center mb-5"}>تواصل معنا</h1>
            <div className="row justify-content-center">
                <div className={"col-md-5 d-none d-md-block"} style={{
                    backgroundImage: `url("/images/contact-us.png")`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}></div>


                <div className={"col-md-7 col-12"}>
                    <form onSubmit={handleSendMessage} method="POST" className="contact-form">
                        <div className="form-group mb-3">
                            <input type="text" className="form-control" id="name" name={"name"} placeholder="الاسم"
                                   required/>
                        </div>
                        <div className="form-group mb-3">
                            <input type="email" className="form-control" id="email" name={"email"}
                                   placeholder="البريد الإلكتروني"
                                   required/>
                        </div>
                        <div className="form-group mb-3">
                            <textarea className="form-control" id="message" name={"message"} rows="5"
                                      placeholder="الرسالة"
                                      required/>
                        </div>
                        <button type="submit" className="btn btn-primary d-flex align-items-center gap-1 float-start">
                            <i className="fa fa-paper-plane"></i>
                            إرسال
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;
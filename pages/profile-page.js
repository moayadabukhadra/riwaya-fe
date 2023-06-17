import store from "./store";
import ImageInput from "./components/ImageInput";
import React, {useState} from "react";
import UserApi from "./api/User";
import LoadingScreen from "./components/LoadingScreen";
import {Row} from "reactstrap";

const ProfilePage = () => {
    const user = store.getState().user;
    const [loading, setLoading] = useState(false);

    const handleEditProfile = (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target);
        UserApi.editProfile(formData).then(({data}) => {
            store.dispatch({type: 'UPDATE', payload: data.success});
            setLoading(false);
        });
    }

    return (
        <Row className={"justify-content-center"}  style={{margin: "100px 0"}}>
            <div className={"row justify-content-around col-8 bg-white shadow rounded-3 p-5"}>
                <LoadingScreen loading={loading}/>
                <div className={"d-flex align-items-center justify-content-center"}>
                    <ImageInput itemImage={user?.image?.path}/>
                </div>

                <div className={"d-flex align-items-center flex-column"}>
                    <strong className={"text-center"}>{user?.name}</strong>
                    <span className={"mx-2 fs-7"}>{user?.email}</span>
                </div>
                <form onSubmit={handleEditProfile} className={"d-flex flex-column"} encType={"multipart/form-data"}>
                    <div className={"form-group mb-4"}>
                        <label htmlFor="name" className="form-label">الاسم</label>
                        <input type="text" name={"name"} className="form-control" id="name"/>
                    </div>
                    <div className={"form-group mb-4"}>
                        <label htmlFor="email" className="form-label">البريد الالكتروني</label>
                        <input type="email" name={"email"} className="form-control" id="email"/>
                    </div>
                    <div className={"form-group mb-4"}>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                      placeholder="نبذة عنك"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary align-self-end">حفظ</button>
                </form>
            </div>
        </Row>
    );
}

export default ProfilePage;
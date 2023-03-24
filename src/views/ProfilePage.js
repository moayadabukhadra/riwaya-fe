import store from "../store";
import ImageInput from "../components/ImageInput";
import React, {useEffect, useState} from "react";
import UserApi from "../api/User";
import LoadingScreen from "../components/LoadingScreen";

const ProfilePage = () => {
    const user = store.getState().user;
    const [favoriteBooks, setFavoriteBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [tap, setTap] = useState('favoriteBooks');
    useEffect(() => {
        if (tap === 'favoriteBooks') {
            UserApi.getFavoriteBooks().then(({data}) => {
                setFavoriteBooks(data.success);
                setLoading(false);
            });
        }
    });

    return (
        <div className={"row justify-content-around py-5 min-vh-100"} style={{margin: "0 auto"}}>
            <LoadingScreen loading={loading}/>
            <div
                className={"col-3 d-flex align-items-center flex-column  shadow-lg rounded-1"}>
                <img
                    src={user?.image ? "http://localhost:8000/storage/images/" + user?.image.path : "/images/placeholders/user-placeholder.png"}
                    alt={user?.name}
                    className={"rounded-circle"}
                    width={"150"}

                />
                <h3 className={"fw-bold"}>{user?.name}</h3>
                <span className={"fw-bold text-muted"}>{user?.email}</span>
                <ul className={"d-flex flex-column list-unstyled align-items-start mt-4 p-0"}>
                    <li className="btn btn-primary">
                        <a className={"nav-link " + (tap === 'favoriteBooks' ? 'active' : '')}
                           onClick={() => setTap('favoriteBooks')}>المفضلة</a>
                    </li>
                    <li className="nav-item">
                        <a className={"nav-link " + (tap === 'orders' ? 'active' : '')}
                           onClick={() => setTap('orders')}>الطلبات</a>
                    </li>
                    <li className="nav-item">
                        <a className={"nav-link " + (tap === 'edit-profile' ? 'active' : '')}
                           onClick={() => setTap('edit-profile')}>تعديل الملف الشخصي</a>
                    </li>
                </ul>

            </div>
            <div className={"shadow col-8"}>
                <div
                    className={"row justify-content-between "} {...(tap === 'favoriteBooks' ? {} : {style: {display: 'none'}})}>
                    {favoriteBooks && favoriteBooks.map((book) => {
                        return (
                            <div className={"col-12 col-md-6 row  rounded-2  m-0 p-0 border border-light"}>
                                <img
                                    src={book.image ? "http://localhost:8000/storage/images/" + book.image.path : "/images/placeholders/placeholder.jpg"}
                                    alt={book.title}
                                    className={"col-3"}
                                />
                                <div className={"d-flex align-items-center justify-content-between gap-2 col-9  p-1"}>
                                    <div className={"d-flex flex-column"}>
                                        <span className={"fw-bold fs-5"}>{book.title}</span>
                                        <span className={"fw-bold fs-6 text-secondary"}>{book.author.name}</span>
                                    </div>
                                    <div className={"d-flex flex-column gap-1"}>
                                        <button
                                            className={"btn btn-sm btn-outline-primary d-flex align-items-center justify-content-center gap-1"}>
                                            <i className={"fa fa-book-reader"}></i>
                                            <span className={"ms-2"}>قراءة</span>
                                        </button>
                                        <a href={"http://localhost:8000/storage/books/" + book.file}
                                           className={"btn btn-sm btn-outline-success d-flex align-items-center justify-content-center gap-1"}>
                                            <i className={"fa fa-file-pdf"}></i>
                                            <span className={"ms-2"}>تحميل</span>
                                        </a>
                                        <button
                                            className={"btn btn-sm btn-outline-danger d-flex align-items-center justify-content-center gap-1"}>
                                            <i className={"fa fa-trash"}></i>
                                            <span className={"ms-2"}>حذف</span>
                                        </button>
                                    </div>

                                </div>
                            </div>
                        );
                    })
                    }
                </div>
                <div
                    className={"row "} {...(tap === 'edit-profile' ? {} : {style: {display: 'none'}})}>
                    <form className={"col-8 row"} encType={"multipart/form-data"}>
                        <ImageInput itemImage={user?.image}/>
                        <div>
                            <label htmlFor="name" className="form-label">الاسم</label>
                            <input type="text" className="form-control" id="name" placeholder="الاسم"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="form-label">البريد الالكتروني</label>
                            <input type="email" className="form-control" id="email" placeholder="البريد الالكتروني"/>
                        </div>

                    </form>


                </div>

            </div>
        </div>
    );
}

export default ProfilePage;
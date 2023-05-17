import store from "../store";
import ImageInput from "../components/ImageInput";
import React, {useEffect, useState} from "react";
import UserApi from "../api/User";
import LoadingScreen from "../components/LoadingScreen";
import {Pagination, PaginationItem, PaginationLink} from "reactstrap";
import BookmarksButtons from "../components/BookmarksButtons";
import BookmarkApi from "../api/Bookmark";

const ProfilePage = () => {
    const user = store.getState().user;
    const [favoriteBooks, setFavoriteBooks] = useState([]);
    const [toReadLaterBooks, setToReadLaterBooks] = useState([]);
    const [doneReadingBooks, setDoneReadingBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [tap, setTap] = useState('favoriteBooks');
    const [pages, setPages] = useState();

    const handleEditProfile = (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target);
        UserApi.editProfile(formData).then(({data}) => {
            store.dispatch({type: 'UPDATE', payload: data.success});
            setLoading(false);
        });
    }
    useEffect(() => {
        BookmarkApi.getUserBookmarks().then(({data}) => {
            setFavoriteBooks(data.success['المفضلة'])
            console.log(data)
            setToReadLaterBooks(data.success['القرائة لاحقا'])
            setDoneReadingBooks(data.success['تمت قراءته'])
            setLoading(false);
        })
    }, []);

    return (
        <div className={"row justify-content-around"} style={{margin: "100px 0"}}>
            <LoadingScreen loading={loading}/>
            <div
                className={"col-12 col-md-3  d-flex align-items-center flex-column  shadow-lg rounded-1"}>
                <img
                    src={user?.image ? "https://riwaya.rf.gd/riwaya/storage/app/public/images/" + user?.image.path : "/images/placeholders/user-placeholder.png"}
                    alt={user?.name}
                    className={"rounded-circle mt-1"}
                    width={"125"}
                    height={"125"}

                />
                <h3 className={"fw-bold"}>{user?.name}</h3>
                <span className={"fw-bold text-muted"}>{user?.email}</span>
                <ul className={"d-flex flex-column align-self-stretch list-unstyled  mt-4 p-0"}>
                    <li className="nav-item">
                        <a className={"p-2 rounded-1  nav-link " + (tap === 'favoriteBooks' ? 'active-pill' : '')}
                           onClick={() => setTap('favoriteBooks')}>
                            الكتب المفضلة
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className={"p-2 rounded-1  nav-link " + (tap === 'favoriteAuthors' ? 'active-pill' : '')}
                           onClick={() => setTap('favoriteAuthors')}>
                            المؤلفين المفضلين
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className={"p-2 rounded-1  nav-link " + (tap === 'orders' ? 'active-pill' : '')}
                           onClick={() => setTap('orders')}>الطلبات</a>
                    </li>
                    <li className="nav-item">
                        <a className={"p-2 rounded-1  nav-link " + (tap === 'edit-profile' ? 'active-pill' : '')}
                           onClick={() => setTap('edit-profile')}>تعديل الملف الشخصي</a>
                    </li>
                </ul>

            </div>
            <div className={"shadow col-12 col-md-8"}>
                <div
                    className={"row justify-content-between  p-4"} {...(tap === 'favoriteBooks' ? {} : {style: {display: 'none'}})}>
                    {favoriteBooks && favoriteBooks.map((book) => {
                        return (
                            <div className={"col-12  row  rounded-2  m-0 p-0 border border-light"}>
                                <img
                                    src={book.image ? "https://riwaya.rf.gd/riwaya/storage/app/public/images/" + book.image.path : "/images/placeholders/placeholder.jpg"}
                                    alt={book.title}
                                    className={"col-2"}
                                />
                                <div className={"d-flex align-items-center justify-content-between gap-2 col-9  p-1"}>
                                    <div className={"d-flex flex-column"}>
                                        <span className={"fw-bold fs-5"}>{book.title}</span>
                                        <span className={"fw-bold fs-6 text-secondary"}>{book.author.name}</span>
                                    </div>
                                    <BookmarksButtons bookId={book.id}/>
                                </div>
                                <div className={"mt-2 row align-items-center justify-content-center justify-content-lg-start gap-1"}>
                                    <a download={book.file} href={"https://riwaya.rf.gd/api/book/download/" + book.id}
                                       className={"btn btn-primary d-flex align-items-center justify-content-center gap-1 text-white col-5 col-lg-3 mb-3"}>
                                        <i className="fas fa-file-pdf"/>
                                        تحميل الكتاب
                                    </a>
                                    <a href={"https://riwaya.rf.gd/riwaya/storage/app/public/books/" + book.file}
                                       className={"btn btn-info  d-flex align-items-center justify-content-center gap-1 text-white col-5 col-lg-3 mb-3"}>
                                        <i className="fas fa-book-open"/>
                                        قراءة
                                    </a>
                                </div>
                            </div>
                        );
                    })
                    }
                    <nav className={"col-12 overflow-hidden"} aria-label="...">
                        <Pagination
                            className="pagination justify-content-center my-2"
                            listClassName="justify-content-end gap-1 ">
                            {pages && pages.map((page) => (
                                <PaginationItem
                                    className={((!page.url) ? "disabled" : '') + (page.active ? "active" : '')}
                                    key={page.label}>
                                    <PaginationLink className={"rounded-2"}
                                                    onClick={() => {
                                                        if (page.url) {
                                                            UserApi.getFavoriteBooks({page: page.url.split('=')[1]}).then(({data}) => {
                                                                setFavoriteBooks(data.success.data);
                                                                setPages(data.success.links);
                                                                setLoading(false);
                                                            });
                                                        }
                                                    }}
                                    >
                                        {(page.label.includes('next')) ?
                                            <i className="fa fa-angle-left"/> : (page.label.includes('prev')) ?
                                                <i className="fa fa-angle-right"/> : page.label ?? page.label}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}

                        </Pagination>
                    </nav>
                </div>
                <div
                    className={"row p-4"} {...(tap === 'edit-profile' ? {} : {style: {display: 'none'}})}>
                    <form onSubmit={handleEditProfile} className={"d-flex flex-column"} encType={"multipart/form-data"}>
                        <div className={"align-self-center"}>
                            <ImageInput itemImage={user?.image?.path}/>
                        </div>
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
            </div>
        </div>
    );
}

export default ProfilePage;
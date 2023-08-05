import parse from "html-react-parser";
import Swal from "sweetalert2";
import commentApi from "../../pages/api/Comment";
import { useEffect, useState } from "react";
import store from "/src/store";
import $ from "jquery";
import UserApi from "../../pages/api/User";
import { FacebookShareButton, FacebookIcon } from 'react-share';
import { TwitterShareButton, TwitterIcon } from 'react-share';

const BookDetails = ({ book }) => {
    const [comments, setComments] = useState([]);
    const [bookInLibrary, setBookInLibrary] = useState(false);

    useEffect(() => {
        UserApi.checkLibraryForBook(book.id).then(({ data }) => {
            setBookInLibrary(data.success);
        });
        setComments(book.comments ?? []);
    }, []);
    const handleAddComment = (e) => {
        e.preventDefault();
        const comment = {
            body: e.target.comment.value,
            parent_id: e.target.parent_id?.value ?? null,
        }
        commentApi.addComment(book.id, comment).then(({ data }) => {
            comment.user = store.getState().user;
            setComments([...comments, comment]);
            Swal.fire({
                icon: 'success',
                title: 'تمت الاضافة',
                showConfirmButton: false,
                timer: 1500
            })
        }).catch((error) => {
            if (error.response.status === 401) {
                Swal.fire({
                    icon: 'error',
                    title: error.response.data.message,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        });
    }

    const updateBookInLibrary = () => {
        UserApi.updateLibrary(book.id).then(({ data }) => {
            setBookInLibrary(data.in_library);
            Swal.fire({
                icon: 'success',
                title: data.message,
                showConfirmButton: false,
                timer: 1500
            })
        }).catch((error) => {
            if (error.response.status === 401) {
                Swal.fire({
                    icon: 'error',
                    title: 'يجب تسجيل الدخول اولا',
                    showConfirmButton: false,
                    footer: '<a href="/auth/login">تسجيل الدخول</a>',
                    showCancelButton: true,
                    cancelButtonText: 'الغاء',
                })
            }
        });
    }
    return (
        <div className={"row align-items-start"}>
            <img className={"col-md-4 mb-3"}
                src={book?.image ? "https://riwaya.rf.gd/riwaya/storage/app/public/images/" + book?.image?.path : "/images/placeholders/placeholder.jpg"}
                alt={book.title} />
            <div className={"d-flex flex-column gap-2 ms-3 col-12 col-md-7"}>
                <div className={"d-flex align-items-center justify-content-between"}>
                    <div className={"d-flex flex-column"}>
                        <span className="fw-bold text-dark text-decoration-none m-0 fs-3">{book?.title}</span>

                        <span className="fw-bold fs-6 text-muted text-decoration-none m-0">
                            المؤلف: {book?.author?.name}
                        </span>
                        <span className="fw-bold fs-6 text-muted text-decoration-none m-0">
                            التصنيف: {book?.category?.name}
                        </span>
                        <span className="fw-bold fs-6 text-muted text-decoration-none m-0">
                            عدد الصفحات: {book?.page_count}
                        </span>
                    </div>
                    <div class="d-flex flex-column">

                        <button onClick={updateBookInLibrary}
                            className={`btn ${bookInLibrary ? 'btn-secondary' : 'btn-outline-secondary'}
                         d-flex align-items-center justify-content-center gap-1 mb-3`}>
                            <i className="fas fa-plus" />
                            {bookInLibrary ? 'حذف من مكتبتي' : 'إضافة الى مكتبتي'}
                        </button>
                        <div class="d-flex align-items-center justify-content-center gap-1">
                            <FacebookShareButton
                                url={'https://riwaya-jo.site/books?book=' + book.id}
                                quote={book.author}
                                hashtag={"#" + book.title}
                            >
                                <FacebookIcon size={32} round />
                            </FacebookShareButton>
                            <TwitterShareButton
                                url={'https://riwaya-jo.site/books?book=' + book.id}
                                quote={book.author}
                                hashtag={"#" + book.title}
                            >
                                <TwitterIcon size={32} round />
                            </TwitterShareButton>
                        </div>
                    </div>
                </div>
                {parse(book?.description)}
                <div className={"mt-2 row align-items-center justify-content-center justify-content-lg-start gap-1"}>
                    <a download={book.file} href={"https://riwaya.rf.gd/api/book/download/" + book.id}
                        className={"btn btn-primary d-flex align-items-center justify-content-center gap-1 text-white col-5 col-lg-3 mb-3"}>
                        <i className="fas fa-file-pdf" />
                        تحميل الكتاب
                    </a>
                    <a href={"https://riwaya.rf.gd/riwaya/storage/app/public/books/" + book.file}
                        className={"btn btn-info  d-flex align-items-center justify-content-center gap-1 text-white col-5 col-lg-3 mb-3"}>
                        <i className="fas fa-book-open" />
                        قراءة
                    </a>
                </div>
            </div>
            <div className={"comment-section col-12"}>
                <div>
                    <div className={"d-flex align-items-center justify-content-between mb-3"}>
                        <span className="fw-bold text-dark text-decoration-none m-0 fs-3">التعليقات</span>
                        <button
                            className={"btn btn-outline-dark d-flex align-items-center justify-content-center gap-1"}>
                            <i className={"fa fa-comment"}></i>
                            {book.comments.length}<span className={"ms-2 d-none d-md-block"}> تعليق</span>
                        </button>
                    </div>

                    <div className={"d-flex flex-column border-bottom border-light pb-2 gap-1"}>
                        {
                            comments && comments.map((comment) => {
                                if (!comment.parent_id) {
                                    return (
                                        <div className={"d-flex flex-column border rounded-2  p-2"}>
                                            <div className={"d-flex align-items-center justify-content-between"}>
                                                <div className={"d-flex align-items-start"}>
                                                    <img
                                                        src={comment.user?.image ? "https://riwaya.rf.gd/riwaya/storage/app/public/images/" + comment.user?.image.path : "/images/placeholders/user-placeholder.png"}
                                                        alt={comment.user?.name} className={"rounded-circle"} width={50}
                                                        height={50} />
                                                    <div>
                                                        <span
                                                            className="fw-bold text-dark text-decoration-none m-0 fs-5">{comment.user?.name}</span>
                                                        <p className={"text-muted"}>{comment.body}</p>

                                                    </div>
                                                </div>

                                                <span
                                                    className="text-muted text-decoration-none m-0 flex-shrink-0">{comment.created_at}</span>

                                            </div>
                                            <div>
                                                <div className={"d-flex align-items-center gap-3 me-3"}>

                                                    <a className={"cursor-pointer text-decoration-none text-primary fs-7 fw-bold"}
                                                        onClick={(e) => {
                                                            let form = $(e.target).parent().parent().find("form");
                                                            form.toggleClass("d-none");
                                                            form.find("textarea").focus();
                                                        }}
                                                    >الرد على التعليق </a>

                                                    {comment.replies && comment.replies.length > 0 &&
                                                        <a
                                                            onClick={(e) => {
                                                                $(e.target).parent().parent().find(".replies").toggleClass("d-none");
                                                            }}
                                                            className={"cursor-pointer text-decoration-none text-primary fs-7 fw-bold"}>
                                                            الردود
                                                        </a>
                                                    }
                                                </div>
                                                <div className={"replies m-3 d-none"}>
                                                    {
                                                        comment.replies && comment.replies.map((reply) => {
                                                            return (
                                                                <div
                                                                    className={"d-flex flex-column border-bottom border-light"}>
                                                                    <div
                                                                        className={"d-flex align-items-center justify-content-between"}>
                                                                        <div className={"d-flex align-items-start"}>
                                                                            <img
                                                                                src={reply.user?.image ? "https://riwaya.rf.gd/riwaya/storage/app/public/images/" + reply.user?.image.path : "/images/placeholders/user-placeholder.png"}
                                                                                alt={reply.user?.name}
                                                                                className={"rounded-circle"}
                                                                                width={50}
                                                                                height={50} />
                                                                            <div>
                                                                                <span
                                                                                    className="fw-bold text-dark text-decoration-none p-0 fs-5">{reply.user?.name}</span>
                                                                                <p className={"text-muted"}>{reply.body}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <form onSubmit={handleAddComment}
                                                    className={"comment-form w-100 my-2 d-none"}>
                                                    <input type={"hidden"} name={"parent_id"} value={comment.id} />
                                                    <textarea rows={1} name={"comment"} className={"form-control"}
                                                        placeholder={"اكتب تعليقك هنا"}></textarea>
                                                    <button type={"submit"} data-auth={"true"}
                                                        className={"btn btn-light mt-2 float-start text-dark d-flex align-items-center gap-1"}>
                                                        <i className={"fa fa-paper-plane"}></i>
                                                    </button>
                                                </form>

                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                    <form onSubmit={handleAddComment} data-auth={"true"} className={"comment-form col-12 my-2"}>
                        <textarea name={"comment"} className={"form-control"}
                            placeholder={"اكتب تعليقك هنا"}></textarea>
                        <button type={"submit"}
                            className={"btn btn-primary my-2 float-start text-white d-flex align-items-center gap-1"}>
                            <i className={"fa fa-paper-plane"}></i>
                            إرسال
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default BookDetails;

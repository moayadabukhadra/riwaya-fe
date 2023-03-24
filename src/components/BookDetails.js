import parse from "html-react-parser";
import UserApi from "../api/User";
import Swal from "sweetalert2";
import commentApi from "../api/Comment";

const BookDetails = ({book}) => {
    const handleAddToFavorite = () => {
        UserApi.addFavoriteBook(book.id).then(({data}) => {
            Swal.fire({
                icon: 'success',
                title: 'تمت الاضافة الى المفضلة',
                showConfirmButton: false,
                timer: 1500
            })
        }).catch((error) => {
            if (error.response.status === 401) {
                Swal.fire({
                    icon: 'error',
                    title: 'يجب تسجيل الدخول اولا',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        });
    }

    const handleAddComment = (e) => {
        e.preventDefault();
        const comment = {
            body: e.target.comment.value,
        }
        commentApi.addComment(book.id,comment).then(({data}) => {

            Swal.fire({
                icon: 'success',
                title: 'تمت الاضافة',
                showConfirmButton: false,
                timer: 1500
            })
        }).catch((error) => {
            console.log(error)
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
    return (
        <div className={"row align-items-start"}>
            <img className={"col-md-4 mb-3"}
                 src={book.image ? "http://localhost:8000/storage/images/" + book.image.path : "/images/placeholders/placeholder.jpg"}
                 alt={book.title}/>
            <div className={"d-flex flex-column gap-2 ms-3 col-12 col-md-7"}>
                <div className={"d-flex align-items-center justify-content-between"}>
                    <span className="fw-bold text-dark text-decoration-none m-0 fs-3">{book?.title}</span>
                    <button onClick={handleAddToFavorite}
                            className={"btn btn-outline-danger d-flex align-items-center justify-content-center gap-1"}>
                        <i className={"fa fa-heart"}></i>
                        <span className={"ms-2 d-none d-md-block"}>إضافة الى المفضلة</span>
                    </button>
                </div>
                <a className="fw-bold fs-6 text-muted text-decoration-none m-0">
                    المؤلف: {book.author?.name}
                </a>
                <a className="fw-bold fs-6 text-muted text-decoration-none m-0">
                    التصنيف: {book?.category?.name}
                </a>
                <a className="fw-bold fs-6 text-muted text-decoration-none m-0">
                    عدد الصفحات: {book?.page_count}
                </a>
                {parse(book?.description)}
                <div className={"mt-2 row align-items-center justify-content-center justify-content-lg-start gap-1"}>
                    <a href={"http://localhost:8000/storage/books/" + book.file}
                       className={"btn btn-primary d-flex align-items-center justify-content-center gap-1 text-white col-5 col-lg-3 mb-3"}>
                        <i className="fas fa-file-pdf"/>
                        تحميل الكتاب
                    </a>
                    <button
                        className={"btn btn-info  d-flex align-items-center justify-content-center gap-1 text-white col-5 col-lg-3 mb-3"}>
                        <i className="fas fa-book-open"/>
                        قراءة
                    </button>
                </div>
            </div>
            <div className={"comment-section col-12"}>
                <div>
                    <div className={"d-flex align-items-center justify-content-between mb-3"}>
                        <span className="fw-bold text-dark text-decoration-none m-0 fs-3">التعليقات</span>
                        <button
                            className={"btn btn-outline-dark d-flex align-items-center justify-content-center gap-1"}>
                            <i className={"fa fa-comment"}></i>
                            <span className={"ms-2 d-none d-md-block"}>{book.comments.length} تعليق</span>
                        </button>
                    </div>

                    <div className={"d-flex flex-column border-bottom border-light pb-2 gap-1"}>
                        {
                            book.comments && book.comments.map((comment) => {
                                return (
                                    <div className={"d-flex flex-column border rounded-2  p-2"}>
                                        <div className={"d-flex align-items-center justify-content-between"}>
                                           <div className={"d-flex align-items-start"}>
                                               <img src={comment.user.image ? "http://localhost:8000/storage/images/" + comment.user.image.path : "/images/placeholders/user-placeholder.png"}
                                                    alt={comment.user.name} className={"rounded-circle"} width={50} height={50}/>
                                               <div>
                                                   <span
                                                       className="fw-bold text-dark text-decoration-none m-0 fs-5">{comment.user.name}</span>
                                                   <p className={"text-muted"}>{comment.body}</p>
                                               </div>
                                           </div>
                                            <span
                                                className="text-muted text-decoration-none m-0 flex-shrink-0">{comment.created_at}</span>
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>
                    <form onSubmit={handleAddComment} className={"comment-form col-12 my-2"}>
                        <textarea name={"comment"} className={"form-control"} placeholder={"اكتب تعليقك هنا"}></textarea>
                        <button type={"submit"} className={"btn btn-primary mt-2 float-start text-white d-flex align-items-center gap-1"}>
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
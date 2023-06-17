import {Pagination, PaginationItem, PaginationLink, Row} from "reactstrap";
import React, {useEffect, useState} from "react";
import UserApi from "./api/User";
import Swal from "sweetalert2";
import LoadingScreen from "./components/LoadingScreen";

const MyLibrary = () => {
    const [books, setBooks] = useState();
    const [pages, setPages] = useState();
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        UserApi.getUserBooks(page).then(({data}) => {
            console.log(data);
            setBooks(data.success.data);
            setPages(data.success.links);
            setLoading(false);
        });
    }, [page]);

    const handleDeleteFromLibrary = (bookId) => {
        Swal.fire({
            title: 'هل أنت متأكد؟',
            text: "سيتم حذف الكتاب من مكتبتك الخاصة",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'حذف',
            cancelButtonText: 'إلغاء'
        }).then((result) => {
            if (result.isConfirmed) {
                UserApi.updateLibrary(bookId).then(({data}) => {
                    Swal.fire(
                        'تم الحذف!',
                        'تم حذف الكتاب من مكتبتك الخاصة',
                        'success'
                    )
                    setPage(1)
                });
            }
        })
    }


    return (
       <>
           <LoadingScreen loading={loading}/>
           <Row className={"content container-lg align-items-start justify-content-center"}>
               <img className={"col-md-5 d-none d-md-block"} src="/images/my-library.png" alt=""/>
               <div className={"col-12 col-md-6"}>
                   <h1 className={"text-gulzar"}>مكتبتي</h1>
                   <p className={"text-secondary"}>
                       هنا يمكنك الاطلاع على الكتب التي قمت بإضافتها إلى مكتبتك الخاصة
                   </p>

                   <div className={"d-flex flex-column gap-1 bg-white shadow rounded-3 p-4"}>
                       {books && books.map((book) => {
                           return (<>
                                   <div className={"d-flex justify-content-between"}>
                                       <div className={"d-flex"}>
                                           <img className={"rounded-2"}
                                                width={100}
                                                src={book.image ? "https://riwaya.rf.gd/riwaya/storage/app/public/images/" + book.image.path : "/images/placeholders/placeholder.jpg"}
                                                alt=""/>
                                           <div className={"d-flex flex-column gap-1 p-3"}>
                                               <strong className={"fs-4"}>{book.title}</strong>
                                               <span className={"text-muted"}>{book.author.name}</span>
                                           </div>
                                       </div>
                                       <div className={"d-flex flex-column gap-1 justify-content-center ms-3"}>
                                           <a href={"https://riwaya.rf.gd/riwaya/storage/app/public/books/" + book.file}
                                              className={"btn btn-outline-info  d-flex align-items-center justify-content-center gap-1"}>
                                               <i className="fas fa-book-open"/>
                                               قراءة
                                           </a>
                                           <a download={book.file}
                                              href={"https://riwaya.rf.gd/api/book/download/" + book.id}
                                              className={"btn btn-outline-success d-flex align-items-center justify-content-center gap-1"}>
                                               <i className="fas fa-file-pdf"/>
                                               تحميل
                                           </a>
                                           <button onClick={() => handleDeleteFromLibrary(book.id)}
                                                   className={"btn btn-outline-danger d-flex align-items-center justify-content-center gap-1"}>
                                               <i className="fas fa-trash"></i>
                                               حذف
                                           </button>
                                       </div>
                                   </div>
                                   <hr/>
                               </>
                           )
                       })}
                       <nav className={""} aria-label="...">
                           <Pagination
                               className="pagination justify-content-center my-2"
                               listClassName="justify-content-center gap-1  flex-wrap">
                               {pages && pages.map((page) => (
                                   <PaginationItem
                                       className={((!page.url) ? "disabled" : '') + (page.active ? "active" : '')}
                                       key={page.label}>
                                       <PaginationLink
                                           className={"rounded-2 d-flex align-items-center justify-content-center gap-1 flex-grow-1"}
                                           onClick={() => {
                                               if (page.url) {
                                                   if (page.url) {
                                                       setPage(page.label);
                                                   }
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
               </div>

           </Row>
       </>
        );

}

export default MyLibrary;
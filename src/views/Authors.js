import AuthorApi from "../api/Author";
import React, {useEffect, useState} from "react";
import {
    Button,
    Container,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Pagination,
    PaginationItem,
    PaginationLink
} from "reactstrap";
import 'swiper/css';
import AuthorCard from "../components/AuthorCard";
import LoadingScreen from "../components/LoadingScreen";
import parse from "html-react-parser";
import BookCard from "../components/BookCard";
const Authors = () => {
    const [authors, setAuthors] = useState();
    const [loading, setLoading] = useState(true);
    const [pages, setPages] = useState();
    const [selectedAuthor, setSelectedAuthor] = useState();
    const [modal, setModal] = useState(false);
    const [selectedAuthorBooks, setSelectedAuthorBooks] = useState([]);
    const toggle = () => setModal(!modal);

    const [params, setParams] = useState({
        'with': 'image',
        'paginate': '6',
    });
    useEffect(() => {
        AuthorApi.getAllAuthors(params).then(({data}) => {
            setLoading(false);
            setAuthors(data.data);
            setPages(data.links);
            setLoading(false);
        });

        if (selectedAuthor) {
            AuthorApi.getAuthorBooks(selectedAuthor.id).then(({data}) => {
                setSelectedAuthorBooks(data);
                setModal(true);
            });
        }

    }, [selectedAuthor]);
    return (
        <>
            <LoadingScreen loading={loading}/>
            <Container  className={"row"}>
                {authors && authors.map((author) => {
                    return <AuthorCard setSelectedAuthor={setSelectedAuthor} author={author}/>
                })}
                <nav aria-label="...">
                    <Pagination
                        className="pagination justify-content-center my-2"
                        listClassName="justify-content-end gap-1 ">
                        {pages && pages.map((page) => (
                            <PaginationItem
                                className={((!page.url) ? "disabled" : '') + (page.active ? "active" : '')}
                                key={page.label}>
                                <PaginationLink className={"rounded-circle"}
                                                onClick={() => {
                                                    if (page.url) {
                                                        params.page = page.url.substring(page.url.lastIndexOf('=') + 1);

                                                        AuthorApi.getAllAuthors(params).then(({data}) => {
                                                            setAuthors(data.data);
                                                            setPages(data.links);
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

            </Container>
            <Modal className={"modal-dialog-scrollable"} isOpen={modal} toggle={toggle}>
                <ModalHeader className={"d-flex align-items-center justify-content-between w-100"}
                             toggle={toggle}>{selectedAuthor?.name}</ModalHeader>
                <ModalBody className={"custom-scroll"}>
                    <div>
                        <img className={"rounded-circle align-self-center"}
                             width={"100"}
                             height={"100"}
                             src={selectedAuthor?.image ? "http://localhost:8000/storage/images/" + selectedAuthor.image.path : "/images/placeholders/placeholder.jpg"}
                             alt={selectedAuthor?.name}
                        />
                    </div>
                    {selectedAuthor && parse(selectedAuthor?.bio)}

                    <div className={"row justify-content-center"}>
                        <div className={"col-12"}>
                            <div className={"book-section-title mb-4"}>
                                الكتب
                            </div>
                        </div>
                        {selectedAuthorBooks && selectedAuthorBooks.map((book) => {
                            return (
                                <div className={"col-12 col-md-6 mb-3"}>
                                    <BookCard book={book}/>
                                </div>
                            )
                        })
                        }
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>
                        الغاء
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default Authors;
import BookApi from '../api/Book';
import React, {useEffect, useState} from "react";
import {Container, Pagination, PaginationItem, PaginationLink, Row} from "reactstrap";
import CategoryApi from "../api/Category";
import 'swiper/css';
import BookSwiper from "../components/BookSwiper";
import BookDetails from "../components/BookDetails";
import LoadingScreen from "../components/LoadingScreen";
import BookCard from "../components/BookCard";

const Books = () => {
    const [books, setBooks] = useState();
    const [loading, setLoading] = useState(true);
    const [pages, setPages] = useState();
    const [categories, setCategories] = useState();
    const [selectedBook, setSelectedBook] = useState();
    const [relatedBooks, setRelatedBooks] = useState();

    const [params, setParams] = useState({
        'with': 'author,category,image',
        'paginate': '12',
    });


    useEffect(() => {
        setLoading(true);
        if (window.location.pathname.includes('book')) {
            const id = window.location.search.split('=')[1];
            params.selected_book = id;
            BookApi.getBook(id).then(({data}) => {
                setSelectedBook(data);
            });
        }
        CategoryApi.getAllCategories().then(({data}) => {
            setCategories(data.map((category) => {
                return {
                    value: category.id,
                    label: category.name,
                }
            }));
        });
        BookApi.getAllBooks(params).then(({data}) => {
            console.log(data)
            setBooks(data.books);
            setRelatedBooks(data.related_books)
            setPages(data.books.links);
            setLoading(false);
        });


    }, [params]);
    return (
        <>
            <LoadingScreen loading={loading}/>
            <Container fluid className={"row justify-content-around"} style={{
                marginTop: '100px',
            }}>

                <div className={"col-md-3 row border-start"}>
                    <div className={"bg-white rounded-2 p-3"}>
                        <div className={"d-flex flex-column gap-3"}>
                            <label className={"position-relative d-flex align-items-center position-relative"}>
                                <input type="text" className={"main-search-input"}
                                       placeholder={"ابحث عن كتاب ,مؤلف , تصنيف..."}/>
                            </label>
                            <button onClick={
                                () => {
                                    setParams({
                                        ...params,
                                        query: document.querySelector('.main-search-input').value,
                                    });
                                }
                            }
                                    className={"btn btn-primary w-100 mt-3 my-3 text-white d-flex align-items-center justify-content-center gap-2 mt-auto"}>
                                <i className="fa fa-search"/>
                                بحث
                            </button>
                        </div>

                        <div className={"book-section-title mb-4 "}>
                            التصنيفات
                        </div>
                        <ul className={"list-unstyled categories-list"}>
                            {
                                categories && categories.map((category) => {
                                        return (<li key={category.value} onClick={() => {
                                            setParams({
                                                ...params,
                                                category: category.value,
                                            })
                                        }}
                                                    className={`d-flex align-items-center gap-2 p-2 cursor-pointer  border-bottom d-flex align-items-center justify-content-between ` + {
                                                        'active': params.category === category.value
                                                    }
                                                    }>
                                                <span>
                                                    {category.label}
                                                </span>

                                        </li>)
                                    }
                                )
                            }
                        </ul>

                    </div>


                </div>
                <div className={"col-md-9"}>
                    {
                        selectedBook && <BookDetails book={selectedBook}/>
                    }

                    {
                        relatedBooks && <div className={"book-section-title mb-4"}>
                            كتب أخرى ل{selectedBook?.author.name}
                        </div>
                    }
                    {
                        relatedBooks && <Row className={"mb-5 justify-content-between"}>
                            <BookSwiper books={relatedBooks} key={'related'} swiperKey={'related'}/>
                        </Row>
                    }
                    <Row className={"mb-5 justify-content-between"}>
                        {
                            books?.data && books?.data.map((book) => {
                                return (
                                    <div className={"col-12 col-md-6 col-lg-3 mb-4"}>
                                        <BookCard book={book} key={book.id}/>
                                    </div>
                                );
                            }, [])
                        }
                    </Row>
                    <nav aria-label="...">
                        <Pagination
                            className="pagination justify-content-center my-2"
                            listClassName="justify-content-end gap-1 ">
                            {pages && pages.map((page) => (
                                <PaginationItem
                                    className={((!page.url) ? "disabled" : '') + (page.active ? "active" : '')}
                                    key={page.label}>
                                    <PaginationLink className={"rounded-2 d-flex align-items-center justify-content-center gap-1 flex-grow-1"}
                                                    onClick={() => {
                                                        if (page.url) {
                                                            params.page = page.url.substring(page.url.lastIndexOf('=') + 1);

                                                            BookApi.getAllBooks(params).then(({data}) => {
                                                                setBooks(data.books);
                                                                setRelatedBooks(data.related_books)
                                                                setPages(data.books.links);
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

            </Container>
        </>
    );
}

export default Books;
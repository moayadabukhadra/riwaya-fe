import BookApi from './api/Book';
import React, { useEffect, useState } from "react";
import { Container, Pagination, PaginationItem, PaginationLink, Row } from "reactstrap";
import CategoryApi from "./api/Category";
import 'swiper/css';
import BookSwiper from "../src/components/BookSwiper";
import BookDetails from "../src/components/BookDetails";
import LoadingScreen from "../src/components/LoadingScreen";
import BookCard from "../src/components/BookCard";
import Head from "next/head";
import Script from "next/script";


const Books = ({ selectedBook }) => {
    const [books, setBooks] = useState();
    const [loading, setLoading] = useState(true);
    const [pages, setPages] = useState();
    const [categories, setCategories] = useState();
    const [selectedCategory, setSelectedCategory] = useState();
    const [relatedBooks, setRelatedBooks] = useState();

    const [params, setParams] = useState({
        'with': 'author,category,image',
        'paginate': '18',

    });


    useEffect(() => {

        setLoading(true);
        CategoryApi.getAllCategories().then(({ data }) => {
            setCategories(data.map((category) => {
                return {
                    value: category.id,
                    label: category.name,
                }
            }));
        });
        BookApi.getAllBooks(params).then(({ data }) => {
            setBooks(data.books);
            setRelatedBooks(data.related_books)
            setPages(data.books.links);
            setLoading(false);
        });


    }, [params]);
    return (
        <>
            {selectedBook ?
                (<Head>
                    <title>
                        {selectedBook ? 'كتاب ' + selectedBook.title : (selectedCategory ? 'تحميل وقرائة كتب ' + selectedCategory : 'تصفح وحمّل مجموعة واسعة من الكتب باللغة العربية وغيرها | اعثر على قراءتك التالية')}
                    </title>
                    <meta property="og:title" content={selectedBook ? 'كتاب ' + selectedBook.title : (selectedCategory ? 'تحميل وقرائة كتب ' + selectedCategory : 'تصفح وحمّل مجموعة واسعة من الكتب باللغة العربية وغيرها | اعثر على قراءتك التالية')} />
                    <meta property="og:description" content={selectedBook ? selectedBook.description : 'تصفح وحمّل مجموعة واسعة من الكتب باللغة العربية وغيرها | اعثر على قراءتك التالية'} />
                    <meta property="og:image" content={selectedBook?.image ? 'https://riwaya.rf.gd/riwaya/storage/app/public/images/' + selectedBook?.image.path : '/images/library.jpg'} />
                    <meta property="og:url" content={`https://riwaya-jo.site/books/?book=${selectedBook?.id}`} />
                    <meta property="og:type" content="website" />
                    <meta name="description" content={selectedBook ? 'كتاب ' + selectedBook.title + ' للكاتب ' + selectedBook.author.name + ' تصنيف ' + selectedBook.category.name + ' تحميل وقرائة الكتاب pdf ' : ' المعاصرة، استكشف مجموعة واسعة من الأنواع الأدبية واعثر على قراءتك التالية المثيرة. تصفح وابحث وانغمس في العالم الأدبي الغني للكتب باللغة العربي'} />
                </Head>) : (<Head>
                    <title>
                        {selectedBook ? 'كتاب ' + selectedBook.title : (selectedCategory ? 'تحميل وقرائة كتب ' + selectedCategory : 'تصفح وحمّل مجموعة واسعة من الكتب باللغة العربية وغيرها | اعثر على قراءتك التالية')}
                    </title>
                    <meta property="og:title" content={selectedBook ? 'كتاب ' + selectedBook.title : (selectedCategory ? 'تحميل وقرائة كتب ' + selectedCategory : 'تصفح وحمّل مجموعة واسعة من الكتب باللغة العربية وغيرها | اعثر على قراءتك التالية')} />
                    <meta property="og:description" content={selectedBook ? selectedBook.description : 'تصفح وحمّل مجموعة واسعة من الكتب باللغة العربية وغيرها | اعثر على قراءتك التالية'} />
                    <meta property="og:image" content={selectedBook?.image ? 'https://riwaya.rf.gd/riwaya/storage/app/public/images/' + selectedBook?.image.path : '/images/library.jpg'} />
                    <meta property="og:url" content={`https://riwaya-jo.site/books/?book=${selectedBook?.id}`} />
                    <meta property="og:type" content="website" />
                    <meta name="description" content={selectedBook ? 'كتاب ' + selectedBook.title + ' للكاتب ' + selectedBook.author.name + ' تصنيف ' + selectedBook.category.name + ' تحميل وقرائة الكتاب pdf ' : ' المعاصرة، استكشف مجموعة واسعة من الأنواع الأدبية واعثر على قراءتك التالية المثيرة. تصفح وابحث وانغمس في العالم الأدبي الغني للكتب باللغة العربي'} />
                </Head>)}
            <LoadingScreen loading={loading} />
   
            <ins className="adsbygoogle"
                data-ad-client="ca-pub-2029155588392824"
                data-ad-slot="6204165593"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
            <Script  dangerouslySetInnerHTML={{
                _html: `(adsbygoogle = window.adsbygoogle || []).push({ });`
                }}/>
                
            <Container fluid className={"content row mx-0 justify-content-md-around justify-content-center"}>

                <div className={"col-md-3 row mb-5"}>
                    <div className={" bg-light shadow rounded-2 p-3"}>
                        <div className={"d-flex flex-column gap-3"}>
                            <label className={"position-relative d-flex align-items-center position-relative"}>
                                <input type="text" className={"main-search-input"}
                                    placeholder={"ابحث عن كتاب ,مؤلف , تصنيف..."} />
                            </label>
                            <button onClick={
                                () => {
                                    setParams({
                                        ...params,
                                        page: 1,
                                        query: document.querySelector('.main-search-input').value,
                                    });
                                }
                            }
                                className={"btn btn-primary w-100 mt-3 my-3 text-white d-flex align-items-center justify-content-center gap-2 mt-auto"}>
                                <i className="fa fa-search" />
                                بحث
                            </button>
                        </div>

                        <div className={"book-section-title mb-4 "}>
                            التصنيفات
                        </div>
                        <ul className={"list-unstyled categories-list custom-scroll"}>
                            <li className={"d-flex align-items-center gap-2 p-2 cursor-pointer  border-bottom d-flex align-items-center justify-content-between"}
                                onClick={() => {
                                    setParams({
                                        ...params,
                                        category: null,
                                    })
                                }}>
                                جميع التصنيفات
                            </li>
                            {
                                categories && categories.map((category) => {
                                    return (<li key={category.value} onClick={() => {
                                        setParams({
                                            ...params,
                                            category: category.value,
                                        })

                                        setSelectedCategory(category.label)
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
                        selectedBook && <BookDetails book={selectedBook} />
                    }

                    {
                        relatedBooks && <div className={"book-section-title mb-4"}>
                            كتب أخرى ل{selectedBook?.author.name}
                        </div>
                    }
                    {
                        relatedBooks && <Row className={"mb-5 justify-content-between"}>
                            <BookSwiper books={relatedBooks} key={'related'} swiperKey={'related'} />
                        </Row>
                    }
                    <Row className={"mb-5 justify-content-center"}>
                        {
                            books?.data && books?.data.map((book) => {
                                return (
                                    <div className={"col-6 col-md-4 col-lg-3 col-xl-2 mb-4"}>
                                        <BookCard book={book} key={book.id} />
                                    </div>
                                );
                            }, [])
                        }
                    </Row>
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
                                                params.page = page.url.substring(page.url.lastIndexOf('=') + 1);

                                                BookApi.getAllBooks(params).then(({ data }) => {
                                                    setBooks(data.books);
                                                    setRelatedBooks(data.related_books)
                                                    setPages(data.books.links);
                                                });
                                            }
                                        }}
                                    >
                                        {(page.label.includes('next')) ?
                                            <i className="fa fa-angle-left" /> : (page.label.includes('prev')) ?
                                                <i className="fa fa-angle-right" /> : page.label ?? page.label}
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

export async function getServerSideProps(context) {
    const { query } = context;
    const id = query.book;

    let selectedBook = null;
    if (id) {
        try {
            const response = await BookApi.getBook(id);
            selectedBook = response.data;
        } catch (error) {
            console.error('Error fetching book data:', error);
        }
    }

    return {
        props: {
            selectedBook,
        },
    };
}

export default Books;
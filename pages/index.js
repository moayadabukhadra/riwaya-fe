import {Container, Row} from "reactstrap";
import BookSwiper from "../src/components/BookSwiper";
import React, {useEffect, useState} from "react";
import BookApi from "./api/Book";
import LoadingScreen from "../src/components/LoadingScreen";
import $ from "jquery";
import QuoteApi from "./api/Quote";
import QuoteCard from "../src/components/QuoteCard";
import {Helmet} from "react-helmet-async";
import Head from "next/head";
import { useRouter } from 'next/router';

const Index = () => {
    const [loading, setLoading] = useState(true);
    const [mostReadBooks, setMostReadBooks] = useState();
    const [latestBooks, setLatestBooks] = useState();
    const [quote, setQuote] = useState();
    const router = useRouter();

    useEffect(() => {
        setLoading(true);
        BookApi.getMostReadBooks().then(({data}) => {
            setMostReadBooks(data);
        });

        BookApi.getLatestBooks().then(({data}) => {
            setLatestBooks(data);
            setLoading(false);
        });

        QuoteApi.getRandomQuote().then(({data}) => {
            setQuote(data);
        });


        $(document).ready(function () {

            if (window.scrollY < 10) {
                $('.riwaya-nav').removeClass('bg-white').addClass('transparent-nav');
            }
            $(window).scroll(function () {
                if ($(this).scrollTop() < 10) {
                    $('.riwaya-nav').removeClass('bg-white').addClass('transparent-nav');
                }
                if ($(this).scrollTop() > 10) {
                    $('.riwaya-nav').removeClass('transparent-nav').addClass('bg-white');
                }
            });
        });

    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        setLoading(true)
        const search = e.target.search.value;
        router.push({
            pathname:'/search-results',
            query:{
                'query':search
            }
        });

    }

    return (

        <div>
            <Head>
                <title>
                    تصفح وحمّل مجموعة واسعة من الكتب باللغة العربية وغيرها | اعثر على قراءتك التالية
                </title>
                <meta name={"description"}
                      content={" المعاصرة، استكشف مجموعة واسعة من الأنواع الأدبية واعثر على قراءتك التالية المثيرة. تصفح وابحث وانغمس في العالم الأدبي الغني للكتب باللغة العربي"}/>
            </Head>
            <LoadingScreen loading={loading}/>
            <div className={"header"} style={{
                backgroundImage: `url(/images/library.jpg)`,
                backgroundRepeat: 'repeat-x',
            }}>

                <form onSubmit={handleSearch} className={"header-content"}>
                    <div className={"search-bar d-flex flex-column"}>
                        <span className={"fs-3 mb-2 w-100 header-quote"}>أندر من الكتاب الجيد، القارئ الجيد.</span>
                        <label className={"search-bar position-relative"}>
                            <button type={"submit"}
                                    className={"btn btn-primary  d-flex align-items-center h-100 justify-content-center position-absolute top-50 start-0 translate-middle-y"}>
                                <i className={"fa fa-search text-white"}/>
                            </button>
                            <input name={"search"} type="text" className={"form-control py-2"}
                                   placeholder={"ابحث عن كتاب او مؤلف...."}/>
                        </label>
                    </div>
                </form>


            </div>

            <Container>
                <div className={"row justify-content-center bg-light rounded-1"}>
                    <a href={"/books"}
                       className={"fs-1 col-4 d-flex align-items-center justify-content-center flex-column gap-3 border-start  page-section"}>
                        <svg id={"section-icon"} xmlns="http://www.w3.org/2000/svg"
                             className="icon icon-tabler icon-tabler-book-2"
                             viewBox="0 0 24 24" stroke-width="2" stroke="#2c3e50"
                             fill="#be123c" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z"></path>
                            <path d="M19 16h-12a2 2 0 0 0 -2 2"></path>
                            <path d="M9 8h6"></path>
                        </svg>
                        <h3 className={"text-muted"}>
                            الكتب
                        </h3>
                    </a>
                    <a href={"/authors"}
                       className={"fs-1 col-4 d-flex align-items-center justify-content-center flex-column page-section"}>
                        <svg id={"section-icon"} xmlns="http://www.w3.org/2000/svg"
                             className="section-icon icon icon-tabler icon-tabler-users"
                             viewBox="0 0 24 24" stroke="#2c3e50"
                             fill="#be123c">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="9" cy="7" r="4"/>
                            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                            <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"/>
                        </svg>
                        <h3 className={"text-muted"}>
                            المؤلفين
                        </h3>
                    </a>
                    <a href={"/quotes"}
                       className={"fs-1 col-4 d-flex align-items-center justify-content-center flex-column gap-3 border-end page-section"}>
                        <svg id={"section-icon"} xmlns="http://www.w3.org/2000/svg" fill="#be123c" stroke="#2c3e50"
                             className="bi bi-quote section-icon" viewBox="0 0 14 14">
                            <path
                                d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
                        </svg>
                        <h3 className={"text-muted"}>
                            الاقتباسات
                        </h3>
                    </a>
                </div>
                <div className={"book-section-title mb-4"}>
                    احدث الكتب
                </div>
                <Row className={"mb-5 justify-content-between"}>
                    <BookSwiper books={latestBooks} key={'latest'}
                                swiperKey={'latest'}/>
                </Row>
                <QuoteCard quote={quote}/>
                <div className={"book-section-title mb-4"}>
                    الكتب الاكثر تحميلا
                </div>
                <Row className={"mb-5 justify-content-between"}>
                    <BookSwiper books={mostReadBooks} key={'most_selling'}
                                swiperKey={'most_selling'}/>
                </Row>
            </Container>
        </div>
    )
}

export default Index;
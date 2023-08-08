import { Container, Row } from "reactstrap";
import BookSwiper from "../src/components/BookSwiper";
import React, { useEffect, useState } from "react";
import BookApi from "./api/Book";
import LoadingScreen from "../src/components/LoadingScreen";
import $ from "jquery";
import QuoteApi from "./api/Quote";
import QuoteCard from "../src/components/QuoteCard";
import { Helmet } from "react-helmet-async";
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
        BookApi.getMostReadBooks().then(({ data }) => {
            setMostReadBooks(data);
        });

        BookApi.getLatestBooks().then(({ data }) => {
            setLatestBooks(data);
            setLoading(false);
        });

        QuoteApi.getRandomQuote().then(({ data }) => {
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
            pathname: '/search-results',
            query: {
                'query': search
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
                    content={" المعاصرة، استكشف مجموعة واسعة من الأنواع الأدبية واعثر على قراءتك التالية المثيرة. تصفح وابحث وانغمس في العالم الأدبي الغني للكتب باللغة العربي"} />
            </Head>
            <LoadingScreen loading={loading} />
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
                                <i className={"fa fa-search text-white"} />
                            </button>
                            <input name={"search"} type="text" className={"form-control py-2"}
                                placeholder={"ابحث عن كتاب او مؤلف...."} />
                        </label>
                    </div>
                </form>


            </div>

            <Container>
                <div className={"row justify-content-center bg-light rounded-1"}>
                    <a href={"/books"}
                        className={"fs-1 col-4 d-flex align-items-center justify-content-center flex-column gap-3 border-start  page-section"}>

                        <svg xmlns="http://www.w3.org/2000/svg" id={"section-icon"} viewBox="0 0 36 36" >
                            <path fill="#553788" d="M15 31c0 2.209-.791 4-3 4H5c-4 0-4-14 0-14h7c2.209 0 3 1.791 3 4v6z"></path>
                            <path fill="#9266CC" d="M34 33h-1V23h1a1 1 0 1 0 0-2H10c-4 0-4 14 0 14h24a1 1 0 1 0 0-2z"></path>
                            <path fill="#CCD6DD" d="M34.172 33H11c-2 0-2-10 0-10h23.172c1.104 0 1.104 10 0 10z"></path>
                            <path fill="#99AAB5" d="M11.5 25h23.35c-.135-1.175-.36-2-.678-2H11c-1.651 0-1.938 6.808-.863 9.188C9.745 29.229 10.199 25 11.5 25z"></path><path fill="#269" d="M12 8a4 4 0 0 1-4 4H4C0 12 0 1 4 1h4a4 4 0 0 1 4 4v3z"></path><path fill="#55ACEE" d="M31 10h-1V3h1a1 1 0 1 0 0-2H7C3 1 3 12 7 12h24a1 1 0 1 0 0-2z"></path><path fill="#CCD6DD" d="M31.172 10H8c-2 0-2-7 0-7h23.172c1.104 0 1.104 7 0 7z"></path><path fill="#99AAB5" d="M8 5h23.925c-.114-1.125-.364-2-.753-2H8C6.807 3 6.331 5.489 6.562 7.5C6.718 6.142 7.193 5 8 5z"></path><path fill="#F4900C" d="M20 17a4 4 0 0 1-4 4H6c-4 0-4-9 0-9h10a4 4 0 0 1 4 4v1z"></path><path fill="#FFAC33" d="M35 19h-1v-5h1a1 1 0 1 0 0-2H15c-4 0-4 9 0 9h20a1 1 0 1 0 0-2z"></path><path fill="#CCD6DD" d="M35.172 19H16c-2 0-2-5 0-5h19.172c1.104 0 1.104 5 0 5z"></path><path fill="#99AAB5" d="M16 16h19.984c-.065-1.062-.334-2-.812-2H16c-1.274 0-1.733 2.027-1.383 3.5c.198-.839.657-1.5 1.383-1.5z"></path>
                        </svg>
                        <h3 className={"text-muted"}>
                            الكتب
                        </h3>
                    </a>
                    <a href={"/authors"}
                        className={"fs-1 col-4 d-flex align-items-center justify-content-center flex-column page-section"}>
                       <svg id={"section-icon"} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
                        <path fill="#ff0000" d="M6.94 14.033a29.79 29.79 0 0 0-.606 1.782c.96-.696 2.101-1.138 3.418-1.303c2.513-.314 4.746-1.974 5.876-4.059L14.172 9l1.413-1.415l1-1.002c.43-.429.915-1.224 1.428-2.367c-5.593.867-9.018 4.291-11.074 9.818ZM17 8.997l1 1c-1 3-4 6-8 6.5c-2.669.333-4.336 2.166-5.002 5.5H3c1-6 3-20 18-20c-1 2.997-1.998 4.996-2.997 5.997L17 8.997Z"/>
                       </svg>
                        <h3 className={"text-muted"}>
                            المؤلفين
                        </h3>
                    </a>
                    <a href={"/quotes"} 
                        className={"fs-1 col-4 d-flex align-items-center justify-content-center flex-column gap-3 border-end page-section"}>
                        <svg id={"section-icon"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="#ff0000" d="M21 3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455L2 22.5V4a1 1 0 0 1 1-1h18ZM10.515 7.412C8.728 8.187 7.5 9.755 7.5 11.505c0 .995.277 1.609.792 2.155c.324.345.837.59 1.374.59a1.75 1.75 0 0 0 1.75-1.75a1.76 1.76 0 0 0-1.614-1.745a2.104 2.104 0 0 0-.479.01v-.092c.006-.44.1-1.74 1.639-2.573l-.447-.688Zm5 0c-1.787.775-3.015 2.343-3.015 4.093c0 .995.277 1.609.792 2.155c.324.345.837.59 1.374.59a1.75 1.75 0 0 0 1.75-1.75a1.76 1.76 0 0 0-1.614-1.745a2.104 2.104 0 0 0-.479.01v-.092c.006-.44.1-1.74 1.639-2.573l-.447-.688Z" />
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
                        swiperKey={'latest'} />
                </Row>
                <QuoteCard quote={quote} />
                <div className={"book-section-title mb-4"}>
                    الكتب الاكثر تحميلا
                </div>
                <Row className={"mb-5 justify-content-between"}>
                    <BookSwiper books={mostReadBooks} key={'most_selling'}
                        swiperKey={'most_selling'} />
                </Row>
            </Container>
        </div>
    )
}

export default Index;
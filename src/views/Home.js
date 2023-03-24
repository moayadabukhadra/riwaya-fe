import {Container, Row} from "reactstrap";
import BookSwiper from "../components/BookSwiper";
import React, {useEffect, useState} from "react";
import BookApi from "../api/Book";
import LoadingScreen from "../components/LoadingScreen";
import $ from "jquery";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [mostReadBooks, setMostReadBooks] = useState();
    const [latestBooks, setLatestBooks] = useState();

    useEffect(() => {
        setLoading(true);
        BookApi.getMostReadBooks().then(({data}) => {
            setMostReadBooks(data);
        });

        BookApi.getLatestBooks().then(({data}) => {
            setLatestBooks(data);
            setLoading(false);
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

    return (
        <div>
            <LoadingScreen loading={loading}/>
            <div className={"header"} style={{
                backgroundImage: `url(/images/library.jpg)`,
                backgroundRepeat: 'repeat-x',
            }}>

                <div className={"header-content"}>
                    <div className={"search-bar d-flex flex-column"}>
                        <span className={"fs-3 mb-2 w-100 header-quote"}>أندر من الكتاب الجيد، القارئ الجيد.</span>
                        <label className={"search-bar position-relative"}>
                                <span
                                    className={"btn btn-primary  d-flex align-items-center h-100 justify-content-center position-absolute top-50 start-0 translate-middle-y"}>
                              <i className={"fa fa-search text-white"}/>
                                </span>
                            <input type="text" className={"form-control py-2"}
                                   placeholder={"ابحث عن كتاب او مؤلف...."}/>
                        </label>
                    </div>
                </div>


            </div>

            <Container>

                <div className={"book-section-title mb-4"}>
                    احدث الكتب
                </div>
                <Row className={"mb-5 justify-content-between"}>
                    <BookSwiper books={latestBooks} key={'latest'}
                                swiperKey={'latest'}/>
                </Row>
                <div className={"box my-5"}>
                    <i className={"fas fa-quote-left fa2"}></i>
                    <div className={"text"}>
                        <h3>أندر من الكتاب الجيد، القارئ الجيد.</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
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

export default Home;
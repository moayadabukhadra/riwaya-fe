import {Swiper, SwiperSlide} from "swiper/react";
import breakpoints from "../assets/utils/SwiperBreakPoints";
import BookCard from "./BookCard";

const BookSwiper = (props) => {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={10}
            breakpoints={breakpoints}
        >
            {props.books && props.books.map((book, index) => {
                return (

                    <SwiperSlide key={index + props.swiperKey + book.id} className={""}>
                        <BookCard book={book} key={props.swiperKey + book.id}/>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}

export default BookSwiper;
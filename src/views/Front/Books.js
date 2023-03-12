import BookApi from '../../api/Book';
import {useEffect, useState} from "react";
import {Container, Row} from "reactstrap";
import BookCard from "../../components/front/BookCard";
import PaginationPages from "../../components/CRUD/PaginationPages";
import Select from "react-select";
import CategoryApi from "../../api/Category";

const Books = () => {
    const [books, setBooks] = useState();
    const [loading, setLoading] = useState(true);
    const [pages, setPages] = useState();
    const [categories, setCategories] = useState();
    const [latestBooks, setLatestBooks] = useState();
    const [params, setParams] = useState({
        'with': 'author,category,image',
        'paginate': 10,
    });
    useEffect(() => {
        let slider_down = false;
        BookApi.getAllBooks(params).then(({data}) => {
            setBooks(data.data);
            setPages(data.links);
            setLoading(false);
        });
        BookApi.getLatestBooks().then(({data}) => {
            setLatestBooks(data);
        });
        CategoryApi.getAllCategories().then(({data}) => {
            setCategories(data.map((category) => {
                return {
                    value: category.id,
                    label: category.name,
                }
            }));
        });

        let image_slider = document.querySelector('.image-slider');
        image_slider.addEventListener('mousedown', (e) => {
            slider_down = true;
        });
        image_slider.addEventListener('mouseup', (e) => {
            slider_down = false;
        });
        image_slider.addEventListener('mousemove', function (e){
            if (slider_down) {
                image_slider.scrollLeft += -e.movementX / 2;
            }
        });

    }, [params]);
    return (
        <>
            <div className={"image-slider  d-flex align-items-center flex-shrink-0 overflow-hidden gap-3 container my-5"}>
                {latestBooks && latestBooks.map((book, index) => {
                        return (
                            <div className={"image-slider-item"} key={index} >
                                <img width={"100"} height={"200"} draggable={"false"}
                                    src={book?.image ? "http://localhost:8000/storage/images/" + book.image?.path : "/images/placeholders/placeholder.jpg"}
                                    alt={book.title}/>
                                <div className={"image-slider-item-content"}>
                                    {book.title}
                                </div>
                            </div>
                        );
                })}
            </div>
            <Container fluid className={"row justify-content-center"}>
                <div className={"col-md-4 d-none d-md-flex align-items-start"}>
                    <Select options={categories} onChange={(e) => {
                        setParams({...params, category: e.value});
                    }}/>
                </div>
                <Row className={"col-md-8 gap-1"}>
                    {books && books.map((book, index) => {
                        return (
                            <BookCard book={book} key={index}/>
                        );
                    })}
                </Row>
                <PaginationPages pages={pages}
                                 setPages={setPages}
                                 setData={setBooks}
                                 params={params}
                                 api={BookApi.getAllBooks}/>
            </Container>
        </>
    );
}

export default Books;
import {Container, Row} from "reactstrap";
import AuthorCard from "../components/AuthorCard";
import BookCard from "../components/BookCard";
import LoadingScreen from "../components/LoadingScreen";

const SearchResults = (props) => {
    const data = props.location.state.data
    const books = data.books
    const authors = data.authors
    return (
        <>
            <div className={"header"} style={{
                backgroundImage: `url(/images/library.jpg)`,
                backgroundRepeat: 'repeat-x',
            }}>
            </div>
            <Container>
                <h3 className={"book-section-title mb-3"}>
                    الكتب
                </h3>
                <Row className={"mb-5 justify-content-center"}>
                    {
                        books && books?.map((book) => {
                            return (
                                <div className={"col-6 col-md-4 col-lg-3 col-xl-2 mb-4"}>
                                    <BookCard book={book} key={book.id}/>
                                </div>
                            );
                        }
                    )
                    }
                    {
                          books?.length === 0 && <div className={"text-center text-primary fs-2"}>
                                لا يوجد نتائج
                            </div>
                    }
                </Row>
                <h3 className={"book-section-title mb-3"}>
                    المؤلفين
                </h3>
                <Row className={"mb-5 justify-content-center gap-1"}>
                    {
                        authors && authors.map((author) => {
                                return (
                                    <AuthorCard author={author}/>
                                );
                            }
                        )
                    }
                    {
                        authors?.length === 0 && <div className={"text-center text-primary fs-2"}>
                            لا يوجد نتائج
                        </div>
                    }
                </Row>
            </Container>
        </>
    );
}

    export default SearchResults;
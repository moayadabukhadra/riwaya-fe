import {Container, Row} from "reactstrap";
import BookCard from "./components/BookCard";
import {summary} from "./Helpers";

const SearchResults = (props) => {
    const data = props.location.state.data
    const books = data.books
    const authors = data.authors
    return (
        <>

            <Container className={"content"}>
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
                                    <div className={"col-md-4 col-lg-3 p-2 d-flex flex-column bg-light border rounded-2 justify-content-between align-items-center"}>
                                        <div className={"mb-2"}>
                                            <img className={"rounded-circle"}
                                                 width={"150"}
                                                 height={"150"}
                                                 src={author.image ? "https://riwaya.rf.gd/riwaya/storage/app/public/images/" + author.image.path : "/images/placeholders/placeholder.jpg"}
                                                 alt={author.name}
                                            />
                                        </div>

                                        <span className={"fw-bold fs-5"}>{author.name}</span>
                                        { summary(author.bio,50)}
                                        <a  href={"/authors?author=" + author.id}
                                         className={"btn btn-dark d-flex align-items-center justify-content-center gap-1 mt-1"}>
                                            <i className={"fa fa-eye"}></i>
                                            عرض التفاصيل
                                        </a>
                                    </div>
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
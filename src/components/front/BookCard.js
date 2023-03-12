import {Badge, Card, CardText, CardTitle, Col} from "reactstrap";

const BookCard = ({book}) => {
    return (
        <Col md={"5"} >
            <Card className="row overflow-hidden" style={{ height:"150px"}}>
                <div className={"col-4 h-100"} style={{
                    backgroundImage: `url(${book.image ? "http://localhost:8000/storage/images/" + book.image.path : "/images/placeholders/placeholder.jpg"})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}></div>
                <div className={"col-8"}>
                    <CardTitle className="mb-2 fw-bold">{book?.title}</CardTitle>
                    <div className={"d-flex gap-1"}>
                        <img
                            src={book?.author?.image ? "http://localhost:8000/storage/images/" + book?.author.image.path : "/images/placeholders/placeholder.jpg"}
                            alt={book.author?.name} className={"rounded-circle mr-2"}
                            style={{width: "30px", height: "30px"}}/>
                        <span>{book.author?.name}</span>
                    </div>
                    <CardText className={"text-truncate fs-6"}>
                        {book?.description.replace(/(<([^>]+)>)/ig, '')}
                    </CardText>
                    <div className={"d-flex align-items-center justify-content-between"}>
                        <Badge>
                            {book.category?.name}
                        </Badge>
                        <button className={"btn btn-sm btn-primary text-white"}>
                            عرض الكتاب
                        </button>
                    </div>
                </div>
            </Card>
        </Col>
    )
        ;
}

export default BookCard;
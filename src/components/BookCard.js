import React from "react";
import {Badge} from "reactstrap";
const BookCard = (props) => {
    const book = props.book;
    return (
        <a href={'/books/?book=' + book.id}  className="mb-5">
            <div className="card text-white card-has-bg click-col"
                 style={{backgroundImage: `url(${book.image ? "https://riwaya.rf.gd/riwaya/storage/app/public/images/" + book.image.path : "/images/placeholders/placeholder.jpg"})`}}>
                <div className="card-img-overlay d-flex flex-column">
                    <div className="card-body">
                        <h4 className="card-title book-title mt-0 fs-6 text-truncate" style={{
                            whiteSpace: "nowrap",
                        }}>
                            <a className="text-white text-decoration-none " >{book.title}</a></h4>
                        <Badge color="primary fw-normal"  className="mb-3">{book.category?.name}</Badge>
                    </div>
                    <div className="card-footer p-0">
                        <a href={"/authors?author=" + book.author.id} className="d-flex gap-1 align-items-center text-decoration-none">
                            <img  className="mr-3 rounded-circle"
                                 src={book.author.image ? "https://riwaya.rf.gd/riwaya/storage/app/public/images/" + book.author.image.path : "/images/placeholders/placeholder.jpg"}
                                 alt="author-img" style={{maxWidth: "50px"}}/>
                            <div className="media-body">
                                <h6 className="my-0 text-white d-block">{book.author?.name}</h6>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </a>

    );
}

export default BookCard;
import parse from "html-react-parser";
import {useState} from "react";
import {summary} from "../Helpers";

const AuthorCard = (props) => {
const author = props.author;
    return (
        <div className={"col-12 col-md-6 col-lg-4 justify-content-between border rounded-2 author-card"}>

            <div className="py-2">
                <div className="d-flex align-items-center gap-1">
                    <img className={"rounded-circle"}
                         width={"50"}
                         height={"50"}
                         src={author.image ? "http://localhost:8000/storage/images/" + author.image.path : "/images/placeholders/placeholder.jpg"}
                         alt={author.name}
                    />
                    <h5 className="card-title fw-bold">{author.name}</h5>
                </div>
                <p className="text-truncate author-bio">{summary(author?.bio, 80)}</p>
                <div className={"d-flex align-items-center justify-content-end gap-2"}>
                    <button
                        className={"btn btn-outline-danger float-start d-flex align-items-center justify-content-center gap-1"}>
                        <i className={"fa fa-heart"}></i>
                        <span className={"ms-2"}>إضافة الى المفضلة</span>
                    </button>
                    <button onClick={()=>{
                        props.setSelectedAuthor(author);
                    }} className="btn btn-secondary text-white float-start">
                        {"عرض التفاصيل"}
                    </button>
                </div>
            </div>
        </div>
    );


}

export default AuthorCard;
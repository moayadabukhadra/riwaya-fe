
import {summary} from "../../public/Helpers";

const AuthorCard = (props) => {
const author = props.author;
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
            <button  onClick={()=>{
               props.callBack(author)
            }} className={"btn btn-dark d-flex align-items-center justify-content-center gap-1 mt-1"}>
                <i className={"fa fa-eye"}></i>
                عرض التفاصيل
            </button>
    </div>
    );


}

export default AuthorCard;
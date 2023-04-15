import BookmarkApi from "../api/Bookmark";
import {useEffect, useState} from "react";

const BookmarksButtons = (props) => {
    const [bookmarkStatus, setBookmarkStatus] = useState({});
    const handleStoreBookmark = (bookmark_type) => {
        const data = {
            bookId: props.bookId,
            bookmark_type: bookmark_type
        }
        BookmarkApi.storeBookmark(data).then(({data}) => {
            console.log(data)
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className={"d-flex flex-column gap-1"}>
            <button onClick={(e) => {
                handleStoreBookmark('favorite')
            }}
                    className={`btn ${bookmarkStatus?.favorite ? "btn-danger" : "btn-outline-danger"} d-flex align-items-center justify-content-center gap-1`}>
                <i className={"fa fa-heart"}></i>
                <span className={"ms-2"}>{
                    bookmarkStatus?.favorite ? "حذف من المفضلة" : "إضافة الى المفضلة"
                }</span>
            </button>
            <button onClick={(e) => {
                handleStoreBookmark('to_read_later')
            }}
                    className={`btn ${bookmarkStatus?.to_read_later ? "btn-info" : "btn-outline-info"} d-flex align-items-center justify-content-center gap-1`}>
                <i className={"fa fa-book-reader"}></i>
                <span className={"ms-2"}>{
                    bookmarkStatus?.to_read_later ? "حذف من قراءته لاحقا" : "إضافة لقراءته لاحقا"
                }</span>
            </button>
            <button onClick={(e) => {
                handleStoreBookmark('done_reading')
            }}
                    className={`btn ${bookmarkStatus?.done_reading ? "btn-secondary" : "btn-outline-secondary"} d-flex align-items-center justify-content-center gap-1`}>
                <i className={"fa fa-check"}></i>
                <span className={"ms-2 "}>{
                    bookmarkStatus?.done_reading ? "حذف من تمت قراءته" : "إضافة الى تمت قراءته"
                }</span>
            </button>
        </div>
    );
}
export default BookmarksButtons;
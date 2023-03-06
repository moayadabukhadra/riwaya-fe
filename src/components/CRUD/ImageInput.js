import {useEffect, useState} from "react";

const ImageInput = ({itemImage}) => {
    const [image, setImage] = useState(null);

    useEffect(() => {

        if (itemImage) {
            setImage("http://localhost:8000/storage/images/" + itemImage)
        } else {
            setImage("/images/placeholders/placeholder.jpg");
        }
    }, [itemImage]);

    return (
        <div className="position-relative d-flex mb-5" style={{height: "150px", width: "150px"}}>
            <label className="position-absolute bg-dark rounded-icon cursor-pointer"
                   style={{top: "-15px", left: "-15px"}}>
                <i className="fa fa-edit"></i>
                <input type="file" className="d-none" name={"image"}
                       onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}/>
            </label>
            <div id={"image-preview"} style={{
                height: "150px",
                width: "150px",
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "15px"
            }}></div>
            <label className="position-absolute bg-danger rounded-icon cursor-pointer"
                   style={{bottom: "-15px", left: "-15px"}}
                   onClick={() => setImage("/images/placeholders/placeholder.jpg")}>
                <i className="fa fa-trash"></i>
                <input hidden={true} type="checkbox" name={"remove_image"}/>
            </label>
        </div>
    );
}

export default ImageInput;
import {useEffect, useState} from "react";
import UserApi from "../api/User";
import store from "/src/store";

const ImageInput = ({itemImage}) => {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
        let formData = new FormData();
        formData.append('image', e.target.files[0]);
        UserApi.editProfileImage(formData).then(({data}) => {
            store.dispatch({type: 'UPDATE', payload: data.success});
        })
    }
    useEffect(() => {
        if (itemImage) {
            setImage("https://154.38.175.203/storage/images/" + itemImage)
        } else {
            setImage("/images/placeholders/user-placeholder.png");
        }
    }, [itemImage]);

    return (
        <form encType={"multipart/form-data"}
              className="position-relative d-flex mb-2" style={{height: "150px", width: "150px"}}>
            <label className="position-absolute btn btn-dark rounded-icon cursor-pointer text-white"
                   style={{top: "0", left: "0"}}>
                <i className="fa fa-edit"></i>
                <input type="file" className="d-none" name={"image"}
                       onChange={handleImageChange}/>
            </label>
            <div id={"image-preview"} style={{
                height: "150px",
                width: "150px",
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "50%"
            }}></div>
            <label className="position-absolute btn btn-danger rounded-icon cursor-pointer"
                   style={{bottom: "0", left: "0"}}
                   onClick={() => setImage("/images/placeholders/user-placeholder.png")}>
                <i className="fa fa-trash"></i>
                <input hidden={true} type="checkbox" name={"remove_image"}/>
            </label>
        </form>
    );
}

export default ImageInput;
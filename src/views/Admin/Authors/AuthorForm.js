import {
    Button,
    Card,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroup,
    Row,
    Col,
    Container,
} from "reactstrap";
import Swal from "sweetalert2";
import Header from "../../../components/Headers/Header";
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/ar'
import {useEffect, useState} from "react";
import Select from 'react-select'
import "react-datepicker/dist/react-datepicker.css";
import ImageInput from "../../../components/CRUD/ImageInput";
import AuthorApi from "../../../api/Author";


const AuthorForm = () => {
    const [author, setAuthor] = useState();
    const [bio, setBio] = useState();
    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const AuthorId = queryParams.get('author');
        if (AuthorId) {
            AuthorApi.getAuthor(AuthorId).then(data => {
                setAuthor(data.data);
            });
        }
    },[] );
    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        data.append('bio', bio);
        if (author) {
            AuthorApi.updateAuthor(author?.id, data).then((data) => {
                console.log(data)
                Swal.fire({
                    icon: 'success',
                    title: 'تمت العملية بنجاح',
                    text: data.message,
                    showConfirmButton: false,
                    timer: 1500
                })
            });
        } else {
            AuthorApi.createAuthor(data).then((data) => {
                console.log(data)
                Swal.fire({
                    icon: 'success',
                    title: 'تمت العملية بنجاح',
                    text: data.message,
                    showConfirmButton: false,
                    timer: 1500
                })
            });
        }
    }

    return (
        <>
            <Header/>
            <Container className="mt--7" fluid>
                <Row className="d-flex align-items-center justify-content-center gap-2 gap-lg-0">
                    <Col lg="9" md="11">
                        <Card className="bg-secondary shadow border-0">
                            <CardBody className="px-lg-5 py-lg-5">
                                <Form id="add-book-form" role="form" onSubmit={handleSubmit}
                                      encType="multipart/form-data">
                                    <ImageInput itemImage={author?.image?.path}/>
                                    <FormGroup className="mb-3">
                                        <InputGroup className="input-group-alternative">
                                            <Input name={"name"} defaultValue={author?.name}
                                                   placeholder="الاسم"
                                                   type="text"
                                            />
                                        </InputGroup>
                                    </FormGroup>
                                    <CKEditor
                                        editor={ClassicEditor}
                                        config={{
                                            language: 'ar',
                                        }}
                                        data={author?.bio || "<p>ادخل وصف التصنيف</p>"}

                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            setBio(data);
                                        }}
                                    />
                                    <Button
                                        className="my-4 d-flex align-items-center justify-content-center gap-1 float-left"
                                        color="primary" type="submit">
                                        <i className={`fa fa-${author ? "edit" : "plus-circle"}`}></i>
                                        {author ? "تعديل" : "اضافة"}
                                    </Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default AuthorForm;

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
import BookApi from "../../../api/Book";
import CategoryApi from "../../../api/Category";
import AuthorApi from "../../../api/Author";


const BookForm = () => {
    const [authors, setAuthors] = useState();
    const [selectedAuthor, setSelectedAuthor] = useState({});
    const [categories, setCategories] = useState();
    const [selectedCategory, setSelectedCategory] = useState({});
    const [book, setBook] = useState();
    const [description, setDescription] = useState();

    useEffect(() => {
        CategoryApi.getAllCategories().then((data) => {
            setCategories(data.data.data.map((category) => {
                return {value: category.id, label: category.name}
            }));
        });
        AuthorApi.getAllAuthors().then((data) => {
            setAuthors(data.data.map((author) => {
                return {value: author.id, label: author.name}
            }));
        });
        const queryParams = new URLSearchParams(window.location.search);
        const bookId = queryParams.get('book');
        if (bookId) {
            BookApi.getBook(bookId).then(data => {
                setBook(data.data);
                setSelectedCategory({value: data.data?.category?.id, label: data.data?.category?.name});
                setSelectedAuthor({value: data.data?.author?.id, label: data.data?.author?.name});
            });
        }
    }, []);


    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        data.append('title', event.target.title.value);
        data.append('description', description);
        data.append('author_id', selectedAuthor.value);
        data.append('category_id', selectedCategory.value);
        data.append('publisher', event.target.publisher.value);
        data.append('published_date', event.target.published_date.value);
        data.append('image', event.target.image.files[0])
        if (book) {
            BookApi.updateBook(book.id, data).then((data) => {
                Swal.fire({
                    icon: 'success',
                    title: 'تمت العملية بنجاح',
                    text: data.message,
                    showConfirmButton: false,
                    timer: 1500
                })
            });
        } else {
            BookApi.createBook(data).then((data) => {
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
                                      encType={"multipart/form-data"}>
                                    <ImageInput itemImage={book?.image?.path}/>
                                    <FormGroup className="mb-3">
                                        <InputGroup className="input-group-alternative">
                                            <Input name={"title"} defaultValue={book?.title}
                                                   placeholder="عنوان الكتاب"
                                                   type="text"
                                            />
                                        </InputGroup>
                                    </FormGroup>
                                    <FormGroup className="mb-3">
                                        <InputGroup className="input-group-alternative">
                                            <Select className="w-100" options={authors} defaultValue={selectedAuthor}
                                                    onChange={setSelectedAuthor}/>
                                        </InputGroup>
                                    </FormGroup>
                                    <FormGroup className="mb-3">
                                        <InputGroup className="input-group-alternative">
                                            <Select className="w-100" options={categories}
                                                    onChange={setSelectedCategory}/>
                                        </InputGroup>
                                    </FormGroup>
                                    <FormGroup className="mb-3">
                                        <InputGroup className="input-group-alternative">
                                            <Input name={"publisher"} defaultValue={book?.publisher}
                                                   placeholder="دار النشر"
                                                   type="text"
                                            />
                                        </InputGroup>
                                    </FormGroup>
                                    <FormGroup className="mb-3">
                                        <InputGroup className="input-group-alternative">
                                            <Input type={"date"} name={"published_date"} className="form-control"
                                                   defaultValue={book?.published_date}/>
                                        </InputGroup>
                                    </FormGroup>
                                    <FormGroup className="mb-3">
                                        <InputGroup className="input-group-alternative">
                                            <Input name={"page_count"} defaultValue={book?.page_count}
                                                   placeholder="عدد الصفحات"
                                                   type="text"
                                            />
                                        </InputGroup>
                                    </FormGroup>
                                    <FormGroup className="mb-3">
                                        <InputGroup className="input-group-alternative">
                                            <Input name={"price"} defaultValue={book?.price}
                                                   placeholder="سعر الكتاب"
                                                   type="text"
                                            />
                                        </InputGroup>
                                    </FormGroup>
                                    <CKEditor
                                        editor={ClassicEditor}
                                        config={{
                                            language: 'ar',
                                        }}
                                        data={book?.description || "<p>ادخل وصف الكتاب</p>"}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            setDescription(data);
                                        }}
                                    />
                                    <Button
                                        className="my-4 d-flex align-items-center justify-content-center gap-1 float-left"
                                        color="primary" type="submit">
                                        <i className={`fa fa-${book ? "edit" : "plus-circle"}`}></i>
                                        {book ? "تعديل" : "اضافة"}
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

export default BookForm;
  
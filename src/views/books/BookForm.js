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
import Header from "../../components/Headers/Header";
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/ar'
import {useEffect, useRef, useState} from "react";
import Select from 'react-select'
import "react-datepicker/dist/react-datepicker.css";
import ImageInput from "../../components/CRUD/ImageInput";
import BookApi from "../../api/Book";
import CategoryApi from "../../api/Category";
import AuthorApi from "../../api/Author";


const BookForm = () => {
    const [authors, setAuthors] = useState();
    const [selectedAuthor, setSelectedAuthor] = useState({});
    const [categories, setCategories] = useState();
    const [selectedCategory, setSelectedCategory] = useState({});
    const [book, setBook] = useState();
    const [description, setDescription] = useState();

    useEffect(() => {
        CategoryApi.getAllCategories().then((data) => {
            setCategories(data.data.map((category) => {
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
                setSelectedCategory({value: book?.category?.id, label: book?.category?.name});
                setSelectedAuthor({value: book?.author?.id, label: book?.author?.name});
            });
        }
    }, []);


    function handleSubmit(event) {
        event.preventDefault();
        const data = {
            title: event.target.title.value,
            description: description,
            author_id: selectedAuthor.value,
            category_id: selectedCategory.value,
            publisher: event.target.publisher.value,
            published_date: event.target.published_date.value,
            image: event.target.image.files[0],
        };
        console.log(data);

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
                                    <ImageInput bookImage={book?.image?.path}/>
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
                                            <Select className="w-100" options={authors}
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
                                        data="<p>ادخل وصف الكتاب</p>"
                                        onReady={editor => {
                                            setDescription(editor.getData());
                                        }}
                                    />
                                    <Button className="my-4 d-flex align-items-center justify-content-center gap-1 float-left" color="primary" type="submit">
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
  
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
import CategoryApi from "../../../api/Category";


const CategoryForm = () => {
    const [category, setCategory] = useState();
    const [categories, setCategories] = useState();
    const [selectedParent, setSelectedParent] = useState({});
    const [description, setDescription] = useState();


    useEffect(() => {
        CategoryApi.getAllCategories().then((data) => {
            setCategories(data.data.data.map((category) => {
                return {value: category.id, label: category.name}
            }));
        });
        const queryParams = new URLSearchParams(window.location.search);
        const categoryId = queryParams.get('category');
        if (categoryId) {
            CategoryApi.getCategory(categoryId).then(data => {
                setCategory(data.data);
                setSelectedParent({value: data.data?.parent?.id, label: data.data?.parent?.name});
            });
        }
    },[] );


    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        data.append('description', description);
        data.append('parent_id', selectedParent.value);


        if (category) {
            CategoryApi.updateCategory(category?.id, data).then((data) => {
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
            CategoryApi.createCategory(data).then((data) => {
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
                                    <ImageInput itemImage={category?.image?.path}/>
                                    <FormGroup className="mb-3">
                                        <InputGroup className="input-group-alternative">
                                            <Input name={"name"} defaultValue={category?.name}
                                                   placeholder="الاسم"
                                                   type="text"
                                            />
                                        </InputGroup>
                                    </FormGroup>
                                    <FormGroup className="mb-3">
                                        <InputGroup className="input-group-alternative">
                                            <Select className="w-100" options={categories}
                                                    onChange={setSelectedParent}/>
                                        </InputGroup>
                                    </FormGroup>
                                    <CKEditor
                                        editor={ClassicEditor}
                                        config={{
                                            language: 'ar',
                                        }}
                                        data={category?.description || "<p>ادخل وصف التصنيف</p>"}

                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            setDescription(data);
                                        }}
                                    />
                                    <Button
                                        className="my-4 d-flex align-items-center justify-content-center gap-1 float-left"
                                        color="primary" type="submit">
                                        <i className={`fa fa-${category ? "edit" : "plus-circle"}`}></i>
                                        {category ? "تعديل" : "اضافة"}
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

export default CategoryForm;

import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    Media,
    Table,
    Container,
    Row, InputGroup, Button, Input,
} from "reactstrap";
import Header from "components/Headers/Header.js";
import {useEffect, useState} from "react";
import PaginationPages from "../../components/CRUD/PaginationPages";
import Select from "react-select";
import BookApi from "../../api/Book";
import CategoryApi from "../../api/Category";
import AuthorApi from "../../api/Author";
import Swal from "sweetalert2";

const BooksTable = () => {
    const [books, setBooks] = useState();
    const [pages, setPages] = useState();
    const [authors, setAuthors] = useState();
    const [categories, setCategories] = useState();
    const [params, setParams] = useState({
        'with': 'author,category,image',
    })

    useEffect(() => {
        BookApi.getAllBooks(params).then((data) => {
            setBooks(data.data.data);
            setPages(data.data.links);
        });
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
    }, []);

    return (
        <>
            <Header/>
            <Container className="mt--7" fluid>
                <Row>
                    <div className="col">
                        <Card className="shadow">
                            <CardHeader
                                className="row align-items-stretch align-items-lg-center justify-content-between m-0 gap-2 gap-lg-1">
                                <Input id="query" type={"text"} className={"form-control col-9 col-lg-3"}
                                       placeholder={"بحث"}
                                       onChange={(e) => {
                                           setParams({
                                               ...params,
                                               query: e.target.value
                                           });
                                           params.query = e.target.value;
                                           BookApi.getAllBooks(params).then((data) => {
                                               setBooks(data.data.data);
                                               setPages(data.data.links);
                                           });
                                       }}
                                />

                                    <Select className="col-12 col-lg-3 order-2 p-0" options={categories} onChange={(e) => {
                                        setParams({
                                            ...params,
                                            category: e.value
                                        });
                                        params.category = e.value;
                                        BookApi.getAllBooks(params).then((data) => {
                                            setBooks(data.data.data);
                                            setPages(data.data.links);
                                        });
                                    }}/>

                                    <Select className="col-12 col-lg-3 order-3 p-0" options={authors} onChange={(e) => {
                                        setParams({
                                            ...params,
                                            author: e.value
                                        });
                                        params.author = e.value;
                                        BookApi.getAllBooks(params).then((data) => {
                                            setBooks(data.data.data);
                                            setPages(data.data.links);
                                        });
                                    }}/>
                                <a href={"/admin/book/show"}
                                   className="btn btn-primary d-flex align-items-center justify-content-center col-2 order-0 order-lg-3 gap-1">
                                    <i className="fa fa-plus-circle m-0 p-0"></i>
                                    <span className="d-md-block d-none">إضافة</span>
                                </a>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">العنوان</th>
                                    <th scope="col">الكاتب</th>
                                    <th scope="col">التصنيف</th>
                                    <th scope="col"/>
                                </tr>
                                </thead>
                                <tbody>
                                {books && books.map((book) => (
                                    <tr>
                                        <th scope="row">
                                            <Media className="align-items-center">
                                                <a
                                                    className="avatar rounded-circle mr-3"
                                                    href="#pablo"
                                                    onClick={(e) => e.preventDefault()}
                                                >
                                                    <img
                                                        alt="..."
                                                        src={book.image ? "http://localhost:8000/storage/images/" + book.image.path : "/images/placeholders/placeholder.jpg"}
                                                    />
                                                </a>
                                            </Media>
                                        </th>
                                        <td>{book.title}</td>
                                        <td>
                                            <Badge color="" className="badge-dot mr-4">
                                                {book.author ? book.author.name : ''}
                                            </Badge>
                                        </td>
                                        <td>
                                            {book.category ? book.category.name : ''}
                                        </td>
                                        <td className="text-right d-flex align-items-center justify-content-center gap-1">
                                            <Button color="success" size="sm" type="button"
                                                    className="d-flex align-items-center justify-content-center gap-1"
                                                    onClick={() => {
                                                        window.location.href = "/admin/book/show/?book=" + book.id
                                                    }}>
                                                <i className="fa fa-edit"></i>
                                                <span className="d-none d-sm-block">تعديل</span>
                                            </Button>
                                            <Button color="danger" size="sm" type="button"
                                                    className="d-flex align-items-center justify-content-center gap-1"
                                                    onClick={() => {
                                                        Swal.fire({
                                                            title: 'هل أنت متأكد؟',
                                                            text: "لن تتمكن من استعادة هذا الكتاب مرة أخرى!",
                                                            icon: 'warning',
                                                            showCancelButton: true,
                                                            confirmButtonColor: '#3085d6',
                                                            cancelButtonColor: '#d33',
                                                            confirmButtonText: 'نعم، احذفه!',
                                                            cancelButtonText: 'إلغاء'
                                                        }).then((result) => {
                                                            if (result.isConfirmed) {
                                                                BookApi.deleteBook(book.id).then((data) => {
                                                                    Swal.fire(
                                                                        'تم الحذف!',
                                                                        'تم حذف الكتاب بنجاح.',
                                                                        'success'
                                                                    ).then(() => {
                                                                        window.location.reload();
                                                                    })
                                                                });
                                                            }
                                                        })
                                                    }}>
                                                <i className="fa fa-trash"></i>
                                                <span className="d-none d-sm-block">حذف</span>
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                            <CardFooter className="py-4">
                                <PaginationPages pages={pages}
                                                 setPages={setPages}
                                                 setData={setBooks}
                                                 params={params}
                                                 api={BookApi.getAllBooks}
                                />
                            </CardFooter>
                        </Card>
                    </div>
                </Row>
            </Container>
        </>
    );
};
export default BooksTable;
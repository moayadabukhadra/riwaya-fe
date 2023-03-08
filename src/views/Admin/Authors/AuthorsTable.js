import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    Media,
    Table,
    Container,
    Row, Button, Input,
} from "reactstrap";
import Header from "components/Headers/Header.js";
import {useEffect, useState} from "react";
import PaginationPages from "../../../components/CRUD/PaginationPages";
import AuthorApi from "../../../api/Author";
import Swal from "sweetalert2";

const AuthorsTable = () => {
    const [pages, setPages] = useState();
    const [authors, setAuthors] = useState();
    const [params, setParams] = useState({
        'with': 'image',
        'paginate':10,
    })
    useEffect(() => {
        AuthorApi.getAllAuthors(params).then(({data}) => {
            setAuthors(data.data);
            setPages(data.links);
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
                                <Input id="query" type={"text"} className={"form-control col-9 col-lg-4"}
                                       placeholder={"بحث"}
                                       onChange={(e) => {
                                           setParams({
                                               ...params,
                                               query: e.target.value
                                           });
                                           params.query = e.target.value;
                                           AuthorApi.getAllAuthors(params).then(({data}) => {
                                               setAuthors(data.data);
                                               setPages(data.links);
                                           });
                                       }}
                                />
                                <a href={"/admin/author/show"}
                                   className="btn btn-primary d-flex align-items-center justify-content-center col-2 order-0 order-lg-3 gap-1">
                                    <i className="fa fa-plus-circle m-0 p-0"></i>
                                    <span className="d-md-block d-none">إضافة</span>
                                </a>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">الاسم</th>
                                    <th scope="col" className="text-center">الخيارات</th>
                                </tr>
                                </thead>
                                <tbody>
                                {authors && authors.map((author) => (
                                    <tr key={author.id}>
                                        <th scope="row">
                                            <Media className="align-items-center">
                                                <a
                                                    className="avatar rounded-circle mr-3"
                                                    onClick={(e) => e.preventDefault()}
                                                >
                                                    <img
                                                        alt="..."
                                                        src={author.image ? "http://localhost:8000/storage/images/" + author.image.path : "/images/placeholders/placeholder.jpg"}
                                                    />
                                                </a>
                                            </Media>
                                        </th>
                                        <td>{author.name}</td>
                                        <td className="text-right d-flex align-items-center justify-content-center gap-1">
                                            <Button color="success" size="sm" type="button"
                                                    className="d-flex align-items-center justify-content-center gap-1"
                                                    onClick={() => {
                                                        window.location.href = "/admin/author/show/?author=" + author.id
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
                                                                AuthorApi.deleteAuthor(author.id).then((data) => {
                                                                    Swal.fire(
                                                                        'تم الحذف!',
                                                                        'تم حذف التصنيف بنجاح.',
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
                                                 setData={setAuthors}
                                                 params={params}
                                                 api={AuthorApi.getAllAuthors()}
                                />
                            </CardFooter>
                        </Card>
                    </div>
                </Row>
            </Container>
        </>
    );
};
export default AuthorsTable;
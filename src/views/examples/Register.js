import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col
} from "reactstrap";
import UserAPI from "../../api/User";
import {useDispatch} from "react-redux";

const Register = () => {
    const dispatch = useDispatch();
    const handleRegister = (e) => {
        e.preventDefault();

        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            c_password: e.target.c_password.value
        }

        UserAPI.register(data).then((response) => {
            dispatch({type: 'REGISTER', payload: response.data.success});
            console.log(response.data.success)
        });

    }
    return (
        <>
            <Col lg="6" md="8">
                <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-transparent pb-5">
                        <div className="text-center">
                            <Button
                                className="btn-neutral btn-icon mr-4"
                                color="default"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                            >
                <span className="btn-inner--icon">
                  <img
                      alt="..."
                      src={
                          require("../../assets/img/icons/common/github.svg")
                              .default
                      }
                  />
                </span>
                                <span className="btn-inner--text">Github</span>
                            </Button>
                            <Button
                                className="btn-neutral btn-icon"
                                color="default"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                            >
                <span className="btn-inner--icon">
                  <img
                      alt="..."
                      src={
                          require("../../assets/img/icons/common/google.svg")
                              .default
                      }
                  />
                </span>
                                <span className="btn-inner--text">Google</span>
                            </Button>
                        </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                        <Form role="form" onSubmit={handleRegister}>
                            <FormGroup>
                                <InputGroup className="input-group-alternative mb-3">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-hat-3"/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="الاسم" type="text" name={"name"}/>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup className="input-group-alternative mb-3">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-email-83"/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder="البريد الالكتروني"
                                        type="email"
                                        name={"email"}
                                    />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-lock-circle-open"/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder="كلمة المرور"
                                        type="password"
                                        name={"password"}
                                    />

                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-lock-circle-open"/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder="تاكيد كلمة المرور"
                                        type="password"
                                        name={"c_password"}
                                    />
                                </InputGroup>
                            </FormGroup>
                            <Row className="my-4">
                                <Col xs="12">
                                    <div className="custom-control custom-control-alternative custom-checkbox">
                                        <input
                                            className="custom-control-input"
                                            id="customCheckRegister"
                                            type="checkbox"
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <div className="text-center">
                                <Button className="mt-4" color="primary" type="submit">
                                    إنشاء حساب
                                </Button>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </>
    );
};

export default Register;

export default function Footer() {
    return (
        <footer className="footer bg-light text-muted">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-4">
                        <h3>
                            <img src={"/images/logo/riwaya-logo.png"} alt="logo" width="50" height="50"
                                 className="d-inline-block align-text-top"/>
                            رواية
                        </h3>
                        <p>موقع مخصص للكتب والقراءة.</p>
                    </div>
                    <div className="col-md-3">
                        <h3>استكشاف</h3>
                        <ul className="list-unstyled">
                            <li><a href="#">الكتب المميزة</a></li>
                            <li><a href="#">الكتب الأكثر قراءة</a></li>
                            <li><a href="#">المؤلفون</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h3>تواصل معنا</h3>
                        <ul className="list-unstyled">
                            <li><a href="#">اتصل بنا</a></li>
                            <li><a href="#">سياسة الخصوصية</a></li>
                            <li><a href="#">الشروط والأحكام</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h3>
                            تابعنا
                        </h3>
                        <ul className="d-flex align-items-center list-unstyled">
                            <li className="ms-3">
                                <a href="https://web.facebook.com/riwaya.jo"
                                   className="text-body-secondary">
                                    <i className="fab fa-facebook-f fa-2x" style={{
                                        color: "#3b5998"
                                    }}></i>
                                </a>
                            </li>
                            <li className="ms-3"><a className="text-body-secondary" href="https://github.com/moayadabukhadra">
                                <i className="fab fa-github fa-2x text-dark"></i>
                            </a>
                            </li>
                            <li className="ms-3"><a className="text-body-secondary"
                                                    href="https://www.instagram.com/riwaya.jo/">
                                <i className="fab fa-instagram fa-2x text-danger"></i>
                            </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <p className="text-center">© 2023 رواية. جميع الحقوق محفوظة.</p>
            </div>
        </footer>

    );
}

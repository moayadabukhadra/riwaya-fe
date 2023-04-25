import React, {useEffect, useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Dropdown,
} from 'reactstrap';
import store from "../store";
import $ from "jquery";
import {useHistory} from "react-router-dom";

function NavBar(args) {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownToggle = () => setDropdownOpen((prevState) => !prevState);
    const user = store.getState().user;
    const history = useHistory();


    const toggle = () => setIsOpen(!isOpen);
    const handleLogout = () => {
        store.dispatch({type: 'LOGOUT'});
        history.push('/auth/login');
    }
    useEffect(() => {
        $(document).ready(function () {
            $('a[href]').each(function () {
                if ($(this).attr('href') === window.location.pathname) {
                    $(this).addClass('active');
                }
            });
        });

    }, []);

    return (

        <Navbar className={"bg-white shadow-sm riwaya-nav"} fixed={"top"} expand={"md"}>
            <NavbarBrand href="">
                <img src={"/images/logo/riwaya-logo.png"} alt={"logo"} width={50}/>
                <span className={"text-amiri fs-4"}>رواية</span>
            </NavbarBrand>
            <div className={"d-flex align-items-center"}>
                <NavbarToggler className={"bg-white border-light text-white  fs-6 p-2"} onClick={() => {
                    toggle();
                    $('.riwaya-nav').toggleClass('bg-white-nav-toggle');
                }}/>

            </div>
            <Collapse className={"justify-content-center"} isOpen={isOpen} navbar>
                <Nav className="justify-content-center gap-1" navbar>
                    <NavItem>
                        <NavLink className={"d-flex align-items-center gap-2"} href="/">
                            <i className="fas fa-home text-primary d-md-none"></i>
                            الرئيسية
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={"d-flex align-items-center gap-2"} href={"/books"}>
                            <i className="fas fa-book-open text-primary d-md-none"></i>
                            الكتب
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={"d-flex align-items-center gap-2"} href={"/authors"}>
                            <i className="fas fa-user-tie text-primary d-md-none"></i>
                            المؤلفين
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={"d-flex align-items-center gap-2"} href={"/quotes"}>
                            <i className="fas fa-user-tie text-primary d-md-none"></i>
                            اقتباسات
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={"d-flex align-items-center gap-2"} href={"/contact-us"}>
                            <i className="fas fa-newspaper text-primary d-md-none"></i>
                            تواصل معنا
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        {user &&
                            <div className={"d-flex align-items-center gap-1 me-5"}>
                                <Dropdown className={"ms-4 p-0"} isOpen={dropdownOpen} toggle={dropdownToggle}>
                                    <DropdownToggle className={"bg-transparent border-0 p-0"}>
                                        <img className={"rounded-circle"}
                                             src={user?.image ? "https://riwaya.rf.gd/riwaya/storage/app/public/images/" + user?.image.path : "/images/placeholders/user-placeholder.png"}
                                             width={40} height={40}/>
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem href={"/profile"}
                                                      className={"d-flex align-items-center gap-1 text-secondary"}>
                                            <i className="fas fa-user-circle"></i>
                                            الصفحة الشخصية
                                        </DropdownItem>
                                        <DropdownItem divider={true}/>
                                        <DropdownItem role={"button"} className={"text-danger d-flex align-items-center gap-1"}
                                                      onClick={handleLogout}>
                                            <i className="fas fa-sign-out-alt"></i>
                                            تسجيل الخروج
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        }
                    </NavItem>

                    {!user &&
                        <>
                            <NavItem>
                                <NavLink className={"d-flex align-items-center gap-1"}
                                         href={"/auth/login"}>
                                    <i className="fas fa-sign-in-alt text-primary"></i>
                                    تسجيل الدخول
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={"d-flex align-items-center gap-1"}
                                         href={"/auth/register"}>
                                    <i className="fas fa-user-plus text-primary"></i>
                                    تسجيل جديد
                                </NavLink>
                            </NavItem>

                        </>
                    }

                </Nav>
            </Collapse>

        </Navbar>
    );
}


export default NavBar;
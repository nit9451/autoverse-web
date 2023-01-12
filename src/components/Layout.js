import { NavLink, Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import brandLogo from '../assets/img/logo-dark.svg';
import userPlaceholder from '../assets/img/user-placeholder.png';
import settings from '../config/settings';
import placeholderImage from '../assets/img/user-placeholder.png';
import { useState, useEffect } from 'react';

const Layout = () => {
    const [adminImage, setAdminImage] = useState('');

    const test = useSelector((state) => state.ui.test);
    const toggleSidebar = () => {
        document.body.classList.toggle('hide_sidebar');
    };
    const adminName = localStorage.getItem('adminName');

    const handleLogout = () => {
        localStorage.clear();
        window.location.href = '/login';
    };

    useEffect(() => {
        setAdminImage(settings.MEADIA_URL + localStorage.getItem('image'));
    }, []);

    const changeAdminImage = () => {
        setAdminImage(settings.MEADIA_URL + localStorage.getItem('image'));
    };

    useEffect(() => {
        window.changeAdminImage = changeAdminImage;
    }, []);

    return (
        <div className="site_wrapper">
            <header>
                <span className="cm_logo">
                    {/* <img src={brandLogo} /> */}
                    <h4>CMS Admin</h4>
                </span>

                <div onClick={toggleSidebar} className="menu_trigger">
                    <i className="fa fa-bars" />
                </div>

                <div className="menu-main">
                    <div className="ms-auto">
                        <Dropdown>
                            <Dropdown.Toggle>
                                <img src={adminImage? adminImage : placeholderImage} alt="" /> Hi, {adminName}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                                {/* <Dropdown.Item href="/change-password">Change Password</Dropdown.Item> */}
                                <span className="dropdown-item" onClick={handleLogout}>
                                    Logout
                                </span>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </header>

            {/* <div className="sidebar">
                <ul>
                    <li>
                        <NavLink exact to="/">
                            <i className="fa fa-tachometer" /> Dashboard
                        </NavLink>
                    </li>

                    <li>
                        <NavLink exact to="/admin">
                            <i className="fa fa-user-circle-o" /> Admin
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/influencer">
                            <i className="fa fa-users" /> Influencer
                        </NavLink>
                    </li>
                </ul>
            </div> */}
        </div>
    );
};

export default Layout;

import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import Logo from "../Assets/logo.png";

const Navigation = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className="nav-container">
            <div className="nav">
                <div className="nav__left">
                    <div className="nav__left__hamburger">
                        <FaIcons.FaBars onClick={showSidebar} />
                        <nav className={sidebar ? 'navmenu active' : 'nav-menu'}>
                            <ul className="nav-menu-items" onClick={showSidebar}>
                                <li className="cancel">
                                    <FaIcons.FaChevronLeft />
                                </li>

                                <li className="nav-menu-items__header">Navigation</li>
                                <li>Categories</li>
                                <li>Courses</li>
                            </ul>
                        </nav>
                    </div>
                    <img className="nav__left__logo" src={Logo} alt="Logo" />
                    <ul className="nav__left__list">
                        <div className="nav__left__list__item">Categories</div>
                        <div className="nav__left__list__item">Courses</div>
                    </ul>
                </div>
                <div className="nav__right">
                    <form className="nav__right__search">
                        <input 
                        type="text" 
                        className="nav__right__search__input"
                        placeholder="Search Courses..."
                        />
                        <button title="Search-button" type="button" className="nav__right__search__button">
                            <FaIcons.FaSearch />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
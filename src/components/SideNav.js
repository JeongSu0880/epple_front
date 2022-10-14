import React from 'react'
import '../App.css'
import {
    Routes,
    Route,
    Link,
  } from 'react-router-dom';

const SideNav = () => {
    return (
        <div>
            {/* Main Sidebar Container */}
            <aside className="SideNavigationBar">
                <div>
                    {/* Brand Logo */}
                    <Link to="./" className="brand-link">
                        <img src={process.env.PUBLIC_URL + `/logo.png`} alt="EPLElogo" className="EPLELogo" />
                    </Link>
                </div>
                <div>{/* Sidebar */}
                    <div className="sidebar">
                        {/* Sidebar Menu */}
                        <nav className="MainMenu">
                            <h6>MainMenu</h6>
                            <ul className="nav nav-pills nav-sidebar flex-column">
                                <li className="nav-item menu-open">
                                    <Link to="./" className="nav-link">
                                        <i className ='nav-icon fa-solid fa-house'></i>
                                        <p>
                                            Dashboard
                                        </p>
                                    </Link>

                                </li>
                                
                                
                                <li className="nav-item">
                                    <Link to="./components/Archive" className="nav-link">
                                        <i className='nav-icon fas fa-edit' />
                                        <p>
                                            자료실
                                        </p>
                                    </Link>
                                    
                                </li>
                               
                                
                                <li className="nav-item">
                                    <Link to="./components/Calendar" className="nav-link">
                                        <i className='nav-icon fa-solid fa-calendar'></i>
                                        <p>
                                            Calendar
                                        </p>
                                    </Link>
                                </li>
                                
                                
                                <li className="nav-item">
                                    <Link to="./components/Chat" className="nav-link">
                                        <i className='nav-icon fa-regular fa-message'></i>
                                        <p>
                                            채팅메시지
                                        </p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="./components/Students" className="nav-link">
                                        <i className ='nav-icon fa-solid fa-user-group'></i>
                                        <p>
                                            Student
                                        </p>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        {/* /.sidebar-menu */}
                    </div>
                    {/* /.sidebar */}
                </div>
            </aside>


        </div>
    )
}

export default SideNav

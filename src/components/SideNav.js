import React from 'react'
import '../App.css'

const SideNav = () => {
    return (
        <div>
            {/* Main Sidebar Container */}
            <aside className="SideNavigationBar">
                <div>
                    {/* Brand Logo */}
                    <a href="index.html" className="brand-link">
                        <img src={process.env.PUBLIC_URL + `/logo.png`} alt="EPLElogo" className="EPLELogo" />
                    </a>
                </div>
                <div>{/* Sidebar */}
                    <div className="sidebar">
                        {/* Sidebar Menu */}
                        <nav className="MainMenu">
                            <h6>MainMenu</h6>
                            <ul className="nav nav-pills nav-sidebar flex-column">
                                <li className="nav-item menu-open">
                                    <a href="pages/dashboard.html" className="nav-link">
                                        <i className ='nav-icon fa-solid fa-house'></i>
                                        <p>
                                            Dashboard
                                        </p>
                                    </a>

                                </li>
                                
                                
                                <li className="nav-item">
                                    <a href="./pages/archive.html" className="nav-link">
                                        <i className='nav-icon fas fa-edit' />
                                        <p>
                                            자료실
                                        </p>
                                    </a>
                                    
                                </li>
                               
                                
                                <li className="nav-item">
                                    <a href="./pages/calendar.html" className="nav-link">
                                        <i className='nav-icon fa-solid fa-calendar'></i>
                                        <p>
                                            Calendar
                                        </p>
                                    </a>
                                </li>
                                
                                
                                <li className="nav-item">
                                    <a href="./pages/chat.html" className="nav-link">
                                        <i className='nav-icon fa-regular fa-message'></i>
                                        <p>
                                            채팅메시지
                                        </p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="./pages/student.html" className="nav-link">
                                        <i className ='nav-icon fa-solid fa-user-group'></i>
                                        <p>
                                            Student
                                        </p>
                                    </a>
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

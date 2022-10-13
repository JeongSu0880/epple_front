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
                <p></p>
                <div>{/* Sidebar */}
                    <div className="sidebar">
                        {/* Sidebar Menu */}
                        <nav className="MainMenu">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                                <li className="nav-item menu-open">
                                    <a href="#" className="nav-link active">
                                        <i className="nav-icon fas fa-tachometer-alt" />
                                        <p>
                                            Dashboard

                                        </p>
                                    </a>

                                </li>
                                
                                
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-edit" />
                                        <p>
                                            자료실
                                            <i className="fas fa-angle-left right" />
                                        </p>
                                    </a>
                                    
                                </li>
                               
                                
                                <li className="nav-item">
                                    <a href="pages/calendar.html" className="nav-link">
                                        <i className="nav-icon far fa-calendar-alt" />
                                        <p>
                                            Calendar
                                        </p>
                                    </a>
                                </li>
                                
                                
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-envelope" />
                                        <p>
                                            채팅메시지
                                            <i className="fas fa-angle-left right" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="pages/mailbox/mailbox.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Inbox</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/mailbox/compose.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Compose</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/mailbox/read-mail.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Read</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-search" />
                                        <p>
                                            Search
                                            <i className="fas fa-angle-left right" />
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

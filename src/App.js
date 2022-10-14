import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Chatting from './pages/Chatting';
import Calendar from './pages/Calendar';
import Archive from './pages/Archive';
import Mystudents from './pages/Mystudents';
import Home from './pages/Home';

function App() {
    return (
        <BrowserRouter>
        <Sidebar>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/calendar" element={<Calendar />}/>
                <Route path="/chatting" element={<Chatting />}/>
                <Route path="/archive" element={<Archive />}/>
                <Route path="/mystudents" element={<Mystudents />}/>
            </Routes>
            </Sidebar>
        </BrowserRouter>
    )
}

export default App;
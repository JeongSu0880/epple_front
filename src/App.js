import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SideNav from './components/SideNav';
//import '@mobiscroll/react/dist/css/mobiscroll.min.css';
//import { Eventcalendar, getJson, toast, localeKo } from '@mobiscroll/react';
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import Archive from './components/Archive';
//import { Calendar } from '@fullcalendar/core';
import Chat from './components/Chat';
import Students from './components/Students';
import Dashboard from './components/Dashboard';
import Calendar from './components/Calendar';


function App() {
    return (
        <>
            {/* <BrowserRouter>
                
                <Routes>
                    <Route path='/'>
                        <Dashboard />
                    </Route>
                    <Route path='/components/Students'>
                        <Students />
                    </Route>
                    <Route path='/components/Archive'>
                        <Archive />
                    </Route>
                    <Route path='/components/Calendar'>
                        <Calendar />
                    </Route>
                    <Route path='/components/Chat'>
                        <Chat />
                    </Route>
                </Routes>
            </BrowserRouter> */}
            <Header />
            <SideNav />
            <Footer />
        </>
    );

    // const [myEvents, setEvents] = React.useState([]);

    // React.useEffect(() => {
    //     getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
    //         setEvents(events);
    //     }, 'jsonp');
    // }, []); //데이터 set

    // const onEventClick = React.useCallback((event) => {
    //     toast({
    //         message: event.event.title
    //     });
    // }, []);

    // const view = React.useMemo(() => {
    //     return {
    //         schedule: { type: 'week' }
    //     };
    // }, []);

    // return (
    //     <Eventcalendar
    //         theme="ios" 
    //         themeVariant="light"
    //         clickToCreate={true}
    //         dragToCreate={true}
    //         dragToMove={true}
    //         dragToResize={true}
    //         eventDelete={true}
    //         locale={localeKo}
    //         data={myEvents}
    //         view={view}
    //         onEventClick={onEventClick}
    //    />
    // ); 
}

export default App;
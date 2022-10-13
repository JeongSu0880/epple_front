import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SideNav from './components/SideNav';
import Home from './components/Home';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Eventcalendar, getJson, toast, localeKo } from '@mobiscroll/react';

function App() {
    return(
    <>
    <Header />
    <Home />
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
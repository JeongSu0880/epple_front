import React from 'react';
import {ScheduleComponent, ViewsDirective, 
Day, Week, WorkWeek, Month, 
Agenda, Inject, Resize, DragAndDrop} 
from '@syncfusion/ej2-react-schedule';
import {DatePickerComponent} from '@syncfusion/ej2-react-calendars';
import {ScheduleData} from '../data/dummy';
import "../styles/Calendar.css";

const Calendar = () => {
    return (
        <div className="m-2 md:m-10 mt-24 p-2
        md:p10 bg-white rounded-3xl">
            {/* <Header category="App" title="Calendar"/> */}
            <div className="header">
                <h2>Calendar</h2>
            </div>
            <ScheduleComponent width="1000px" height="960px">
                <Inject services={[Day, Week, WorkWeek, Month,
                Agenda, Resize, DragAndDrop]} />
            </ScheduleComponent>
        </div>
    );
}


export default Calendar;
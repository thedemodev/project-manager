import React, { useState, useEffect } from 'react';
import moment from 'moment';

// Styled Components
import {
    CalenderContainer,
    WeekdayHeader,
    WeekdayBody
} from './CalenderStyles';

const Calender = () => {
    // State
    const [dateObj] = useState(moment());

    // -- CALENDER -- //

    // get a short weekday from moment
    const weekdayshort = moment.weekdaysShort();
    // map the short days to display
    const weekdayshortname = weekdayshort.map(day => <th>{day}</th>);

    // get first day of the month
    const firstDayOfMonth = () => {
        // get a copy of the dateObj
        let dateObject = dateObj;
        // get the first day of the month
        let firstDay = moment(dateObject).startOf("month").format("d");
        // return the first day of the month
        return firstDay;
    };

    // create a blank area for the days that are before the month starts
    const blanks = [];
    for (let i = 0; i < firstDayOfMonth(); i++) {
        blanks.push(<td>{""}</td>);
    };

    // create days in the month
    const daysInMonth = [];
    for (let i = 1; i <= moment().daysInMonth(); i++) {
        daysInMonth.push(
            <td>{i}</td>
        );
    };

    // get a structure of the calender
    const totalCells = [...blanks, ...daysInMonth];
    const rows = [];
    let cells = [];
    totalCells.forEach((row, index) => {
        // if index does not equal seven, that means not go to next week
        if (index % 7 !== 0) {
            cells.push(row);
        } else {
            if (cells.length !== 0) {
                rows.push(cells);
            }
            cells = [];
            cells.push(row);
        };
        // add remaining dates to calender
        if (index === totalCells.length - 1) {
            rows.push(cells);
        };
    });
    console.log(rows)
    // wrap all the rows in a <td>
    let calenderDays = rows.map(day => <tr>{day}</tr>);

    return (
        <CalenderContainer>
            <WeekdayHeader>
                <tr>{weekdayshortname}</tr>
            </WeekdayHeader>
            <WeekdayBody>
                {calenderDays}
            </WeekdayBody>
        </CalenderContainer>
    )
};

export default Calender

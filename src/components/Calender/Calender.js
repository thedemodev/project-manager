import React, { useState } from 'react';
import moment from 'moment';

// Component
import CalenderMonths from '../CalenderMonths/CalenderMonths';
import CalenderYear from '../CalenderYear/CalenderYear';

// Styled Components
import {
    CalenderTable,
    WeekdayHeader,
    WeekdayBody,
    CalenderContainer,
    CalenderMonthContainer
} from './CalenderStyles';

const Calender = () => {
    // State
    const [dateObj, setDateObj] = useState(moment());
    const [allMonths] = useState(moment.months());
    const [calenderDisplay, setCalenderDisplay] = useState(0);

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
        blanks.push(<td className="blank">{""}</td>);
    };

    // find the current day
    const currentDay = () => {
        return dateObj.format('D');
    };

    // create days in the month
    const daysInMonth = [];
    for (let i = 1; i <= moment().daysInMonth(); i++) {
        // check to see if it is a current day
        let today = i == currentDay() ? "today" : "";
        daysInMonth.push(
            <td className={today}>{i}</td>
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
    // wrap all the rows in a <td>
    let calenderDays = rows.map(day => <tr>{day}</tr>);

    // get the current month
    const currentMonth = () => dateObj.format("MMM");

    // change the month selected
    const setMonth = (months, month) => {
        // get the number of the month
        let monthNo = months.findIndex(m => m.props.children === month);
        // create a new data object
        let dateObject = Object.assign({}, dateObj);
        // change the month value
        dateObject = moment(dateObject).set("month", monthNo);
        // update the date obj on state
        setDateObj(dateObject);
    };

    // hide and show the months calender
    const toggleMonthsCalender = () => {
        // change the display of months calender
        if (calenderDisplay === 1) {
            setCalenderDisplay(0);
        } else if (calenderDisplay === 2) {
            setCalenderDisplay(1);
        } else {
            setCalenderDisplay(1);
        };
    };

    // show the year calender
    const toggleYearsCalender = () => {
        if (calenderDisplay === 2) {
            setCalenderDisplay(0);
        } else if (calenderDisplay === 1) {
            setCalenderDisplay(2);
        } else {
            setCalenderDisplay(2);
        };
    };

    // get the year
    const year = () => dateObj.format("Y");

    // set the year
    const setYear = year => {
        // create a new date object
        let dateObject = Object.assign({}, dateObj);
        // set the selected year onto the date obj
        dateObject = moment(dateObject).set("year", year);
        //change the date obj on state
        setDateObj(dateObject);
    };


    // function to show the calender views
    const showCalenderViews = () => {
        switch (calenderDisplay) {
            case 1:
                return <CalenderMonths data={allMonths} setMonth={setMonth} />;
            case 2:
                return <CalenderYear setYear={setYear} year={year()} />;
            default:
                return null;
        }
    };


    // JSX
    return (
        <CalenderContainer>
            <CalenderMonthContainer>
                <span onClick={toggleMonthsCalender}>{currentMonth()}</span>
                <span onClick={toggleYearsCalender}>{year()}</span>
            </CalenderMonthContainer>
            {
                showCalenderViews()
            }
            <CalenderTable>
                <WeekdayHeader>
                    <tr>{weekdayshortname}</tr>
                </WeekdayHeader>
                <WeekdayBody>
                    {calenderDays}
                </WeekdayBody>
            </CalenderTable>
        </CalenderContainer>
    )
};

export default Calender

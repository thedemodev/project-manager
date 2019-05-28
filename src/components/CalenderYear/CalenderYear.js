import React from 'react';
import moment from 'moment';

// Styled Comonents
import {
    CalenderYearTable,
    YearTableHeader,
    YearTableBody
} from './CalenderYearStyles';

const CalenderYear = props => {
    let months = [];
    let rows = [];
    let cells = [];
    let nextten = moment().set('year', props).add('year', 12).format('Y');

    // create a year range
    const getDates = (startDate, endDate) => {
        // store the date range
        const dateArray = [];
        // start date
        let currentDate = moment(startDate);
        // stop date
        let stopDate = moment(endDate);
        // fill the date array with dates
        while (currentDate <= stopDate) {
            dateArray.push(moment(currentDate).format("YYYY"));
            currentDate = moment(currentDate).add(1, "year");
        };
        // return the current date
        return dateArray;
    };

    let twelveYears = getDates(props, nextten);

    // create the year table 
    twelveYears.map(data => {
        months.push(
            <td key={data} onClick={() => props.setYear(data)}>
                <span>{data}</span>
            </td>
        );
    });

    months.forEach((row, i) => {
        if (i % 3 !== 0 || i == 0) {
            cells.push(row);
        } else {
            rows.push(cells);
            cells = [];
            cells.push(row);
        }
    });

    // push the each cell into the rows
    rows.push(cells);

    // create a list of years
    let yearList = rows.map(row => <tr>{row}</tr>);

    return (
        <CalenderYearTable>
            <YearTableHeader>
                <tr>
                    <th></th>
                    <th>Select A Year</th>
                    <th></th>
                </tr>
            </YearTableHeader>
            <YearTableBody>
                {yearList}
            </YearTableBody>
        </CalenderYearTable>
    );
};

export default CalenderYear;
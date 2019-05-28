import React from 'react';

// Styled Components
import {
    MonthsTable,
    MonthsTableBody
} from './CalenderMonthsStyles';

const CalenderMoths = props => {
    let rows = [];
    let cells = [];

    // push the months into the months array
    let months = props.data.map(month => (
        <td onClick={event => props.setMonth(months, month)}>
            {month}
        </td>
    ));

    months.forEach((row, i) => { 
        if (i % 3 !== 0 || i == 0) { // except zero index 
            cells.push(row); 
        } else { 
            rows.push(cells); 
            cells = [];
            cells.push(row); 
        }
     });
    // add the last
    rows.push(cells);

    //map over the rows and return them wrapped in a <tr> tag
    let monthList = rows.map(row => <tr onCLick={props.showMonths}>{row}</tr>);

    return (
        <MonthsTable>
            <MonthsTableBody>
                {monthList}
            </MonthsTableBody>
        </MonthsTable>
    );
};

export default CalenderMoths;
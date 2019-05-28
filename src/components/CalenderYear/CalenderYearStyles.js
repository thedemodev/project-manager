import styled from 'styled-components';

// Components
export const CalenderYearTable = styled.table`
    width: 25vw;
    background: white;
`

export const YearTableHeader = styled.thead`
    background: #DDDDEA30;
    text-align: center;
    color: #A9A9A9;
    th {
        padding: 10px;
    }
`

export const YearTableBody = styled.tbody`
    tr {
        width: 100%;
        td {
            text-align: center;
            padding: 14px;
            font-size: 14px;
            &:hover {
                color: #336CB6;
                cursor: pointer;
            }
        }
    }
`
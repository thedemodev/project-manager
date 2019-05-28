import styled from 'styled-components';

// Components
export const CalenderContainer = styled.table`
    width: 35vw;
    height: 30vh;
    background: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    /* box-shadow: 1px 1px 5px 0.5px #DDDDEA80; */
    border-radius: 3px 3px 3px 3px;
`

export const WeekdayHeader = styled.thead`
    tr {
        height: 5vh;
        background: #336CB6;
        border-radius: 3px 3px 3px 3px;
        th {
            color: white;
            padding: 18px;
            &:first-child {
                border-radius: 3px 0px 0px 0px;
            }
            &:last-child {
                border-radius: 0px 3px 0px 0px;
            }
        }
    }
`

export const WeekdayBody = styled.tbody`
    width: 100%;
    height: 80%;
    td {
        padding: 18px;
        text-align: center;
        &.blank {
            background: #DDDDEA20;
        }
        &.today {
            border: 3px solid blue;
        }
    }
`
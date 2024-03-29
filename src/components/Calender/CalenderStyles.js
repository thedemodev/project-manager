import styled from 'styled-components';

// Components
export const CalenderContainer = styled.div`
    height: auto;
    width: 25vw;
    box-shadow: 1px 1px 5px 0.5px #DDDDEA80;
`
export const CalenderMonthContainer = styled.div`
    width: 25vw;
    height: 5vh;
    background: #E84675;
    color: white;
    border-radius: 3px 3px 0px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-size: 22px;
    &:hover {
        cursor: pointer;
    }
`

export const CalenderTable = styled.table`
    width: 25vw;
    height: 30vh;
    background: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border-radius: 3px 3px 3px 3px;
`

export const WeekdayHeader = styled.thead`
    tr {
        height: 5vh;
        background: #28548e;
        border-radius: 3px 3px 3px 3px;
        th {
            color: white;
            padding: 5px;
            padding-top: 8px;
            text-align: center;
        }
    }
`

export const WeekdayBody = styled.tbody`
    width: 100%;
    height: 80%;
    td {
        padding: 5px;
        padding-top: 8px;
        text-align: center;
        &:hover {
            cursor: pointer;
            background: #28548e30;
        }
        &.blank {
            background: #DDDDEA20;
        }
        &.today {
            background: #E8467530;
        }
    }
`
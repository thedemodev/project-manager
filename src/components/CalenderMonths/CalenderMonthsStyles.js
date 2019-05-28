import styled from 'styled-components';

// Components
export const MonthsTable = styled.table`
    width: 25vw;
    background: white;
`

export const MonthsTableBody = styled.tbody`
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
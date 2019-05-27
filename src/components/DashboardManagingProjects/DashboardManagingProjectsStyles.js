import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Components
export const ManagingProjectsContainer = styled.div`
    width: 90%;
    height: 75%;
    margin-top: 1%;
`

export const ProjectsHeader = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    h2 {
        margin-left: auto;
        margin-right: 2%;
        font-size: 18px;
    }
`

export const NewProjectButton = styled(Link)`
    width: 11%;
    height: 65%;
    background: #336CB6;
    border: 2px solid #28548e;
    border-radius: 3px 3px 3px 3px;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    font-size: 14px;
    transition: linear 200ms;
    text-decoration: none;
    box-shadow: 1px 1px 5px 0.5px #DDDDEA80;
    &:hover {
        cursor: pointer;
        background: #4e86ce;
    }
`
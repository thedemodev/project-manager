import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Components
export const ManagingProjectsContainer = styled.div`
    width: 90%;
    height: 75%;
    margin-top: 1%;
    background: white;
    border-radius: 3px 3px 3px 3px;
    box-shadow: 1px 1px 5px 0.5px #DDDDEA80;
`

export const ProjectsHeader = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`

export const NewProjectButton = styled(Link)`
    width: 10.5%;
    height: 70%;
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
    margin-right: 3%;
    margin-top: 2%;
    &:hover {
        cursor: pointer;
        background: #4e86ce;
    }
    &:active {
        background: #336CB6;
    }
`
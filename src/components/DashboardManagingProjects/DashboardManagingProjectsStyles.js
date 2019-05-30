import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Components
export const ManagingProjectsContainer = styled.div`
    width: 90%;
    height: 75%;
`

export const ProjectsInfo = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
    background: white;
    border-radius: 0px 0px 3px 3px;
    box-shadow: 1px 4px 5px 0.5px #DDDDEA80;
`

export const DataContainer = styled.div`
    width: 10%;
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-left: 1.2%;
    h1 {
        font-size: 14px;
        color: #a9a9a9;
    }
    h2 {
        font-size: 15px;
        color: #E84675;
    }
`

export const NewProjectButton = styled(Link)`
    width: 10.5%;
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
    margin-right: 3%;
    margin-left: auto;
    &:hover {
        cursor: pointer;
        background: #4e86ce;
    }
    &:active {
        background: #336CB6;
    }
`
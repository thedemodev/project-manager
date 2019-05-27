import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

// Components
export const DashboardProjectsContainer = styled.div`
    width: 95vw;
    height: 92vh;
    background: #DDDDEA45;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const DashboardProjectsHeader = styled.div`
    width: 90%;
    height: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background: white;
    border-radius: 3px 3px 3px 3px;
    margin-top: 3%;
    box-shadow: 1px 1px 5px 0.5px #DDDDEA80;
    h2 {
        font-size: 22px;
        margin-left: 3%;
        color: #232323;
    }
`

export const ProjectsLink = styled(NavLink)`
    width: 11%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #A9A9A9;
    text-decoration: none;
    font-size: 12px;
    letter-spacing: 0.5px;
    transition: linear 200ms;
    &.link-one {
        border-top: 2px solid #DDDDEA50;
        border-left: 2px solid #DDDDEA50;
        border-bottom: 2px solid #DDDDEA50;
        border-right: 1px solid #DDDDEA50;
        border-radius: 3px 0px 0px 3px;
        margin-left: auto;
    }
    &.link-two {
        border-top: 2px solid #DDDDEA50;
        border-right: 2px solid #DDDDEA50;
        border-bottom: 2px solid #DDDDEA50;
        border-left: 1px solid #DDDDEA50;
        border-radius: 0px 3px 3px 0px;
        margin-right: 3%;
    }
    &.active {
        background: #DDDDEA80;
        &:hover {
            color: #A9A9A9;
            background: #DDDDEA80;
        }
    }
    &:hover {
        background: #DDDDEA50;
    }
`
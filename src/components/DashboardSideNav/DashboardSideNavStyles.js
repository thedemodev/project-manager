import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// Components
export const SideNavContainer = styled.div`
    width: 5vw;
    height: 100vh;
    background: white;
    box-shadow: 0.5px -1px 5px 0.5px #DDDDEA80;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const LogoContainer = styled.div`
    width: 100%;
    height: 8vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const LogoBadge = styled.div`
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #E84675;
    transition: 1200ms;
    :hover {
        cursor: pointer;
        transform: rotate(360deg);
    }
`

export const MenuContainer = styled.div`
    width: 100%;
    height: 40%;
    margin-top: -50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const Link = styled(NavLink)`
    width: 50%;
    height: 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #A9A9A9;
    border-radius: 5px 5px 5px 5px;
    transition: ease 200ms;
    border: 2px solid transparent;
    &.active {
        background: #E84675;
        border: 2px solid #df1c54;
        color: white;
        box-shadow: 1px 1px 5px 0.5px #DDDDEA;    
        transform: scale(1.1); 
    }
    &:hover {
        transform: scale(1.2);
    }
`

export const ThemeContainer = styled.div`
    width: 100%;
    height: 15%;
`
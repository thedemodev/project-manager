import styled from 'styled-components';

// Components
export const ApplicationNavContainer = styled.div`
    width: 95vw;
    height: 8vh;
    background: white;
    box-shadow: 5px -1px 5px 0.5px #DDDDEA80;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-start;
    color: #A9A9A9;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    h1{
        font-size: 16px;
        margin-right: 2%;
    }
    img {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        margin-right: 2%;
        box-shadow: 1px 1px 5px 0.5px #DDDDEA;
    }
`

export const UserContainer = styled.div`
    width: 5%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-left: 1px solid #DDDDEA80;
`
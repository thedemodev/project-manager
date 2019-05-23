import styled from 'styled-components';

// Components
export const LoginContainer = styled.div`
    width: 30%;
    height: 45%;
    background: white;
    border-radius: 3px 3px 3px 3px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const Logo = styled.div`
    width: 75px;
    height: 75px;
    border-radius: 50%;
    border: 3px solid #28548e;
    background: #336CB6;
    position: absolute;
    left: 40%;
    top: -13%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: white;
`

export const LoginForm = styled.form`
    width: 65%;
    height: 70%;
`

export const FormLabel = styled.div`
    width: 100%;
    height: 12%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    font-size: 18px;
    color: #A6A6A6;
    margin-top: 2%;
    h1 {
        margin-left: 3%;
    }
`

export const FormInput = styled.input.attrs({
    placeholder: 'Enter your username'
})`
    width: 100%;
    height: 18%;
    border: 2px solid #A6A6A6;
    background: #f7f7f7;
    border-radius: 3px 3px 3px 3px;
    outline: none;
    margin-top: 3%;
    font-size: 14px;
    padding-left: 5px;
    ::placeholder {
        color: #A6A6A6;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`

export const FormButton = styled.button`
    width: 50%;
    height: 18%;
    background: #336CB6;
    border: 3px solid #28548e;
    color: white;
    border-radius: 3px 3px 3px 3px;
    outline: none;
    margin-left: 25%;
    margin-right: 25%;
    margin-top: 8%;
    font-size: 14px;
    transition: linear 150ms;
    :hover {
        cursor: pointer;
        background: #4e86ce;
    }
`
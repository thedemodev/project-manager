import styled, { keyframes } from 'styled-components';

// Components
export const SignUpContainer = styled.div`
    width: 30%;
    height: 55%;
    background: white;
    border: 2px solid #a9a9a9;
    border-radius: 3px 3px 3px 3px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding-top: 1%;   
`

export const Logo = styled.div`
    width: 75px;
    height: 75px;
    border-radius: 50%;
    border: 3px solid #df1c54;
    background: #E84675;
    position: absolute;
    left: 40%;
    top: -10%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: white;
`

export const LoginForm = styled.form`
    width: 65%;
    height: 60%;
    margin-top: 8%;
`

export const FormLabel = styled.div`
    width: 100%;
    height: 8%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    font-size: 14px;
    color: #A6A6A6;
    margin-top: 3%;
    h1 {
        margin-left: 3%;
    }
`

export const FormUsername = styled.input`
    width: 96.5%;
    height: 15%;
    border: 2px solid #A6A6A6;
    background: #f7f7f7;
    border-radius: 3px 3px 3px 3px;
    outline: none;
    margin-top: 3%;
    font-size: 14px;
    padding-left: 5px;
    transition: linear 150ms;
    :focus {
        border: 2px solid #336CB6; 
    }
    ::placeholder {
        color: #A6A6A6;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`

export const FormPassword = styled.input.attrs({
    type: 'password'
})`
    width: 96.5%;
    height: 15%;
    border: 2px solid #A6A6A6;
    background: #f7f7f7;
    border-radius: 3px 3px 3px 3px;
    outline: none;
    margin-top: 3%;
    font-size: 14px;
    padding-left: 5px;
    transition: linear 150ms;
    :focus {
        border: 2px solid #336CB6; 
    }
    ::placeholder {
        color: #A6A6A6;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`

export const FormButton = styled.button`
    width: 100%;
    height: 18%;
    background: #E84675;
    border: 3px solid #df1c54;
    color: white;
    border-radius: 3px 3px 3px 3px;
    outline: none;
    margin-top: 10%;
    font-size: 14px;
    transition: linear 150ms;
    :hover {
        cursor: pointer;
        background: #ee7397;
    }
`
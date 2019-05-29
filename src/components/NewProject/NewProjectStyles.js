import styled from 'styled-components';

// Components
export const NewProjectContainer = styled.div`
    width: 70%;
    height: 75%;
    margin-top: 1%;
    display: flex;
    flex-direction: row-reverse;
`

export const NewProjectInfo = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const NewProjectForm = styled.form`
    width: 80%;
    height: 89%;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: flex-start;
    border-radius: 3px 3px 3px 3px;
    box-shadow: 1px 1px 5px 0.5px #DDDDEA80;
    color: #A9A9A9;
    font-size: 15px;
    h1 {
        margin-top: 10%;
        margin-left: 10%;
    }
    input {
        width: 80%;
        height: 5%;
        border: 2px solid #A6A6A6;
        background: #f7f7f750;
        border-radius: 3px 3px 3px 3px;
        outline: none;
        margin-top: 2%;
        margin-left: 10%;
        font-size: 14px;
        transition: linear 150ms;
        &:focus {
            border: 2px solid #E84675;
        }
    }
    h2 {
        margin-top: 5%;
        margin-left: 10%;
    }
    textarea {
        width: 80%;
        height: 45%;
        border: 2px solid #A6A6A6;
        background: #f7f7f750;
        border-radius: 3px 3px 3px 3px;
        outline: none;
        margin-top: 2%;
        margin-left: 10%;
        font-size: 14px;
        transition: linear 150ms;
        &:focus {
            border: 2px solid #E84675;
        }
    }
    h3 {
        margin-top: 5%;
        margin-left: 10%;
    }
    button {
        width: 82%;
        height: 8%;
        background: #E84675;
        border: 3px solid #df1c54;
        color: white;
        border-radius: 3px 3px 3px 3px;
        outline: none;
        margin-left: 10%;
        margin-top: 5%;
        font-size: 14px;
        transition: linear 150ms;
        :hover {
            cursor: pointer;
            background: #ee7397;
        }
    }
`

export const NewProjectDate = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`
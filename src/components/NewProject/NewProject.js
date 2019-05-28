import React from 'react'

// Components
import Calender from '../Calender/Calender';

// Styled Components
import {
    NewProjectContainer,
    NewProjectHeader
} from './NewProjectStyles';

const NewProject = () => {
    return (
        <NewProjectContainer>
            <NewProjectHeader>
                <h1>Please select a due date:</h1>
            </NewProjectHeader>
            <Calender />
        </NewProjectContainer>
    )
};

export default NewProject;
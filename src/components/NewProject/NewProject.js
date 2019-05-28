import React from 'react'

// Components
import Calender from '../Calender/Calender';

// Styled Components
import {
    NewProjectContainer
} from './NewProjectStyles';

const NewProject = () => {
    return (
        <NewProjectContainer>
            <Calender />
        </NewProjectContainer>
    )
};

export default NewProject;
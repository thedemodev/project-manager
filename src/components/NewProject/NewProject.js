import React from 'react'
import * as Icon from 'react-feather';

// Components
import Calender from '../Calender/Calender';

// Styled Components
import {
    NewProjectContainer,
    NewProjectInfo,
    NewProjectForm,
    NewProjectDate
} from './NewProjectStyles';

const NewProject = () => {
    return (
        <NewProjectContainer>
            <NewProjectInfo>
                <NewProjectForm>
                    <h1><Icon.PlusCircle size={15}/> Choose a Title</h1>
                    <input type="text"/>
                    <h2><Icon.FileText size={15}/> Provide a Description</h2>
                    <textarea type="text"/>
                    <h3><Icon.Calendar size={15}/> Select a Date By Using The Calender</h3>
                    <button>Create Project</button>
                </NewProjectForm>
            </NewProjectInfo>
            <NewProjectDate>
                <Calender />
            </NewProjectDate>
        </NewProjectContainer>
    )
};

export default NewProject;
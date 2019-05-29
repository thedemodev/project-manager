import React, { useState } from 'react'
import * as Icon from 'react-feather';
import swal from '@sweetalert/with-react';
import { useStateValue } from '../../context/provider';

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
    // context state
    const [{ user }] = useStateValue();

    // local state
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    console.log(date, title, description)

    // logic
    const submitProject = event => {
        // prevent default form behaviour
        event.preventDefault();
        // make sure the user is logged in
        if (!user.username) {
            return swal({
                text: 'Must be logged in to access this.',
                button: 'Okay'
            });
        }
        // check to make sure the form is filled out correctly
        if (title === '' || description === '' || date === '') {
            return swal({
                text: 'All fields for the new project must be filled out.',
                button: 'Okay'
            });
        }
    }

    return (
        <NewProjectContainer>
            <NewProjectInfo>
                <NewProjectForm onSubmit={submitProject}>
                    <h1><Icon.PlusCircle size={15} /> Choose a Title</h1>
                    <input type="text" onChange={event => setTitle(event.target.value)}/>
                    <h2><Icon.FileText size={15} /> Provide a Description</h2>
                    <textarea type="text" onChange={event => setDescription(event.target.value)}/>
                    <h3><Icon.Calendar size={15} /> Select a Due Date By Using The Calender</h3>
                    <button>Create Project</button>
                </NewProjectForm>
            </NewProjectInfo>
            <NewProjectDate>
                <Calender setDate={setDate} date={date}/>
            </NewProjectDate>
        </NewProjectContainer>
    )
};

export default NewProject;
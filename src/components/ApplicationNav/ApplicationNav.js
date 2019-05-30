import React from 'react'
import gravatar from 'gravatar';
import { useStateValue } from '../../context/provider';

// Styled Components
import {
    ApplicationNavContainer,
    UserContainer
} from './ApplicationNavStyles';

console.log(gravatar)

const ApplicationNav = props => {
    // context state
    const [{ user }] = useStateValue();


    return (
        <ApplicationNavContainer>
            <UserContainer>
                <img src={gravatar.url(user.email)} />
            </UserContainer>
        </ApplicationNavContainer>
    );
};

export default ApplicationNav;

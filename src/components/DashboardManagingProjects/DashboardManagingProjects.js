import React from 'react';
import * as Icon from 'react-feather';

// Styled Components
import {
    ManagingProjectsContainer,
    ProjectsHeader,
    NewProjectButton
} from './DashboardManagingProjectsStyles';

const DashboardManagingProjects = () => {
    return (
        <ManagingProjectsContainer>
            <ProjectsHeader>
                <NewProjectButton to="/dashboard/projects/newproject">
                    <Icon.Plus size={20} />
                    <h1>New Project</h1>
                </NewProjectButton>
            </ProjectsHeader>
        </ManagingProjectsContainer>
    )
};

export default DashboardManagingProjects;
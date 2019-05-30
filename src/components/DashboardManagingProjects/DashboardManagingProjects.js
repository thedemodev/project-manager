import React from 'react';
import * as Icon from 'react-feather';

// Styled Components
import {
    ManagingProjectsContainer,
    ProjectsInfo,
    DataContainer,
    NewProjectButton
} from './DashboardManagingProjectsStyles';

const DashboardManagingProjects = () => {
    return (
        <ManagingProjectsContainer>
            <ProjectsInfo>
                <DataContainer>
                    <h1>In Progress</h1>
                    <h2>2</h2>
                </DataContainer>
                <DataContainer>
                    <h1>Completed</h1>
                    <h2>21</h2>
                </DataContainer>
                <NewProjectButton to="/dashboard/projects/newproject">
                    <Icon.Plus size={20} />
                    <h1>New Project</h1>
                </NewProjectButton>
            </ProjectsInfo>
        </ManagingProjectsContainer>
    )
};

export default DashboardManagingProjects;
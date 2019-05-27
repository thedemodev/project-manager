import React from 'react'
import { useStateValue } from '../../context/provider';
import * as Icon from 'react-feather';

// Styled Components
import {
    DashboardProjectsContainer,
    DashboardProjectsHeader,
    ProjectsLink,
    NewProjectButton
} from './DashboardProjectsStyles';

const DashboardProjects = () => {
    // Context State
    const [{ user }, dispatch] = useStateValue();

    return (
        <DashboardProjectsContainer>
            <DashboardProjectsHeader>
                <h2>My Projects</h2>
                <ProjectsLink activeClassName="active" to="/dashboard/projects/managing" className="link-one">
                    <h1>Managing</h1>
                </ProjectsLink>
                <ProjectsLink activeClassName="active" to="/dashboard/projects/contributing" className="link-two">
                    <h1>Contributing</h1>
                </ProjectsLink>
            </DashboardProjectsHeader>
            {/* <NewProjectButton>
                <Icon.Plus size={20} />
                <h1>New Project</h1>
            </NewProjectButton> */}
        </DashboardProjectsContainer>
    )
};

export default DashboardProjects;
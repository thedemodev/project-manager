import React from 'react'
import { withRouter } from 'react-router-dom';
import * as Icon from 'react-feather';

// Styled Components
import {
    DashboardProjectsContainer,
    DashboardProjectsHeader,
    ProjectsLink,
    NewProjectButton
} from './DashboardProjectsStyles';

// Routes
import projectRoutes from '../../utils/dashboard_projects_routes';

const DashboardProjects = props => {
    // Route the user immediately to the projects they are managing
    const routeUser = () => {
        if (props.location.pathname === '/dashboard/projects') {
            props.history.push('/dashboard/projects/managing');
        };
    };

    routeUser();

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
                <NewProjectButton to="/dashboard/projects/newproject">
                    <Icon.Plus size={20} />
                    <h1>New Project</h1>
                </NewProjectButton>
            </DashboardProjectsHeader>
            {projectRoutes}
        </DashboardProjectsContainer>
    )
};

export default withRouter(DashboardProjects);
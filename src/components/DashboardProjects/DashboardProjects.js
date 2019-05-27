import React from 'react'
import { useStateValue } from '../../context/provider';
import { withRouter } from 'react-router-dom';


// Styled Components
import {
    DashboardProjectsContainer,
    DashboardProjectsHeader,
    ProjectsLink
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
            </DashboardProjectsHeader>
            {projectRoutes}
        </DashboardProjectsContainer>
    )
};

export default withRouter(DashboardProjects);
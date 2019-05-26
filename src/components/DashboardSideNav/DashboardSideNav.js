import React from 'react'
import * as Icon from 'react-feather';

// Styled Components
import {
    SideNavContainer,
    LogoContainer,
    LogoBadge,
    MenuContainer,
    ThemeContainer,
    Link
} from './DashboardSideNavStyles';

const DashboardSideNav = () => {
    return (
        <SideNavContainer>
            <LogoContainer>
                <LogoBadge>
                    <Icon.Codepen size={33} />
                </LogoBadge>
            </LogoContainer>
            <MenuContainer>
                <Link activeClassName="active" to="/dashboard/home">
                    <Icon.Home size={20} />
                </Link>
                <Link activeClassName="active" to="/dashboard/projects">
                    <Icon.File size={20} />
                </Link>
                <Link activeClassName="active" to="/dashboard/messages">
                    <Icon.MessageSquare size={20} />
                </Link>
                <Link activeClassName="active" to="/dashboard/users">
                    <Icon.Users size={20} />
                </Link>
                <Link activeClassName="active" to="/dashboard/settings">
                    <Icon.Settings size={20} />
                </Link>
            </MenuContainer>
            <ThemeContainer>

            </ThemeContainer>
        </SideNavContainer>
    )
};

export default DashboardSideNav;
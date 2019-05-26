import React from 'react'
import * as Icon from 'react-feather';
import { NavLink } from 'react-router-dom';

// Styled Components
import {
    SideNavContainer,
    LogoContainer,
    LogoBadge,
    MenuContainer,
    ThemeContainer
} from './DashboardSideNavStyles';

const DashboardSideNav = () => {
    return (
        <SideNavContainer>
            <LogoContainer>
                <LogoBadge>
                    <Icon.Codepen size={35} />
                </LogoBadge>
            </LogoContainer>
            <MenuContainer>
                <NavLink activeClassName="active" to="/dashboard">
                    <Icon.Home size={20} />
                </NavLink>
                <NavLink activeClassName="active" to="/dashboard/tasks">
                    <Icon.File size={20} />
                </NavLink>
                <NavLink activeClassName="active" to="/dashboard/messages">
                    <Icon.MessageSquare size={20} />
                </NavLink>
                <NavLink activeClassName="active" to="/dashboard/users">
                    <Icon.Users size={20} />
                </NavLink>
                <NavLink activeClassName="active" to="/dashboard/settings">
                    <Icon.Settings size={20} />
                </NavLink>
            </MenuContainer>
            <ThemeContainer>

            </ThemeContainer>
        </SideNavContainer>
    )
};

export default DashboardSideNav;
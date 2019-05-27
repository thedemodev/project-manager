import React, { useState } from 'react'
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
    //State
    const [mode, setMode] = useState(1);

    // Functions
    const changeTheme = () => {
        if (mode === 0) {
            setMode(1);
        } else {
            setMode(0);
        }
    };

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
                <input type="range" min="0" max="1" value={mode} onClick={changeTheme}/>
            </ThemeContainer>
        </SideNavContainer>
    )
};

export default DashboardSideNav;
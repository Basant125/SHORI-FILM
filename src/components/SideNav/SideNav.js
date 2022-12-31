import { Box, Tooltip } from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import MovieIcon from '@mui/icons-material/Movie';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TheatersIcon from '@mui/icons-material/Theaters';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import './SideNav.css'
const SideNav = () => {
    return <Box className="sidenav_desk">
        <nav className="nav">
            {/* <MovieIcon className="dash_icon" /> */}
            <NavLink to="/" style={{ textDecoration: 'none' }}>
                <span className="dash_icon">SFLIX</span>
            </NavLink>
            <Box className="nav_links">
                <NavLink to="/home"
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')} >
                    <Tooltip title="All Movies & Show" placement="left-start" arrow>
                        <DashboardIcon className="link_icon" />
                    </Tooltip>
                </NavLink>
                <NavLink to="movie"
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                    <Tooltip title="Movies" placement="left-start" arrow>
                        <TheatersIcon className="link_icon" />
                    </Tooltip>

                </NavLink>
                <NavLink to="tvshow"
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                    <Tooltip title="TV show" placement="left-start" arrow>
                        <LiveTvIcon className="link_icon" />
                    </Tooltip>

                </NavLink>
                <NavLink to="bookmark"
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                    <Tooltip title="Bookmark" placement="left-start" arrow>
                        <BookmarkIcon className="link_icon" />
                    </Tooltip>
                </NavLink>
            </Box>

            <Box>
                <Tooltip title="Profile" placement="left-start" arrow>
                    <AccountCircleIcon className="user_icon" />
                </Tooltip>
            </Box>
        </nav>
    </Box>;
};

export default SideNav;

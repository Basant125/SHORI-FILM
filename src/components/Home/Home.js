
import { Box } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import Search from "../Search/Search";
import SideNav from "../SideNav/SideNav";
import './Home.css';
const Home = () => {
    return <Box className="home">
        <SideNav />
        <Box className="home_right">
            <Search />
            <Outlet />
        </Box>
    </Box>;
};

export default Home;

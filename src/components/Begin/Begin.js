import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import feature2 from '../../assests/feature2.jpg'
import feature1 from '../../assests/feature1.png'
import './Begin.css'
import { NavLink } from "react-router-dom";
const Begin = () => {
    return <Box className="begin">
        <Box className="begin_home flex">
            <span>SHORIFLIX</span>
            <Button className="join_btn">join</Button>

            <div className="begin_home_content">
                <h1>WATCH <b style={{ color: "#F74944", textDecoration: "underline" }}>UNLIMITED</b> movies, TV<br /> show, more.</h1>
                <NavLink to="/home" style={{ textDecoration: "none" }}>
                    <Button className="show_btn">Start to watch <ArrowForwardIosIcon /> </Button>
                </NavLink>
            </div>
        </Box>

        <Box className="begin_home_feature">
            <img src={feature2} alt="feature img" />
            <p>
                <h4>Download your shows to watch offline.</h4>
                <span>Save your favourites easily and always have something to watch.</span>
            </p>
        </Box>
        <Box className="begin_home_feature feature2">
            <img src={feature1} alt="feature img" />
            <p>
                <h4>Create profiles for children.</h4>
                <span>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</span>
            </p>
        </Box>
    </Box>;
};

export default Begin;

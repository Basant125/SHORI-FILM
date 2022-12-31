import { Box } from "@mui/system";
import React from "react";
import './Footer.css'
const Footer = () => {
    return <Box sx={{
        height: '80px',
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        alignItems: 'center',
        position: "relative",
        backgroundColor: "#171D2D"
    }}>
        <h4 style={{ fontSize: "24px", color: "#F74944" }}>SHORIFLIX</h4>
    </Box>;
};

export default Footer;

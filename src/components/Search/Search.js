import React from "react";
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import { Box } from "@mui/system";
import SideNav from "../SideNav/SideNav";
const Search = () => {
    return <Box className="search">
        {/* <Box >
            <SideNav />
        </Box> */}
        <Box className="input_container">
            <SearchIcon className="search_icon" />
            <input type="text" placeholder="Search for movies & Tv series" />
        </Box>
    </Box>;
};
export default Search;

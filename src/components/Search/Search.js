import React, { useEffect, useState } from "react";
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import { Box } from "@mui/system";
import SideNav from "../SideNav/SideNav";
import { useDispatch } from "react-redux";
import { searchMovie } from "../../Redux/reducers";
const Search = () => {
    const [searchText, setSearchText] = useState('');
    const [timer, setTimer] = useState(null)
    const dispatch = useDispatch()

    const handleSearch = (e) => {
        const value = e.target.value
        if (value) {
            // DebounceSearch(value, 500)
            // setSearchText(value)
            // performSearch(value);
        }
    }

    // const performSearch = (text) => {
    //     dispatch(searchMovie({ text }))
    // }

    // const DebounceSearch = (event, debounceTimeout) => {
    //     setSearchText(event)
    //     clearTimeout(timer);

    //     const newTime = setTimeout(() => {
    //         performSearch(event);
    //     }, debounceTimeout);

    //     setTimer(newTime);
    // }

    useEffect(() => {

    }, [])

    return <Box className="search">
        <Box className="input_container">
            <SearchIcon className="search_icon" />
            <input type="text" placeholder="Search for movies & Tv series" />
        </Box>
    </Box>;
};
export default Search;

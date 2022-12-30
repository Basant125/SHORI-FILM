
import { Box } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Recommended from "../Recommended/Recommended";
import axios from '../../axios'
import { requests } from '../../api/api'
import Trending from "../Trending/Trending";
import './AllMovies.css'
import { addRecommended, addTvShow } from "../../Redux/reducers";
const AllMovies = () => {
    const shouldRun = useRef(true)
    const { recommended, show } = useSelector(state => state)
    const dispatch = useDispatch()

    const setRecommendedData = async () => {
        const response = await axios.get(requests.GET_TRENDING);
        const data = await response.data
        dispatch(addRecommended(data.results))
    }
    const setTVData = async () => {
        const response = await axios.get(requests.GET_TVSHOW);
        const data = await response.data
        dispatch(addTvShow(data.results))
    }

    useEffect(() => {
        if (shouldRun.current) {
            shouldRun.current = false;
            setRecommendedData();
            setTVData()
        }
        window.scrollTo(0, 0)
    }, [])
    return <Box className="all_movies">
        <Trending />
        <Recommended recommended={recommended} title="Recommended for you" />
        <Recommended recommended={show} title="Popular TV show" />

    </Box>;
};

export default AllMovies;

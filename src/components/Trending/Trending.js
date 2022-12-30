import { Box } from "@mui/system";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from '../../axios'
import { requests } from '../../api/api'
import './Trending.css'
import { addTrending, removeMovie } from "../../Redux/reducers";
const Trending = () => {
    const shouldRun = useRef(true)
    const { trending } = useSelector(state => state)
    const dispatch = useDispatch()

    const setTrendingData = async () => {
        const response = await axios.get(requests.GET_TRENDING);
        const data = await response.data
        dispatch(addTrending(data.results))
    }

    const getDate = (str) => {
        if (str?.length > 0) {
            const date = str.split('-')[0];
            return date
        } else {
            return ''
        }
    }

    useEffect(() => {
        if (shouldRun.current) {
            shouldRun.current = false;
            setTrendingData()
        }
    }, [])
    return <>
        <h2 style={{ color: "#fff", paddingLeft: "10px" }}>Trending</h2>
        <Box className="trending_movies">
            {/* backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path}) */}
            {
                trending?.map((movie, index) => (<Box key={index} className="trending_movie" sx={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`, backgroundPosition: "center", backgroundSize: 'cover', backgroundRepeat: "no-repeat" }}>
                    <Box className="movie_info">
                        <h4>{movie.title || movie.original_name}</h4>
                        <span>{getDate(movie.release_date || movie.first_air_date)}</span>
                        <span>{movie.media_type}</span>
                    </Box>
                </Box>))
            }
        </Box></>;
};

export default Trending;

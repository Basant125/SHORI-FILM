import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useRef } from "react";
import TheatersIcon from '@mui/icons-material/Theaters';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import './Recommended.css'
const Recommended = ({ recommended, title }) => {

    const getDate = (str) => {
        if (str?.length > 0) {
            const date = str.split('-')[0];
            return date
        } else {
            return ''
        }
    }

    const handleBookmark = (id) => {

    }
    return <>
        <h2 style={{ color: "#fff", paddingLeft: "10px" }}>{title}</h2>
        <Box className="recommended_movies">
            {
                recommended?.map((movie, index) => (<Card key={index} sx={{ backgroundColor: "#0F141E", boxShadow: "none" }} className="card">
                    <BookmarkIcon className="bookmark_icon" onClick={handleBookmark} />
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                            alt="green iguana"
                            className="card_media"
                            sx={{ borderRadius: '6px' }}
                        />
                        <CardContent sx={{ height: '30', color: "#fff" }} className="card_content">
                            <div style={{ display: 'flex', alignItems: "center" }}>
                                <span>{getDate(movie.release_date || movie.first_air_date)}</span>
                                {movie.media_type === 'tv' ? <span className="type_show"><LiveTvIcon /> </span> : <span className="type_show"><TheatersIcon /></span>}
                                {movie.media_type === 'tv' ? <span className="type_show">Tv series</span> : <span className="type_show">{movie.media_type}</span>}
                            </div>
                            <h4>{movie.title || movie.original_name} </h4>
                        </CardContent>
                    </CardActionArea>
                </Card>))
            }
        </Box></>;
};

export default Recommended;

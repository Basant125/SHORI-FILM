import React from "react";
import './BookMark.css'
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
const BookMark = () => {
    return <div className="bookmark_box">
        <HourglassEmptyIcon className="empty_icon" />
        <h4 className="empty_icon bookmark_text">No Bookmarked yet!</h4>
    </div>;
};

export default BookMark;

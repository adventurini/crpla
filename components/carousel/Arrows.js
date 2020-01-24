import React from "react";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import './Arrows.scss'

export const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className="slick-arrow-container">
            <MdChevronRight 
                className={className}
                onClick={onClick}
                style={{ ...style, display: "flex"}}
            />
        </div>
    );
}

export const PreviousArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className="slick-arrow-container">
            <MdChevronLeft 
                className={className}
                onClick={onClick}
                style={{ ...style, display: "flex"}}
            />
        </div>
    );
}

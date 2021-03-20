import React, { Component } from "react";
import {FiArrowLeftCircle} from 'react-icons/fi'
import './menuButtonLeft.styles.scss';

const MenuButtonRight = ({ handleMouseDown }) => {

    return (
        <FiArrowLeftCircle id="arrowButtonLeft" onMouseDown={handleMouseDown}></FiArrowLeftCircle>
    );
}

export default MenuButtonRight;
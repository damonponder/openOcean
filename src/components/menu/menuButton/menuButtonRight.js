import React, { Component } from "react";
import {FiArrowRightCircle} from 'react-icons/fi'
import './menuButtonRight.styles.scss';

const MenuButtonRight = ({ handleMouseDown }) => {

        return (
            <FiArrowRightCircle id="arrowButtonRight" onMouseDown={handleMouseDown}></FiArrowRightCircle>
        );
    }

export default MenuButtonRight;
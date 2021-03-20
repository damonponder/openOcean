import React, { Component } from "react";
import {AiOutlineEye} from 'react-icons/ai'
import "./menuRight.style.scss";

class MenuRight extends Component {
    render() {
        let visibility = "hide";

        if (this.props.menuVisibility) {
            visibility = "show";
        }

        return (
            <div id="flyoutMenuRight"
                 onMouseDown={this.props.handleMouseDown}
                 className={visibility}>
                <h2><a href="#">Title</a></h2>
                <h2><a href="#"><AiOutlineEye id='menu-eye'/>Visualize</a></h2>
                <h2><a href="#">Summary</a></h2>
                <h2><a href="#">Reports</a></h2>
                <h2><a href="#">Links</a></h2>
                <h2><a href="#">Recent Terms</a></h2>
                <h2><a href="#">Trending Terms</a></h2>
                <h2><a href="#">Model-Type</a></h2>
                <h2><a href="#">Configure</a></h2>
            </div>
        );
    }
}

export default MenuRight;

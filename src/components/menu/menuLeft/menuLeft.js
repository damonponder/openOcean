import React, { Component } from "react";
import "./menuLeft.styles.scss";

export default class MenuLeft extends Component {
    render() {
        let visibility = "hide";

        if (this.props.menuVisibility) {
            visibility = "show";
        }

        return (
            <div id="flyoutMenuLeft"
                 onMouseDown={this.props.handleMouseDown}
                 className={visibility}>
                <h2><a href="#">Recent Search Terms</a></h2>
                <h2><a href="#">Trending Search Terms</a></h2>
            </div>
        );
    }
}


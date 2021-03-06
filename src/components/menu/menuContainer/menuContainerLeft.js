import React from "react";
import MenuLeft from "../menuLeft/menuLeft";
import MenuButtonLeft from "../menuButton/menuButtonLeft";


export default class MenuContainerLeft extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            visible: false
        };

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    handleMouseDown(e) {
        this.toggleMenu();

        console.log("clicked");
        e.stopPropagation();
    }

    toggleMenu() {
        this.setState(
            {
                visible: !this.state.visible
            }
        );
    }

    render() {
        return (
            <>
                <MenuButtonLeft handleMouseDown={this.handleMouseDown}/>,
                <MenuLeft handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible}/>
            </>
        );
    }
}
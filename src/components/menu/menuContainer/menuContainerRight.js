import React from "react";
import MenuRight from "../menuRight/menuRight";
import MenuButtonRight from "../menuButton/menuButtonRight";


export default class MenuContainerRight extends React.Component {
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
                <MenuButtonRight handleMouseDown={this.handleMouseDown}/>,
                <MenuRight handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible}/>
            </>
        );
    }
}

import React, { Component } from 'react';
import {
    Menu, Sticky
} from "semantic-ui-react";

class Navbar extends Component {
    render() {
        return (
            <div>
                <Sticky>
                    <Menu inverted style={{ margin: 0 }}>
                        <Menu.Item>The Big Deal:3D - PIU Card Draw</Menu.Item>
                        <Menu.Item position='right'>Github</Menu.Item>
                        <Menu.Item>PumpOut</Menu.Item>
                    </Menu>
                </Sticky>
            </div>
        );
    }
}

export default Navbar;

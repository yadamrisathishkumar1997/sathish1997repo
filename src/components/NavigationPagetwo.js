import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';


class NavigationPageTwo extends React.Component{
    render(){
        return(
            <Nav>
                <a1>
                <NavLink className="link1"
                to="/">Home</NavLink>
                </a1>
                <a2>
                <NavLink className="link2"
                to="/pagethree">PageThree</NavLink>
                </a2>
            </Nav>
        )
    }
}

export default NavigationPageTwo;
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';


class NavigationPageThree extends React.Component{
    render(){
        return(
            <Nav>
                <a1>
                <NavLink className="link1"
                to="/pagetwo">Pagetwo</NavLink>
                </a1>
                <a2>
                <NavLink className="link2"
                to="/pagefour">Pagefour</NavLink>
                </a2>
            </Nav>
        )
    }
}

export default NavigationPageThree;
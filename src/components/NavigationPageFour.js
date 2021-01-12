import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';


class NavigationPageFour extends React.Component{
    render(){
        return(
            <Nav>
                <a1>
                <NavLink className="link1"
                to="/pagethree">Pagethree</NavLink>
                </a1>
                
            </Nav>
        )
    }
}

export default NavigationPageFour;
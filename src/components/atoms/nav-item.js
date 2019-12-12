import React from 'react';

function NavItem(props){
    return(
        <li>
            <a className="nav-item subtext subtext--white" href={props.href}> {props.name}</a>
        </li>
    )
}

export default NavItem
import React from 'react';

function NavItem(props){
    return(
        <li key={props.id}>
            <a className="nav-item subtext subtext--white" href={props.href}> {props.name}</a>
        </li>
    )
}

export default NavItem
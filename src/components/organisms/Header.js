import React from 'react';
import headerLogo from '../../images/header-logo.png';
import NavItem from '../atoms/nav-item';
import {navigationLeft} from '../molecules/navigation';
import Search from '../molecules/search';
import Button from '../atoms/btn';
import Profile from '../molecules/profile';
import clientimg from '../../images/profile/client-img.png';
import arrowIcon from '../../images/arrow.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Header(){
    const navLeft = navigationLeft.map(item => <NavItem key={item.id} href={item.href} name={item.name} />)

    return(
        <header className="header">
            <img className="logo" src={headerLogo} alt=""></img>
            <nav className="navigation navigation--header">
                <ul>
                    {navLeft}
                </ul>
            </nav>
            <Search />
            <Profile clientImg={clientimg} coins='354' arrow={arrowIcon}/>
            <Button class='btn btn--add' title='Add a Paper'/>
        </header>
    )

}

export default Header;
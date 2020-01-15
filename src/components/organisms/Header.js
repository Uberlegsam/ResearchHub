import React from 'react';
import headerLogo from '../../images/header-logo.png';
import NavItem from '../atoms/NavItem';
import {NavigationLeft} from '../molecules/Navigation';
import Search from '../molecules/Search';
import Button from '../atoms/Button';
import Profile from '../molecules/Profile';
import clientimg from '../../images/profile/client-img.png';
import arrowIcon from '../../images/arrow.svg';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'

function Header(){
    const navLeft = NavigationLeft.map(item => <NavItem key={item.id} href={item.href} name={item.name} />)

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
            <Link to="/step/1"><Button class='btn btn--add' title='Add a Paper'/></Link>
        </header>
    )

}

export default Header;
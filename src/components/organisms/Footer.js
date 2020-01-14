import React from 'react';
import footerLogo from '../../images/footer-logo.svg';
import NavItem from '../atoms/nav-item';
import SocialItem from '../atoms/social-item';
import {navigationLeft, navigationRight} from '../molecules/navigation';
import SocialLinks from '../molecules/sociallinks';

function Footer(){
    const navLeft = navigationLeft.map(item => <NavItem key={item.id} href={item.href} name={item.name} />)
    const navRight = navigationRight.map(item => <NavItem key={item.id} href={item.href} name={item.name} />)
    const socialLink = SocialLinks.map(item => <SocialItem key={item.id} href={item.href} src={item.src} />)

    return(
        <footer className="footer">
            <img className="logo" src={footerLogo} alt="logo"></img>
            <nav className="navigation">
                <ul>
                    {navLeft}
                </ul>
            </nav>
            <nav className="navigation">
                <ul>
                    {navRight}
                </ul>
            </nav>       
            <nav className="navigation">
                {socialLink}
            </nav>
            <p className="subtext subtext--white">© ResearchHub 2019. All rights reserved</p>
        </footer>
    )
}

export default Footer
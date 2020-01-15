import React from 'react';
import coinIcon from '../../images/profile/coin.png';


function Profile(props){

    return(
        <div className="profile">
            <img className="profile-logo" src={props.clientImg} alt=""></img>
            <img className="arrow" src={props.arrow}></img>
            <p className="profile-coin">{props.coins}</p>
            <img className="coin-icon" src={coinIcon}></img>
        </div>
        )
    }
    
export default Profile
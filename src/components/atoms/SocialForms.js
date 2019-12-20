import React from 'react';

export default function SocialForm(props){

    return(
        <div className="social-form">
            <img src={props.img}></img> 
            <input className="input-information" placeholder={props.placeholder}></input>
        </div>
    )
}
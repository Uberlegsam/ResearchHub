import React from 'react';

function SocialItem(props){
    return(
        <a key={props.id} className="social-item" href={props.href}>
            <img src={props.src}></img>
        </a>
    )
}

export default SocialItem
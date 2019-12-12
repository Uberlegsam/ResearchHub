import React from 'react';


function Button(props){
    return(
        <a className={props.class} href="">{props.title}</a>
    )
}

export default Button
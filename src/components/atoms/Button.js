import React from 'react';


function Button(props){
    return(
        <input type="submit" className={props.class} value={props.title}/>
    )
}

export default Button
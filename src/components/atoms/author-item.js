import React from 'react';

function SingleAuthor(props){

    return(
        <div>
        <p>{props.value}</p>
        <p>{props.name}</p>
        <p>{props.mail}</p>
        </div>  
        
    )
}

export default SingleAuthor
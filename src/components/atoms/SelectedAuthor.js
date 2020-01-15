import React from 'react';
import trash from '../../images/delete.svg'


function SelectedAuthor(props){
    return(
        <div className="single-author">
            <img src={props.img}></img>
            <label htmlFor={props.id}>
                {props.name}
                <p>{props.mail}</p>
            </label>
            <img className="author-trash" src={trash} onClick={props.function}></img>
        </div>  
    )
}

export default SelectedAuthor
import React from 'react';

function Radiobutton(props){

    return(
        <div className="checkbox-item">
            <input name="checkboxcheck" type="radio" id={props.id} defaultChecked={props.checked}/>
            <label htmlFor={props.id}>{props.label}</label> 
        </div>  
        
    )
}

export default Radiobutton
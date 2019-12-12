import React from 'react';

function Radiobutton(props){

    return(
        <div className="checkbox-item">
            <input type="checkbox" id="Checkbox"/>
            <label for="checkbox">{props.label}</label>
        </div> 
    )
}

export default Radiobutton
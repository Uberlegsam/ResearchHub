import React from 'react';

function TimeItems(props){
    return(
        <div className="time-item">
            <h3 className="information-title ">{props.label}</h3>
            <input type="text" placeholder={props.placeholder} className="input-information"></input>
        </div>
    )
}

export default TimeItems
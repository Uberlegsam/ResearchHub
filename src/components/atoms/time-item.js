import React from 'react';

function TimeItems(props){

    return(
        <div key={props.id} className="time-item">
            <h3 className="information-title ">{props.label}</h3>
            <input onKeyUp={(e)=> e.target.value = e.target.value.replace (/[^0-9+]/, '')}
                    type="text" 
                    maxLength={props.maxlength} 
                    placeholder={props.placeholder} 
                    className="input-information input-information--date" 
                    id={props.id}
                    ></input>
        </div>
    )
}

export default TimeItems

import React from 'react';

export default function PopupInput(props){

    return(
    <div className="popup-form dropzone-title">
        <label className="popup-form-label" for={props.id}>{props.label}</label>
        <input className="input-information" id={props.id} placeholder={props.placeholder} required></input>
    </div>
    )
}


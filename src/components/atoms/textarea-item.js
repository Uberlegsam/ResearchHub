import React from 'react';

export default function TextArea(props){

    return(
    <div className="textarea">
        <label className="textarea-label" for={props.id}>{props.label}</label>
        <textarea className="textarea-input" id={props.id} placeholder={props.placeholder} required></textarea>
    </div>
    )
}

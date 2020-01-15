import React from 'react';

export default function SummaryTextArea(props){

    return(
        <div key={props.id} className="textarea">
            <label className="textarea-label" htmlFor={props.id}>{props.label}</label>
            <textarea className="textarea-input" id={props.id} placeholder={props.placeholder} required></textarea>
        </div>
    )
}

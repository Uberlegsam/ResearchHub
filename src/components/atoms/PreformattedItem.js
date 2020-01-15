import React from 'react';

export default function PreformattedItem(props){

    return(
    <div className="preformatteditem" id={props.id}>
        {props.label}
    </div>
    )
}

import React, { useState } from "react";
import { createPortal } from "react-dom";
import PopUp from "../PopUp";

import Button from "../atoms/btn";


export const MenuList = props => {
    const {children} = props;
    let [seen, setSeen] = useState(false);
    function togglePop (){
           document.body.style.overflow = 'hidden';
    }
    return (<>
        {children}
        <div>
            <div className="select-button" onClick={() => setSeen(seen = !seen)}>
                <p>Not listed above?</p>
                <div onClick={togglePop}><Button class='btn btn--transparent btn--border' title='Add User' /></div>
            </div>
            {seen && createPortal(<PopUp toggle={() => setSeen(seen = !seen)} />, document.body)}
        </div>
    </>)
}
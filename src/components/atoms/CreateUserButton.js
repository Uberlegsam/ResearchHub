import React, { useState } from "react";
import { createPortal } from "react-dom";
import PopUp from "../molecules/PopUp";

function CreateUserButton(){
    let [seen, setSeen] = useState(false);
    function togglePop (){
        document.body.style.overflow = 'hidden';
 }

    return(
        <div className="author-card" onClick={() => setSeen(seen = !seen)}>
            <div className="author-create" onClick={togglePop}></div>
            <div class="author-desc">
                <p className="desc-title">Add New User</p>
                <p className="desc-subtitle">Click to add new user on Research Hub</p>
            </div>
            {seen && createPortal(<PopUp toggle={() => setSeen(seen = !seen)} />,document.body)}
        </div>

    )

}

export default CreateUserButton
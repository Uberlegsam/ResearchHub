import React from 'react';

function CheckboxAuthor(){

    return(
        <div className="checkbox-author ">
            <input type="checkbox" id="IsAuthor"/>
            <label htmlFor="IsAuthor">I am an author of this paper</label>
        </div>
    )
}

export default CheckboxAuthor
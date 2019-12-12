import React from 'react';
import Button from '../atoms/btn';
import Checkbox from '../molecules/checkbox';
import Radiobutton from '../atoms/checkbox-item'

function Main(){
    const checkboxItem = Checkbox.map(item => <Radiobutton  label={item.label} />)

    return(
        <main className="main">
                <h1 className="title">Paper Upload</h1>
                <p className="subtitle">Step 1: Main Information</p>
            <div className="main-content"> 
                <div class="checkbox">Type
                    {checkboxItem}
                </div>
            </div>   
            <div className="buttons">
                <Button class='btn btn--transparent' title='Cancel '/>
                <Button class='btn btn--step' title='Next Step'/>
            </div>
        </main>
    )
}

export default Main
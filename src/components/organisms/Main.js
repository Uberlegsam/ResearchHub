import React from 'react';
import Button from '../atoms/btn';
import Checkbox from '../molecules/checkbox';
import Radiobutton from '../atoms/checkbox-item';
import Hubs from '../molecules/hubs';
import Hubsitems from '../atoms/option-item';





function Main(){
    const checkboxItem = Checkbox.map(item => <Radiobutton id={item.id} label={item.label}/>);
    const hubsitem = Hubs.map(item => <Hubsitems name={item.name} />);


    return(
        <main className="main">
                <h1 className="title">Paper Upload</h1>
                <p className="subtitle">Step 1: Main Information</p>
            <div className="main-content">
                <div className="information-item">Type
                    <form class="checkbox">
                        {checkboxItem}
                    </form>
                </div>
                <div className="information-item information-item--hubs">Hubs
                    <select className="hubsitems" >
                        {hubsitem}
                    </select>
                </div>
            </div>   
            <form className="buttons">
                <Button class='btn btn--transparent' title='Cancel '/>
                <Button class='btn btn--step'  title='Next Step'/>
            </form>
        </main>
    )
}

export default Main
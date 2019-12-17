import React from 'react';
import Button from '../atoms/btn';
import Checkbox from '../molecules/checkbox';
import Radiobutton from '../atoms/checkbox-item';
import Hubs from '../molecules/hubs';
import Hubsitems from '../atoms/option-item';
import DatePublication from '../molecules/publication-time';
import Checkboxauthor from '../molecules/checkboxauthor';
import TimeItems from '../atoms/time-item';






function Main(){
    const checkboxItem = Checkbox.map(item => <Radiobutton id={item.id} label={item.label}/>);
    const hubsitem = Hubs.map(item => <Hubsitems name={item.name} />);
    const timeitem = DatePublication.map(item => <TimeItems label={item.label} placeholder={item.placeholder}/>) 


    return(
        <main className="main">
                <h1 className="title">Paper Upload</h1>
                <p className="subtitle">Step 1: Main Information</p>
            <div className="main-content">
                <h2 className="main-title">Academic Paper<span>Up to 15 MB (.pdf)</span></h2>
                <div className="information-item information-item--hubs">
                    <h3 className="information-title">Paper PDF<span>*</span></h3>
                    </div>
                <h2 className="main-title">Main information</h2>
                <div className="information-item information-item--hubs">
                    <h3 className="information-title">Paper<span>*</span></h3>
                    <input type="text" className="input-information hubsitems"/>
                </div>
                <div className="information-item information-item--hubs">
                    <h3 className="information-title">Authors<span>*</span></h3>
                    <select className="hubsitems input-information">
                        <option value="" disabled selected>Search for author</option>
                        {hubsitem}
                    </select>
                        <Checkboxauthor />
                </div>
                <div className="information-item information-item--date">
                    {timeitem}
                </div>
                <div className="information-item">
                    <h3 className="information-title">Type</h3>
                    <form class="checkbox">
                        {checkboxItem}
                    </form>
                </div>
                <div className="information-item information-item--hubs">
                    <h3 className="information-title" >Hubs<span>*</span></h3>
                    <select className="hubsitems input-information">
                        <option value="" disabled selected>Select up to 3 hubs</option>
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
import React from 'react';
import Papertype from '../molecules/PaperType';
import Radiobutton from '../atoms/RadioButton';
import Hubs from '../molecules/Hubs';
import PublicationTime from '../molecules/PublicationTime';
import CheckboxAuthor from '../molecules/CheckboxAuthor';
import Dropzone from '../molecules/DropZone';
import PublicationItem from '../atoms/PublicationItem';
import Select from 'react-select';
import SelectAuthor from '../molecules/SelectAuthor'

function Step1(){
    const PaperItem = Papertype.map(item => <Radiobutton key={item.id} 
                                                            id={item.id} 
                                                            label={item.label} 
                                                            checked={item.checked}/>);

    const TimeItem = PublicationTime.map(item => <PublicationItem key={item.id} 
                                                            label={item.label} 
                                                            placeholder={item.placeholder} 
                                                            id={item.id}
                                                            maxlength={item.maxlength}
                                                            />); 


    return(
        <div>
            <h1 className="title">Paper Upload</h1>
            <p className="subtitle">Step 1: Main Information</p>
            <div className="main-content">
                <div className="greenline"></div>
                <h2 className="main-title">Academic Paper<span>Up to 15 MB (.pdf)</span></h2>
                <div className="information-item information-item--hubs">
                    <h3 className="dropzone-title">Paper PDF<span>*</span></h3>
                    <Dropzone />
                </div>
                <h2 className="main-title">Main information</h2>
                <div className="information-item information-item--hubs">
                    <h3 className="information-title">Paper<span>*</span></h3>
                    <input type="text" className="input-information hubsitems" id="book-title" />
                </div>
                <div className="information-item information-item--hubs">
                    <h3 className="information-title">Authors<span>*</span></h3>
                    <SelectAuthor />
                    <CheckboxAuthor />
                </div>
                <div className="information-item information-item--date">
                    {TimeItem}
                </div>
                <div className="information-item">
                    <h3 className="information-title">Type</h3>
                    <form className="checkbox">
                        {PaperItem}
                    </form>
                </div>
                <div className="information-item information-item--hubs">
                    <h3 className="information-title" >Hubs<span>*</span></h3>
                    <Select className="input-information" isClearable isMulti isSearchable placeholder="Select up to 3 hubs" options={Hubs} />
                </div>
            </div>
        </div>
    )
}

export default Step1
import React from 'react';
import Button from '../atoms/btn';
import textareas from '../molecules/textareas';
import TextArea from '../atoms/textarea-item';
import preformatted from '../molecules/preformatted';
import PreformattedItem from '../atoms/preformatted-item';

function Step2(){

    const textarea = textareas.map(item => <TextArea key={item.id} id={item.id} label={item.label} placeholder={item.placeholder}/>)
    const preformatteditem = preformatted.map(item => <PreformattedItem key={item.id} id={item.id} label={item.label} />) 

    const greenlinestep2={
        width: '66.772%',
    }

    return(
        <div>
                <h1 className="title">Paper Upload</h1>
                <p className="subtitle">Step 2: Add a summary that concisely highlights the main aspects of the paper</p>
            <div className="main-content">
            <div className="greenline" style={greenlinestep2}></div>
            <h2 className="main-title">Summary<a href="">Summary Guidelines</a></h2>
            <div className="description">
                {textarea}
            </div>
            <div className="preformatted">
                {preformatteditem}
            </div>
            </div>
        </div>
    )

}

export default Step2
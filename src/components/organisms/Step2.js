import React from 'react';
import Button from '../atoms/btn';
import textareas from '../molecules/textareas';
import TextArea from '../atoms/textarea-item';
import preformatted from '../molecules/preformatted';
import PreformattedItem from '../atoms/preformatted-item';
import arrow from '../../images/arrowleft.svg'

function Step2(){

    const textarea = textareas.map(item => <TextArea id={item.id} label={item.label} placeholder={item.placeholder}/>)
    const preformatteditem = preformatted.map(item => <PreformattedItem id={item.id} label={item.label} />) 

    const greenlinestep2={
        width: '66.772%',
    }

    return(
        <main className="main">
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
            <form className="buttons buttons--step2">
                <a href="#"><img src={arrow}></img>Back to previous step</a>
                <Button class='btn btn--step btn--step_transparent' title='Skip for now'/>
                <Button class='btn btn--step'  title='Save'/>
            </form>
        </main>
    )

}

export default Step2
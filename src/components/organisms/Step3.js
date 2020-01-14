import React from 'react';
import Button from '../atoms/btn';
import arrow from '../../images/arrowleft.svg';
import textareas from '../molecules/textareas';

function Step3(){

    const greenlinestep3={
        width: '100%',
        borderRadius: '4px 4px 0px 0px'
    }

    return(
        <div>
                <h1 className="title">Paper Upload</h1>
                <p className="subtitle">Step 3: Start a discussion on the paper</p>
            <div className="main-content">
            <div className="greenline" style={greenlinestep3}></div>
            <h2 className="main-title">Discussion</h2>
            <div className="discussion-content">
                <label htmlFor="discussion-title" className="information-title">Title</label>
                <input className="input-information" id="discussion-title" type="text" placeholder="Title of discussion"></input>
                
                <label htmlFor="discussion-text" className="information-title">Question</label>
                <textarea id="discussion-text" placeholder="Leave a question or a comment" className="textarea-input"></textarea>
            </div>    
            </div>
        </div>
    )

}

export default Step3
import React, {Component} from "react";


export default function Buttons1(props){
    return(
        <div className="buttons">
            <input type="submit" className={props.class1} value={props.title1} onClick={props.click1}/>
            <input type="submit" className={props.class2} value={props.title2} onClick={props.click2}/>
        </div>
    )
}




import React, {Component} from "react";
import {Link} from 'react-router-dom'


export default function Buttons1(props){
    return(
        <div className="buttons">
            <Link to=''>
                <input type="submit" className={props.class1} value={props.title1} onClick={props.click1}/>
            </Link>
            <Link to={props.nextlink}>
                <input type="submit" className={props.class2} value={props.title2} onClick={props.click2}/>
            </Link>
        </div>
    )
}


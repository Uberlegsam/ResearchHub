import React from "react";
import arrow from '../../images/arrowleft.svg';
import {Link} from 'react-router-dom'

export default function Buttons2(props){
    return(
        <div className="buttons buttons--step2">
            <Link to={props.prevlink} onClick={props.click3}>
                <img src={arrow}></img>{props.title3}
            </Link>
            <Link to={props.nextlink}>
                <input type="submit" className={props.class1} value={props.title1} onClick={props.click1}/>
            </Link>
            <Link to={props.nextlink}>
                <input type="submit" className={props.class2} value={props.title2} onClick={props.click2}/>
            </Link>
        </div>
  )
}
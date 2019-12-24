import React from "react";
import arrow from '../../images/arrowleft.svg'

export default function Buttons2(props){
    return(
        <div className="buttons buttons--step2">
            <a href="#" onClick={props.click3}><img src={arrow}></img>{props.title3}</a>
            <input type="submit" className={props.class1} value={props.title1} onClick={props.click1}/>
            <input type="submit" className={props.class2} value={props.title2} onClick={props.click2}/>
        </div>
  )
}
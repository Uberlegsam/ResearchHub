import React, { Component } from "react";
// import './index.scss'
import Cross from "../../images/cross.svg";
import {Forms, SocialForms} from "../molecules/PopupForm";

import Button from '../atoms/btn';
import SingleForm from '../atoms/SingleForm';
import SocialForm from '../atoms/SocialForms';

const form = Forms.map(item => <SingleForm label={item.label} placeholder={item.placeholder} required={item.required} id={item.id}/>);
const socialform = SocialForms.map(item => <SocialForm placeholder={item.placeholder} img={item.src}/>);

export default class PopUp extends Component {
  
  handleClick = () => {
    this.props.toggle();
    document.body.style.overflowY = 'scroll';
  };

  render() {
    return (
      <div className="popup">
        <div className="popup-content">
          <img src={Cross} className="close" onClick={this.handleClick}></img>
          <form>
            <h3 className="popup-title">Add New Author</h3>
            <p className="popup-subtitle">Please enter the information about the user below</p>
            {form}
            <div className="popup-form dropzone-title">
              <label className="popup-form-label">Social Media Links</label>
              {socialform}
            </div>
            <Button class='btn btn--popup' title='Add User '/>
          </form>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import Cross from "../../images/cross.svg";
import {DataInput, SocMediaInput} from "./PopupForm";
import Button from '../atoms/Button';
import PopupInput from '../atoms/PopupInput';
import SocialInput from '../atoms/SocialInput';

const form = DataInput.map(item => <PopupInput label={item.label} placeholder={item.placeholder} required={item.required} id={item.id}/>);
const socialform = SocMediaInput.map(item => <SocialInput placeholder={item.placeholder} img={item.src}/>);

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

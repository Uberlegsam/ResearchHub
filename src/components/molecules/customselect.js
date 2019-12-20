import React, { Component } from "react";
import Select, { components } from "react-select";
import createClass from "create-react-class";
import Button from "../atoms/btn";
// import Select from 'react-select';
import {colourOptions} from "./data";
import SingleAuthor from "../atoms/author-item";
import PopUp from "../PopUp";


const Option = createClass({
  render() {
    return (
      <div>
        <components.Option {...this.props}>
            <label><img src={this.props.data.img}></img>{this.props.data.value}<p>{this.props.data.mail}</p> </label>
            <input
                type="checkbox"
                checked={this.props.isSelected}
            />
        </components.Option>
      </div>
    );
  }
});

export default class extends Component {
    constructor() {
        super();

        this.state = {
          authors: []
        };

        this.addedAuthor = this.addedAuthor.bind(this);
      }

    addedAuthor(e){
        this.setState({
            authors: e.map(item => <SingleAuthor value={item.value} name={item.label} mail={item.mail}
                />)
          
        }); 
    }

    state = {
      seen: false
    };
  
    togglePop = () => {
      document.body.style.overflow = 'hidden';
      
      this.setState({
        seen: !this.state.seen
      });

      
    };

  render() {
    return (
        <div>
            <Select
                className="input-information"
                closeMenuOnSelect={false}
                isMulti
                placeholder="Search for author"
                components={{Option}}
                options={colourOptions}
                backspaceRemovesValue={true}
                hideSelectedOptions={false}
                onChange={e => {this.addedAuthor(e)}}
                
            />
              <div >
                <div onClick={this.togglePop}>{<Button class='btn btn--transparent btn--border' title='Add User ' />} 
                </div>
                {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
              </div>
            
            {this.state.authors}
        </div>
    );
  }
}

const MultiValue = props => {
  return (
    <components.MultiValue {...props}>
      <span>{props.data.label}</span>
        <p>{props.data.mail}</p>
    </components.MultiValue>
  );
};

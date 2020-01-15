import React, { Component } from "react";
import Select, { components } from "react-select";
import createClass from "create-react-class";
import {Authors} from "./Authors";
import SelectedAuthor from "../atoms/SelectedAuthor";
import {MenuList} from "./MenuList";
import CreateUserButton from "../atoms/CreateUserButton"


const Option = createClass({
  render() {
    return (
        <components.Option {...this.props}>
          <div className="select-author">
              <img src={this.props.data.img}></img>
              <div>
                  {this.props.data.value}
                  <p>{this.props.data.mail}</p>
              </div>
              <div className="author-checkbox">
                <input  type="checkbox" checked={this.props.isSelected} id={this.props.id}/>
                <label htmlFor={this.props.id}></label>
              </div>
          </div>
        </components.Option>
    );
  }
});

export default class extends Component {
    constructor() {
        super();

        this.state = {
          authors: [],
          selectRef: "",
          seen: false
        };
        
        this.addedAuthor = this.addedAuthor.bind(this);
      }

    addedAuthor(e){
      if(e){
        this.setState({
            authors: e.map(item => <SelectedAuthor key={item.id} img={item.img} value={item.value} name={item.label} mail={item.mail} function={() => this.delAuthor(e, item)}/>),
            otrisovka: true
        }); 
      }
      else{
        this.state = {
          authors: [],
          otrisovka: false
        };
      }
    }

    state = {
      seen: false
    };

    delAuthor(e, item){
      e.splice(e.indexOf(item), 1)
      this.state.selectRef.onChange(e, "deselect-option")
        
    };

  
    // togglePop = () => {
    //   document.body.style.overflow = 'hidden';
      
    //   this.setState({
    //     seen: !this.state.seen
    //   });

      
    // };

  render() {
      let btn = null;
      if(this.state.authors.length > 0){
        btn = <CreateUserButton />;
      }
      else{
        btn = null;
      }

    return (
        <div>
            <Select
                theme={theme => ({
                  ...theme,
                  colors: {
                    ...theme.colors,
                    primary25: "#deebff",
                    primary: "transparent"
                  }
                })}
                ref = {ref => this.state.selectRef = ref}
                classNamePrefix="selected-author"
                className="input-information"
                closeMenuOnSelect={false}
                isMulti
                placeholder="Search for author"
                components={{ Option, MenuList}}
                options={Authors}
                backspaceRemovesValue={true}
                hideSelectedOptions={false}
                onChange={e => {this.addedAuthor(e)}}
            />
              {/* <div >
                <div onClick={this.togglePop}>
                  {<Button class='btn btn--transparent btn--border' title='Add User ' />} 
                </div>
                {this.state.seen ? 
                <PopUp toggle={this.togglePop} /> 
                : null}
              </div> */}
            {this.state.authors}
            {btn}
        </div>
    );
  }
}



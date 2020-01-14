import React, {Component} from 'react';

import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

import Buttons1  from '../molecules/buttonsBlock1';
import Buttons2  from '../molecules/buttonsBlock2';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {step: 1};
        this.prevStep = this.prevStep.bind(this);
        this.stepSave = this.stepSave.bind(this);
        this.stepSkip = this.stepSkip.bind(this);
        this.cancel = this.cancel.bind(this);
        this.data =  {
            path: '', 
            title : '', 
            publication: { 
                    year: '',
                    month: '',
                    day: ''},
            author: '',
            hubs: '',
            type : '',
            summary: '',
            results: '',
            significance: '',
            discussion: '',
            question: ''
        };

    }
 
    prevStep(){
        this.setState({step: this.state.step - 1});
    }

    firstStepData(){
        const pdfpath = document.getElementById('pdf-path').value;
        const pdfurl = document.getElementById('pdf-url').value;

        const title = document.getElementById('book-title').value;
        const year = document.getElementById('year').value;
        const month = document.getElementById('month').value;
        const day = document.getElementById('day').value;
        const isAuthor = document.getElementById('IsAuthor').checked;
        const arr = [];
        const hubs = document.querySelectorAll('.css-12jo7m5');
        hubs.forEach(el=> arr.push(el.innerHTML));
        const check = document.querySelector('input[type="radio"]:checked + label').innerHTML;

        if (!pdfpath){
            this.data.path = pdfurl
        }
        else{
            this.data.path = pdfpath
        };

        this.data.title = title;
        this.data.publication.year = year;
        this.data.publication.month = month;
        this.data.publication.day = day;
        this.data.author = isAuthor;
        this.data.hubs = arr;
        this.data.type = check;
    }

    secondStepData(){
        const solve = document.getElementById('ta1').value;
        const concl = document.getElementById('ta2').value;
        const under = document.getElementById('ta3').value;
        this.data.summary = solve;
        this.data.results = concl;
        this.data.significance = under;
    }

    thirdStepData(){
        const distitle = document.getElementById('discussion-title').value;
        const distext = document.getElementById('discussion-text').value;
        this.data.discussion = distitle;
        this.data.question = distext;
    }

    stepSave() {
        this.state.step > 2 ?  
        this.setState({step: 1})
        : this.setState({step: this.state.step + 1});
        const url = window.location.href;
        const regex = /\w+\/(\d)/;
        const found = url.match(regex);

        if (found[1] == 1){
            this.firstStepData()
        }
        else if (found[1] == 2){
            this.secondStepData()
        }
        else{
            this.thirdStepData()
            
            console.log(JSON.stringify(this.data))
        }

        
        
    }

    stepSkip() {
        this.state.step > 2 ?  
        this.setState({step: 1})
        : this.setState({step: this.state.step + 1})
    }

    cancel(){
    }

    render(){
        
        const buttonStep1 = { 
            class1: 'btn btn--transparent', 
            title1: 'Cancel', 
            click1:  this.cancel, 
            class2: 'btn btn--step',  
            title2: 'Next Step', 
            click2:  this.stepSave,
            nextlink: '/step/2'
        };

        const buttonStep2 = {
            class1:'btn btn--step btn--step_transparent',
            title1:'Skip for now',
            click1: this.stepSkip,
            class2:'btn btn--step',
            title2:'Save',
            click2:this.stepSave,
            title3:'Back to previous step',
            click3:this.prevStep,
            nextlink:'/step/3',
            prevlink: '/step/1'
        };

        const buttonStep3 = {
            class1:'btn btn--step btn--step_transparent',
            title1:'Skip for now',
            click1: this.stepSkip,
            class2:'btn btn--step',
            title2:'Save',
            click2:this.stepSave,
            title3:'Back to previous step',
            click3: this.prevStep,
            nextlink: '/step/1',
            prevlink: '/step/2'
        };

    return(
        <Router>
            <main className="main">
                <Route path="/step/1" exact component={Step1}/>
                <Route path="/step/2" exact component={Step2}/>
                <Route path="/step/3" exact component={Step3}/>

                <Route path="/step/1" exact render={(props) => <Buttons1 {...buttonStep1}/>}/>
                <Route path="/step/2" exact render={(props) => <Buttons2 {...buttonStep2}/>}/>
                <Route path="/step/3" exact render={(props) => <Buttons2 {...buttonStep3}/>}/>
            </main>
        </Router>
    )
}
}

export default Main;
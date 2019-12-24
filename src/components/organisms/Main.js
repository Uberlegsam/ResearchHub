import React, {Component} from 'react';
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
        this.nextStepSave = this.nextStepSave.bind(this);
        this.nextStepSkip = this.nextStepSkip.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    
    prevStep(){
        this.setState({step: this.state.step - 1});
    }

    nextStepSave() {
        this.state.step == 3 ?  
        this.setState({step: 1})
        : this.setState({step: this.state.step + 1})
    }

    nextStepSkip() {
        this.state.step == 3 ?  
        this.setState({step: 1})
        : this.setState({step: this.state.step + 1})
    }

    cancel(){

    }

    render(){
        let step = this.state.step;
        let contentRender;
        let buttonsBlock;
        if (step === 1){
            contentRender = <Step1 />;
            buttonsBlock = <Buttons1 class1='btn btn--transparent' title1='Cancel' click1={this.cancel} 
                            class2='btn btn--step'  title2='Next Step' click2={this.nextStepSave}/>
        }else if (step === 2){
            contentRender = <Step2 />;
            buttonsBlock = <Buttons2 class1='btn btn--step btn--step_transparent' title1='Skip for now' click1={this.nextStepSkip} 
                            class2='btn btn--step'  title2='Save' click2={this.nextStepSave} 
                            title3='Back to previous step' click3={this.prevStep}/>
        }else if (step === 3){
            contentRender = <Step3 />;
            buttonsBlock = <Buttons2 class1='btn btn--step btn--step_transparent' title1='Skip for now' click1={this.nextStepSkip} 
                            class2='btn btn--step'  title2='Save' click2={this.nextStepSave} 
                            title3='Back to previous step' click3={this.prevStep}/>
        }
    return(
            <main className="main">
                {contentRender}
                {buttonsBlock}
            </main>
    )
}
}
export default Main
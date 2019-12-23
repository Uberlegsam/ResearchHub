import React, {Component} from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';


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
        this.setState({step: this.state.step + 1});
    }

    nextStepSkip() {
        this.setState({step: this.state.step + 1});
    }

    cancel(){

    }

    render(){
        let step = this.state.step;
        let stepRender;
        if (step === 1){
            stepRender = <Step1 />;
            
        }else if (step === 2){
            stepRender = <Step2 />;
        }else if (step === 3){
            stepRender = <Step3 />;
        }
    return(
        <div>
            {stepRender}
        </div>
    )
}
}
export default Main
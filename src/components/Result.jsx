import React,{Component} from 'react';

export default class Result extends Component{
    constructor(){
        super()
        this.state={
            correctQue:0
        }
    }
static getDerivedStateFromProps(props,state){
console.log('get======>',props.correctQue)
return{
    correctQue:props.correctQue*10
}
}
    render(){
        // console.log('result====>',this.props.correctQue)
        return(
            <div>
              <h1>RESULT</h1>
              <h1>Time taken:{this.props.timer} Sec</h1>
              <h3>Correct Answer:{this.props.correctQue}</h3> 
              <h1>{this.state.correctQue}%</h1> 
            </div>
        )
    }
}
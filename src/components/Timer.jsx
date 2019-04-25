import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export default class Timer extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            this.setState({count:this.state.count+1})
        }, 1000)
    }
    componentWillUnmount(props,stats){
        clearInterval(this.myInterval)
        // alert(this.state.count,'seconds')
        var time=this.state.count
        // alert(time)
        this.props.timeTaken(time)
    }

    render() {
        const { count } = this.state;
        const {countno,classes}=this.props;
        console.log(this.props)
        return (
            <div  style={{display:'inline-block',color:'red'}}>
            
               <h5 >Question {countno+1} of 10</h5>
              
                <h5>Quiz has started {count} seconds ago.</h5>
               
            </div>
        );
    }
}
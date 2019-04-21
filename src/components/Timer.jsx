import React, { Component } from 'react';

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
        alert(time)
        this.props.timeTaken(time)
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <h1>Timing:{count} sec</h1>
            </div>
        );
    }
}
import React, { Component } from 'react';
// import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const action = (
    <Button color="secondary" size="medium">
      lorem ipsum dolorem
    </Button>
  );

export default class Result extends Component {
    constructor() {
        super()
        this.state = {
            correctQue: 0
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log('get======>', props.correctQue)
        return {
            correctQue: props.correctQue * 10
        }
    }
    render() {
        const { correctQue, timer } = this.props;
        // console.log('result====>',this.props.correctQue)
        return (
            <div style={{ display: 'inline-block' }}>
                

                <SnackbarContent message="QUIZ RESULT" style={{fontSize:'25px'}}  /> 
                <SnackbarContent message={'Time taken'} style={{marginTop:'7px'}} action={timer+' seconds'} /> 
                <SnackbarContent message="Correct Answer" style={{marginTop:'7px'}} action={'0'+correctQue} /> 
                <SnackbarContent message={'Grade'} style={{marginTop:'7px'}} action={correctQue*10+'%'}  />
            </div>
        )
    }
}

//result for github
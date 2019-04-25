import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import  Button  from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { isObject } from 'util';


const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
});

class RadioButtonsGroup extends React.Component {
    constructor(){
        super();

       this.state = {
            value: 'Unchecked',
            question: '',
            correctQue:0,
        };
        this.nextQues=this.nextQues.bind(this)
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
    };
    nextQues(){
        console.log('nextQues')
        console.log(this.state.value)
        if(this.state.value===this.state.question.correct_answer){
            // alert('korrect')
            this.setState({correctQue:this.state.correctQue+1})
        }
        this.props.countINC()
    }
    static getDerivedStateFromProps(props, state) {
        // console.log('get radio')
        if (isObject(props.quizes)) {
            return { question: props.quizes }
        }
    }
    componentWillUnmount(){
        // alert(this.state.correctQue)
        this.props.showResult(this.state.correctQue)
    }
  
  


    render() {
        const { classes } = this.props;

        const { question } = this.state;
        console.log(this.state.question)
        console.log(this.state.value)
        // console.log('values', this.props.quizes)
        return (
            <div className={classes.root} style={{display:'inline-block'}} >
          
                <FormControl component="fieldset" className={classes.formControl}>

                    <FormLabel component="legend" style={{fontWeight:'bold'}}>Q: {question.question}</FormLabel>
                    <RadioGroup
                        aria-label="Gender"
                        name="gender1"
                        className={classes.group}
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <FormControlLabel value={question.correct_answer} control={<Radio />} label={question.correct_answer} />
                        {
                            question.incorrect_answers.map((item, i) => {
                                return <FormControlLabel value={item} key={i} control={<Radio />} label={item} />
                            })
                        }
                        
                        <Button variant="contained" color="primary" onClick={this.nextQues} >Next</Button>
                        

                    </RadioGroup>
                </FormControl>

            </div>
        );
    }
}

RadioButtonsGroup.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtonsGroup);

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Button } from 'react-bootstrap';
import Quiz from './components/Quiz.jsx'
import Result from './components/Result.jsx'
import Timer from './components/Timer.jsx'
import Button from '@material-ui/core/Button';
import Radio from './components/Radio.jsx'
import AppBar from './components/AppBar.jsx'
import Instructions from './components/Instructions.jsx'
import loading from './assets/loading.gif'
import ResultSnack from './components/ResultSnack.jsx'


class App extends Component {
  constructor() {
    super();
    this.state = {
      quizes: [],
      count: 0,
      toggle: false,
      resultToggle: false,
      correctQue: 0,
      timer: 0,
      toggle2: 0,
      instr: false,
      loadingToggle:true,



    }
    this.countINC = this.countINC.bind(this)
    this.showResult = this.showResult.bind(this)
    this.timeTaken = this.timeTaken.bind(this)
    this.startQuiz=this.startQuiz.bind(this)
  }
  componentDidMount() {
    fetch('https://opentdb.com/api.php?amount=10')
      .then((resp) => resp.json())
      .then((resp) => {
        // console.log(resp)
        let quiz = resp.results
        console.log(quiz)
        this.setState({ quizes: quiz })
      })

  }
  componentDidUpdate() {
    console.log('comp update')
  }


  countINC() {
    // console.log('countINC')
    if (this.state.count < 10) {

      this.setState({ count: this.state.count + 1 })
      // console.log(this.state.count)
    }

    if (this.state.count >= 9) {
      this.setState({ resultToggle: true })
    }

  }
  showResult(queCount) {
    // alert('show result')
    // console.log('right answer',queCount)
    this.setState({ correctQue: queCount })
  }

  timeTaken(tiktok) {
    this.setState({ timer: tiktok })
  }

  static getDerivedStateFromProps(props, state) {
    console.log('toggle2', state.toggle2)
    return {
      toggle2: state.toggle2 + 1
    }
  }


  startQuiz=()=>{
    this.setState({ toggle: true })
    this.setState({loadingToggle:false})
    
      setTimeout(()=>{
        this.setState({loadingToggle:true})
        console.log('time toggle')
        // this.setState({ toggle: true })

      },2000)
    

    
  }

  render() {
    const { toggle, quizes, count, resultToggle,loadingToggle } = this.state;
    // console.log(quizes.length)
    console.log(this.state.correctQue)
    return (
      <div /*className="App"*/ style={{textAlign:'center'}}>
        <AppBar resultToggle={resultToggle} loadingToggle={loadingToggle} toggle={toggle} timer={this.state.timer} timeTaken={this.timeTaken} />
        <br /> <br />

        {!toggle && <Instructions />}

        <br />
        { !loadingToggle  && <img src={loading} alt="" width='400px' height='300px' /> }
        
        {
          !toggle && <Button variant="contained" color="primary" onClick={this.startQuiz }>Start Quiz</Button>
        }


        {!resultToggle && toggle && quizes.length && loadingToggle &&
          <Radio quizes={quizes[count]} countINC={this.countINC} showResult={this.showResult} timer={this.state.timer} />}
<br/>
        {resultToggle && <Result correctQue={this.state.correctQue} timer={this.state.timer} />}

  <br/>      
          {
            !resultToggle && loadingToggle && toggle && <Timer timeTaken={this.timeTaken} countno={count} />
          }


      </div>
    );
  }
}

export default App;

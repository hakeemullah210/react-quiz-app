import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { Button } from 'react-bootstrap';
//import Signup from './components/Signup.jsx'
//import Signin from './components/Signin.jsx'
import Quiz from './components/Quiz.jsx'
import Result from './components/Result.jsx'
import Timer from './components/Timer.jsx'



class App extends Component {
  constructor() {
    super();
    this.state = {
      quizes: [],
      count: 0,
      toggle: false,
      resultToggle: false,
      correctQue: 0,
      timer: 0


    }
    this.countINC = this.countINC.bind(this)
    this.showResult = this.showResult.bind(this)
    this.timeTaken=this.timeTaken.bind(this)
  }
  componentDidMount() {
    fetch('https://opentdb.com/api.php?amount=10')
      .then((resp) => resp.json())
      .then((resp) => {
        // console.log(resp)
        let quiz = resp.results
        // console.log(quiz)
        this.setState({ quizes: quiz })
      })
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
  render() {
    const { toggle, quizes, count, resultToggle } = this.state;
    // console.log(quizes.length)
    console.log(this.state.correctQue)
    return (
      <div className="App">
        <br />

        {
          !toggle && <button onClick={() => this.setState({ toggle: true })}>Start Quiz</button>
        }

        {
          !resultToggle && toggle && <Timer timeTaken={this.timeTaken}/>
        }
        {!resultToggle && toggle && quizes.length &&
          <Quiz quizes={quizes[count]} countINC={this.countINC} showResult={this.showResult} />}
        {resultToggle && <Result correctQue={this.state.correctQue} timer={this.state.timer} />}

      </div>
    );
  }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const calculatorBox = {
  width: "500px", 
  height: "600px", 
  margin: "100px auto", 
  borderRadius: "10px", 
  backgroundColor: "rgb(20, 30, 40)",
  position: "relative",
}
const inputBoxNum = {
  width: "105px",
  height: "60px",
  backgroundColor: "rgb(182, 185, 187)",
  display: "inlineBlock",
  fontSize: "30px",
  textAlign: "center",
  borderRadius: "10px"
}
const numbersBox = {
  width: "400px",
  height: "450px",
  backgroundColor: "rgb(182, 185, 187)",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "3px",
  paddingLeft: "10px",
  paddingRight: "10px",
  boxSizing: "border-box",
  position: "absolute",
  top: "120px",
  left: "50px",
}
const numberBox = {
  width: "80px",
  height: "80px",
  background: "radial-gradient(rgb(214, 210, 210), gray)",
  borderRadius: "5px",
  boxSizing: "border-box",
  fontSize: "50px",
  textAlign: "center",
  padding: "10px",
  cursor: "pointer"
}
const operatorBox = {
  width: "80px",
  height: "80px",
  background: "radial-gradient(rgb(214, 210, 210), gray)",
  boxSizing: "border-box",
  borderRadius: "50px",
  textAlign: "center",
  fontSize: "50px",
  padding: "10px",
  cursor: "pointer"
}
const inputBoxOpe = {
  width: "50px",
  height: "60px",
  backgroundColor: "rgb(182, 185, 187)",
  display: "inlineBlock",
  fontSize: "30px",
  textAlign: "center",
  borderRadius: "10px"
}
const inputBoxRe = {
  width: "105px",
  height: "60px",
  backgroundColor: "rgb(182, 185, 187)",
  display: "inlineBlock",
  fontSize: "30px",
  textAlign: "center",
  borderRadius: "10px"
}
const inputsContainer = {
  width: "400px",
  height: "70px",
  borderRadius: "10px",
  position: "absolute",
  top: "50px",
  left: "50px",
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: '',
      number2: '',
      operator: '',
      result: ''
    };
    this.changeHandlerNum = this.changeHandlerNum.bind(this);
    this.calculateResult = this.calculateResult.bind(this);
  }


  changeHandlerNum(e) {
    if (this.state.number1.length >= 0 && this.state.operator == "") {
      this.setState({
        number1: this.state.number1 + e.target.value
      })
      } else {
        this.setState({
           number2: this.state.number2 + e.target.value
        })    
    }
  }

  calculateResult() {
    if (this.state.operator == "+") {
      this.setState(resultState => {
        return (resultState.result = (Number(resultState.number1) + Number(resultState.number2)))
      })
    } else if (this.state.operator == "-") {
      this.setState(resultState => {
        return (resultState.result = (Number(resultState.number1) - Number(resultState.number2)))
      })
    } else if (this.state.operator == "*") {
      this.setState(resultState => {
        return (resultState.result = (Number(resultState.number1) * Number(resultState.number2)))
      })
    } else if (this.state.operator == "/") {
      this.setState(resultState => {
        return (resultState.result = (Number(resultState.number1) / Number(resultState.number2)))
      })
    }
  }

  render() {
    return (
      <div>
<main>
      <section class="heading">
        <header class="hero">
          <img
            src="https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png"
            alt="freecodecamp logo"
            loading="lazy"
            class="hero-img"
          />
          <h1 class="hero-title">OUR NEW CURRICULUM</h1>
          <p class="hero-subtitle">
            Our efforts to restructure our curriculum with a more project-based
            focus
          </p>
        </header>
        <div class="author">
          <p class="author-name">
            By
            <a href="https://freecodecamp.org" target="_blank" rel="noreferrer"
              >freeCodeCamp</a
            >
          </p>
          <p class="publish-date">March 7, 2019</p>
        </div>
        <div class="social-icons">
          <a href="https://www.facebook.com/freecodecamp/">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/freecodecamp/">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com/freecodecamp">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/school/free-code-camp/">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.youtube.com/freecodecamp">
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </section>
      <section class="text">
        <p class="first-paragraph">
          Soon the freeCodeCamp curriculum will be 100% project-driven learning. Instead of a series of coding challenges, you'll learn through building projects - step by step. Before we get into the details, let me emphasize: we are not changing the certifications. All 6 certifications will still have the same 5 required projects. We are only changing the optional coding challenges.
        </p>
        <p>
          After years - years - of pondering these two problems and how to solve them, I slipped, hit my head on the sink, and when I came to I had a revelation! A vision! A picture in my head! A picture of this! This is what makes time travel possible: the flux capacitor!
        </p>
        <p>
          It wasn't as dramatic as Doc's revelation in Back to the Future. It
          just occurred to me while I was going for a run. The revelation: the entire curriculum should be a series of projects. Instead of individual coding challenges, we'll just have projects, each with their own seamless series of tests. Each test gives you just enough information to figure out how to get it to pass. (And you can view hints if that isn't enough.)
        </p>
        <blockquote>
          <hr />
          <p class="quote">
            The entire curriculum should be a series of projects
          </p>
          <hr />
        </blockquote>
        <p>
          No more walls of explanatory text. No more walls of tests. Just one
          test at a time, as you build up a working project. Over the course of passing thousands of tests, you build up projects and your own understanding of coding fundamentals. There is no transition between lessons and projects, because the lessons themselves are baked into projects. And there's plenty of repetition to help you retain everything because - hey - building projects in real life has plenty of repetition.
        </p>
        <p>
          The main design challenge is taking what is currently paragraphs of explanation and instructions and packing them into a single test description text. Each project will involve dozens of tests like this. People will be coding the entire time, rather than switching back and forth from "reading mode" to "coding mode".
        </p>
        <p>
          Instead of a series of coding challenges, people will be in their code editor passing one test after another, quickly building up a project. People will get into a real flow state, similar to what they experience when they build the required projects at the end of each certification. They'll get that sense of forward progress right from the beginning. And freeCodeCamp will be a much smoother experience.
        </p>
      </section>
      <section class="text text-with-images">
        <article class="brief-history">
          <h3 class="list-title">A Brief History</h3>
          <p>Of the Curriculum</p>
          <ul class="lists">
            <li>
              <h4 class="list-subtitle">V1 - 2014</h4>
              <p>
                We launched freeCodeCamp with a simple list of 15 resources,
                including Harvard's CS50 and Stanford's Database Class.
              </p>
            </li>
            <li>
              <h4 class="list-subtitle">V2 - 2015</h4>
              <p>We added interactive algorithm challenges.</p>
            </li>
            <li>
              <h4 class="list-subtitle">V3 - 2015</h4>
              <p>
                We added our own HTML+CSS challenges (before we'd been relying on
                General Assembly's Dash course for these).
              </p>
            </li>
            <li>
              <h4 class="list-subtitle">V4 - 2016</h4>
              <p>
                We expanded the curriculum to 3 certifications, including Front
                End, Back End, and Data Visualization. They each had 10 required
                projects, but only the Front End section had its own challenges.
                For the other certs, we were still using external resources like
                Node School.
              </p>
            </li>
            <li>
              <h4 class="list-subtitle">V5 - 2017</h4>
              <p>We added the back end and data visualization challenges.</p>
            </li>
            <li>
              <h4 class="list-subtitle">V6 - 2018</h4>
              <p>
                We launched 6 new certifications to replace our old ones. This was
                the biggest curriculum improvement to date.
              </p>
            </li>
          </ul>
        </article>
        <aside class="image-wrapper">
          {/* <!-- <img
            
            src="https://cdn.freecodecamp.org/testable-projects-fcc/images/calc.png"
            alt="image of a calculator project"
            loading="lazy"
            class="image-2"
            width="400"
            height="400"
          /> --> */}
          <artice class="gadget">
          <div id="calculator" style={calculatorBox}>
          <div id="inputsontainer" style={inputsContainer}>
            <input style={inputBoxNum} value={this.state.number1} readOnly />
            <input style={inputBoxOpe} value={this.state.operator} readOnly />
            <input style={inputBoxNum} value={this.state.number2} readOnly />
            <input style={inputBoxRe} value={this.state.result} readOnly />
          </div>
          <div style={numbersBox} id="numbers">
            <button style={numberBox} value={1} onClick={this.changeHandlerNum}>1</button>
            <button style={numberBox} value={2} onClick={this.changeHandlerNum}>2</button>
            <button style={numberBox} value={3} onClick={this.changeHandlerNum}>3</button>
            <button style={operatorBox} value={"+"} onClick={() => this.setState({ operator: '+' })}>+</button>
            <button style={numberBox} value={4} onClick={this.changeHandlerNum}>4</button>
            <button style={numberBox} value={5} onClick={this.changeHandlerNum}>5</button>
            <button style={numberBox} value={6} onClick={this.changeHandlerNum}>6</button>
            <button style={operatorBox} value={"-"} onClick={() => this.setState({ operator: '-' })}>-</button>
            <button style={numberBox} value={7} onClick={this.changeHandlerNum}>7</button>
            <button style={numberBox} value={8} onClick={this.changeHandlerNum}>8</button>
            <button style={numberBox} value={9} onClick={this.changeHandlerNum}>9</button>
            <button style={operatorBox} value={"*"} onClick={() => this.setState({ operator: '*' })}>*</button>
            <button style={operatorBox} value={"c"} onClick={() => this.setState({ operator: '', number1: '', number2: '', result: '' })}>C</button>
            <button style={numberBox} value={0} onClick={this.changeHandlerNum}>0</button>
            <button style={operatorBox} value={"="} onClick={this.calculateResult}>=</button>
            <button style={operatorBox} value={"/"} onClick={() => this.setState({ operator: '/'})}>/</button>
            </div>
        </div>
          </artice>
          <img
            src="https://cdn.freecodecamp.org/testable-projects-fcc/images/random-quote-machine.png"
            alt="image of the quote machine project"
            loading="lazy"
            class="image-1"
            width="600"
            height="400"
          />
          <blockquote class="image-quote">
            <hr />
            <p class="quote">
              The millions of people who are learning to code through freeCodeCamp
              will have an even better resource to help them learn these
              fundamentals.
            </p>
            <hr />
          </blockquote>
          <img
            src="https://cdn.freecodecamp.org/testable-projects-fcc/images/survey-form-background.jpeg"
            alt="four people working on code"
            loading="lazy"
            class="image-3"
            width="600"
            height="400"
          />
        </aside>
      </section>
    </main>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Calculator/>
);
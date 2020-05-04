import React, {Component} from 'react';
// import Radium, { StyleRoot } from 'radium';
import styled from 'styled-components';
import './App.css';
import Person from './Components/Person/Person';
import './Components/Person/style.css';

const StyledButton = styled.button`
  background-color: ${Props => Props.buttonAlt ? '#edcdca' : '#a83c32'};
  color: ${Props => Props.buttonAlt ? '#000' : '#fff'};
  font-size: 18px;
  padding: 8px 20px;
  border-radius: 5px;
  border: none;
  &:hover {
    background-color: ${Props => Props.buttonAlt ? 'red' : 'green'};
    color: ${Props => Props.buttonAlt ? 'white' : 'yellow'};
  }
  &:focus {
    outline: none;
  }`;


class App extends Component {
  state = {
    applications: [
      { id:'1', person:"Lina Hex", name: "Login system", language: 'C++' },
      { id:'2', person:"Aditi Rao", name: "employement system", language: "Java" },
      { id:'3', person:"Max Hedge", name: "Theme builder", language: "React", days: "30" }
    ],
    showPerson: false
  }

  changeDaysHandler = (newDay) => {
    this.setState({
      applications: [
        { name: "Login system", language: 'C++' },
        { name: "employement system", language: "Java" },
        { name: "Theme builder", language: "React", days: newDay}
      ]
    })
  }

  changeNameHandler = (event, id ) => {
    const personIndex = this.state.applications.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.applications[personIndex]}

    person.name = event.target.value;

    const persons = [...this.state.applications];
    persons[personIndex] = person;

    this.setState({
      // applications: [
      //   { name: "Login system", language: 'C++' },
      //   { name: "employement system", language: "Java" },
      //   { name: event.target.value, language: "React", days: "52"}
      // ]
      applications: persons
    });
  }

  toggleSwitchHandler = (event)  => {
    const doesShow = this.state.showPerson;
    console.log("am I visible " + doesShow);
    this.setState({showPerson : !doesShow});
  }

  showAlertHandler = (event) => {
   alert("hey, You clicked component")
  }

  deletePersonHandler = (personIndex) => {
    // const person = this.state.applications.slice();  //creates duplicate of original array and store it in new const
    const person = [...this.state.applications];
    person.splice(personIndex, 1);
    this.setState({applications : person});
  }

  render() {
    const style = {
      backgroundColor: "rgba(221, 221, 221, 0.37)",
      color: "Blue",
      padding: '10px'
    }

    // const personStyle = {
    //   backgroundColor: "#a83c32",
    //   color: "#fff",
    //   fontSize: '18px',
    //   padding: '8px 20px',
    //   borderRadius: '5px',
    //   border: 'none',
    //   ':hover': {
    //     backgroundColor: 'green',
    //     color: 'yellow'
    //   },
    //   ':focus': {
    //     outline: 'none'
    //   },
    // }



    let personVisible = null;

    if(this.state.showPerson) {
      personVisible = (
        <Person className="Person2" name="Mini" click={this.showAlertHandler} changed={this.changeNameHandler}>
          <div className="Person2-conatiner">
            <h3>I am learning react</h3>
            <div>
              <p>This is a lesson about props and state. I am gonna create project based on <span style={{color: "red"}}> {this.state.applications[2].language} </span> and my application name is <span style={{color: "red"}}> {this.state.applications[2].name} </span> in less than <span style={{color: "red"}}> {this.state.applications[2].days}</span> days </p>
              <button onClick={() => this.changeDaysHandler('80')}>more Days</button>
              <button onClick={this.changeDaysHandler.bind(this, '24')}>less Days</button>
            </div>
          </div>
        </Person>
      );
      // personStyle.backgroundColor = '#edcdca';
      // personStyle.color = '#000';
      // personStyle[':hover'] = {
      //   backgroundColor: 'red',
      //   color: 'white'
      // };
    }

    return (
      <div>
        <div className="app">
          <h1>Hi, I am React App</h1>
          <p>This is great!!!</p>
          <StyledButton buttonAlt={this.state.showPerson} onClick={this.toggleSwitchHandler}>Show Person Info</StyledButton>
          {this.state.showPerson ?
            <div>
              <h1>Hey, this is visible person info of parent component</h1>
            <Person className="Person1" name="max" click={this.showAlertHandler}>I am loving it</Person>
          </div> : <div><p style={style}>Nothing to show. Please click above button to show details</p></div>
          }
          {personVisible}


          <h2>We have list of Projects on various technologies</h2>
          {this.state.applications.map((application, index ) => {
            return (
                    <Person 
                      name={application.person}
                      key={application.id} 
                      click={this.deletePersonHandler.bind(this, index)}
                      changed={(event) => this.changeNameHandler(event, application.id)}
                    />
                  )
          })}
        </div>
      </div>
    );
  }
}

export default App;

import React, { useState } from 'react';
import Radium from 'radium';
import styled from 'styled-components';
import './style.css';

const StyledDiv = styled.div`
  border: 1px solid #c5c5c5;
  background-color: #e5e5e5;`;


const Person = (Props) => {
    const style = {
      '@media (max-width: 500px)': {
        maxWidth: '80%',
        margin: 'auto',
        padding: '20px'
      }
    };

    const [expertState, setExpertState] = useState({
      techExperts: [
        {name: 'Max Jen', experiance: '3yrs'},
        {name: 'Lina Franklin', experiance: '7yrs'},
        {name: 'Joe Hans', experiance: '5yrs'}
      ]
    });

    return (
        <StyledDiv>
          <h2 className="header">Hey this is parent component of </h2> <input type="text" onChange={Props.changed}/>
          <p className="description">this parent is great. My name is <span style={{color: "red"}}>{Props.name}</span> and I am <span style={{color: "red"}}>{ Math.floor(Math.random() * 30) }</span> yrs old</p>
          <p className="description">I think <span style={{color: "#555555"}}>{Props.children}</span></p>
          <p className="description">We have experts for working on this technologies like <span style={{color: "red"}}> {expertState.techExperts[1].name} </span> having <span style={{color: "red"}}> {expertState.techExperts[1].experiance} </span> of experiance</p>
          <p onClick={Props.click}>Click me to delete this person</p>
        </StyledDiv>
    );
}

export default Radium(Person);
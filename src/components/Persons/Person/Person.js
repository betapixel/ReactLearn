import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount()')
  }

  render() {
    console.log('[Person.js] Inside render()');
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>Hola, mi nombre es {this.props.name} y tengo {this.props.age} años</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    )
  }
}

export default Person;  

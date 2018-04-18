import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';



//Este  código siempre debe existir
class App extends Component {
  constructor(props) {
    super(props);
    console.log('[Apps.js] Inside Constructor', props);
    this.state = {
      persons: [
        { id: 'Prueba1', name: 'Manu', age: 29 },
        { id: 'Prueba2', name: 'Stephanie', age: 26 },
        { id: 'Prueba3', name: 'Max', age: 28 },
      ],
      otherState: 'some other value',
      showPersons: false

    }
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount(){
    console.log('[App.js] Inside componentDidMount()')
  }

  // state = {
  //   persons: [
  //     { id: 'aasdfaa', name: 'Manu', age: 29 },
  //     { id: 'bbadfafb', name: 'Stephanie', age: 26 },
  //     { id: 'cdasdfaf', name: 'Max', age: 28 },
  //   ],
  //   otherState: 'some other value',
  //   showPersons: false

  // }

  // Cambia el nombre en el input mientras escribo
  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }


  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }


  render() {
    console.log('[App.js] Inside Render()');
    let persons = null;

    if (this.state.showPersons) {

      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />;
    }

    return (
      <div className={classes.App}>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}
export default App;

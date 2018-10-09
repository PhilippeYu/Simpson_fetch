import React, { Component } from 'react';
import './App.css';
import  GenerateEmployee  from  './GenerateEmployee';
import  DisplayEmployee  from  './DisplayEmployee';

const  sampleEmployee = {
  quote:"I hope I didn't brain my damage.",
  character:"Homer Simpson",
  image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // on peut mettre notre sampleEmployee par défaut
      // afin d'avoir toujours un employé d'affiché
      employee:  sampleEmployee
    };
  }
  
  getEmployee() {
    // Récupération de l'employé via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=num")
      .then(response  =>  response.json())
      .then(data  => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          employee:  data[0],
        });
    });
}
  render() {
    return (
      <div className="App">
        <DisplayEmployee employee={sampleEmployee} />
        <GenerateEmployee  selectEmployee={() =>  this.getEmployee()}  />
      </div>
    );
  }
}

export default App;

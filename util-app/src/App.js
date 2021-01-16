import React from 'react';
import logo from './logo.svg';
import './App.css';
import InitComponent, { DissposeComponent } from './components/InitComponent.js'

function App() {

  const user = {
    name: "pablo",
    age: 21
  }

  const greeting = name => {
    console.log(' hello : ', name )
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          < InitComponent user={user}  greeting ={greeting} />
          < DissposeComponent />
      </header>
    </div>
  );
}

export default App;

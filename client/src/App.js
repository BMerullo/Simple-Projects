import './App.css';
import { Router } from '@reach/router'
import NavBar from './components/NavBar';
import react, { useState } from 'react'
import BoxView from './views/BoxView';
import TabView from './views/TabView';
import ListView from './views/ListView';



function App() {

  




  return (
    <div className="App">
      <h1>Simple Projects</h1>
      <NavBar />
      <Router>
        <BoxView path="/projects/box"/>
        <TabView path="/projects/tab"/>
        <ListView path="/projects/list"/>
      </Router>
    </div>
  );
}

export default App;
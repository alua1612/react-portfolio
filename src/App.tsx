import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <Main></Main>
      </header>
    </div>
  );
}

export default App;

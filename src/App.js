import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import NavBar from './components/nav/NavBar';

function App() {

  //hangleclick not functioning properly

  const handleClick = (e) => {
    const grow1 = document.querySelector('.grow1');
    const grow2 = document.querySelector('.grow2');
    const grow3 = document.querySelector('.grow3');

    const name = e.target.className;

    const clicked = document.querySelector(name);

    if (clicked === 'click1') {
    grow1.style.color = 'darkorange';
    grow1.style.fontSize = '200%';
    grow1.style.marginLeft = '.5em';
    grow2.style.color = 'black';
    grow2.style.fontSize = '1.5em';
    grow2.style.marginLeft = '';
    grow3.style.color = 'black';
    grow3.style.fontSize = '1.5em';
    grow3.style.marginLeft = '';
    }

    if (clicked === 'click2') {
      grow1.style.color = 'black';
      grow1.style.fontSize = '1.5em';
      grow1.style.marginLeft = '';
      grow2.style.color = 'darkorange';
      grow2.style.fontSize = '200%';
      grow2.style.marginLeft = '.5em';
      grow3.style.color = 'black';
      grow3.style.fontSize = '1.5em';
      grow3.style.marginLeft = '';
    }

    if (clicked === 'click3') {
      grow1.style.color = 'black';
      grow1.style.fontSize = '1.5em';
      grow1.style.marginLeft = '';
      grow2.style.color = 'black';
      grow2.style.fontSize = '1.5em';
      grow2.style.marginLeft = '';
      grow3.style.color = 'darkorange';
      grow3.style.fontSize = '200%';
      grow3.style.marginLeft = '.5em';
    }
  }

  return (
    <div className="App">
        <NavBar handleClick={handleClick}/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
  );
}

export default App;

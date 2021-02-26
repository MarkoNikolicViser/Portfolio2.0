import './App.css';
import React,{useState,useEffect} from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/contact';

function App() {
  const[dark,setDark]=useState(false);

useEffect(() => {
  const data=localStorage.getItem('darkData')
  if(data)
  setDark(JSON.parse(data));
}, [])

  useEffect(() => {
    localStorage.setItem('darkData',JSON.stringify(dark));
  })
  return (
    <>
    <div className="App">
    <div className="balon"></div>
      <Nav dark={dark} setDark={setDark}/>
      <Home dark={dark}/>
      <About dark={dark}/>
      <Projects dark={dark}/>
      <Contact dark={dark}/>
    </div>
    </>
  );
}

export default App;

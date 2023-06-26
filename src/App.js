import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import { Counter } from './components/features/counter';
import HomePage from './pages/home';

function App() {
  // const [value, setValue] = useState("...(value supposed to be here!)...");
  // const onAdd = () => {
  //   localStorage.setItem("username username", "abdurrahman ")
  // }
  // const onGet = () => {
  //   setValue(localStorage.getItem("username"));
  // }

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        {/* <Route path="/" element={<Home/>}></Route> */}
        <Route path="/counter" element={<Counter/>}></Route>
      </Routes>
      {/* <Button onClick={onAdd}>Set Item</Button>
      <Button onClick={onGet}>Get Item</Button>
      <h1>{value}</h1> */}
    </div>
  );
}

export default App;

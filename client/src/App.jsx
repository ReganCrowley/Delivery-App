import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';


import { Header, Menu, Map } from './components';

function App() {
  return (
    <>



      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </BrowserRouter>

      {/*<Map /> */}
    </>
  );
}

export default App;

import React from 'react';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ListContainer from './components/MainList/ListContainer';
import ListContextProvider from './contexts/ListContext';

import './App.css';

function App() {
  return (
    <ListContextProvider>
      <Header />
      <ListContainer />
      <Footer />
    </ListContextProvider>
  );
}

export default App;

import React from 'react';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainList from './components/MainList/MainList';
import ListContextProvider from './contexts/ListContext';

import './App.css';

function App() {
  return (
    <ListContextProvider>
      <Header />
      <MainList />
      <Footer />
    </ListContextProvider>
  );
}

export default App;

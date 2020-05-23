import React from 'react';
import './App.css';

import SearchBar from "./components/SearchBar";
import Header from './components/Header';
import SearchResults from './components/SearchResults';

function App() {
  return (

      <div className="App-header">
        <Header />
        <div class="container">
          <SearchBar />
          <SearchResults />
        </div>
      </div>

  );
}

export default App;

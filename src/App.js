import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList />
      <Switch>
        <Route
          exact
          path="/:id"
          render={(props) => <CountryDetails {...props} />}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;

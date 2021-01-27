import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from "./components/menu/navbar";
import Home from './pages/home/home'
import Explore from './pages/explore/explore'
import search from './pages/search/search'
import researchPage from "./pages/researchPage/reasearchPage";


class App extends Component{
  render() {
    return(
        <BrowserRouter>
          <div>
            <Navbar/>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/explore" component={Explore} exact/>
                <Route path="/search" component={search} exact/>
                <Route path="/research" component={researchPage} exact/>
            </Switch>
          </div>
        </BrowserRouter>
    )
  }
}

export default App;

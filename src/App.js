import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import{ Provider } from 'react-redux';
import { store, persistor } from './Redux/store'
import './App.css';
import NavigationBar from "./components/menu/navBar/navbar";
import Home from './pages/home/home'
import Explore from './pages/explore/explore'
import search from './pages/search/search'
import researchPage from "./pages/researchPage/reasearchPage";
import Query from './pages/query/query'
import Visualize from "./pages/visualize/visualize";
import Analyze from "./pages/analyze/analyze";
import Configure from "./pages/configure/configure";




class App extends Component{
  render() {
    return(
        <Provider store={ store }>
            <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <div>
            <NavigationBar/>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/explore" component={Explore} exact/>
                <Route path="/search" component={search} exact/>
                <Route path="/query" component={Query} exact/>
                <Route path="/visualize" component={Visualize} exact/>
                <Route path="/analyze" component={Analyze} exact/>
                <Route path="/configure" component={Configure} exact/>
                <Route path="/research" component={researchPage} exact/>
            </Switch>
          </div>
        </BrowserRouter>
            </PersistGate>
        </Provider>
    )
  }
}

export default App;

import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import './styles/App.css'
import registerServiceWorker from './registerServiceWorker'
import {BrowserRouter, Route, Switch, NavLink, Link} from 'react-router-dom'
import Explorer from './components/Explorer'
import Films from './components/Films'
import BaseLayout from './components/Layout'
import People from './components/People'
import Starships from './components/Starships'

// IMPORT REACT ROUTER <<<<<<<<<<<<<<<<<<<<<<

// IMPORT COMPONENTS <<<<<<<<<<<<<<<<<<<<<<

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path='/' component={Explorer} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
  /* >>>>>>>>>>>>>>>>>>>>>
          Add a router components with routes to:
          Starships
          Films
          People
          <<<<<<<<<<<<<<<<<<<<<<
  */

, document.getElementById('root'))
registerServiceWorker()

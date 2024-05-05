import {Switch, Route} from 'react-router-dom'

import NotFound from './components/NotFound'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Header from './components/Header'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/" component={Home} />
    <Route exact path="/header" component={Header} />
    <Route component={NotFound} />
  </Switch>
)

export default App

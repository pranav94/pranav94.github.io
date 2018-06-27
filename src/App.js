import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'

import 'antd/dist/antd.less'
import './index.less'
import './index.css'

import { Icon } from 'antd'

import Header from './components/Header'
import Home from './components/Home'
import Skills from './components/Skills'
import Contact from './components/Contact'


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/skills' component={Skills} />
          <Route path='/contact' component={Contact} />
        </Switch>
        <footer>
          <Link to='/'> Pranav </Link> <Icon type="copyright" /> 2018.
        </footer>
      </div>
    )
  }
}

export default App;

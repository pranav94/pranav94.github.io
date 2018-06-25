import React from 'react'
import { Switch, Route } from 'react-router-dom'
import 'antd/dist/antd.less'
import './index.less'
import './index.css'

import Header from './components/Header'
import Home from './components/Home'


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/roster' component={Home} />
          <Route path='/schedule' component={Home} />
        </Switch>
      </div>
    )
  }
}

export default App;

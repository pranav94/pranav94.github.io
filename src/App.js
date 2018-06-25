import React, { Component } from 'react'
import 'antd/dist/antd.less'
import './index.less'
import './App.css'
import logo from './logo.svg'


class App extends Component {
  render() {
    return (
      <div>
        <div className='title'>
          <img height='80' src={logo} alt='P.U' />
          <div className='navbar'>
            <span className='links'>
              <span>Home</span>
              <span>Skills</span>
              <span>Contact</span>
            </span>
          </div>
          <div className="intro">
            <h1>
              HI.
          </h1>
            <h1>
              WELCOME TO MY PAGE
          </h1>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

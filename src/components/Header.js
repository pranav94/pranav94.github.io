import React from 'react'
import { Link } from 'react-router-dom'
import { Icon, Button } from 'antd'

import logo from '../logo.svg'


export default class Header extends React.Component {
    state = {
        collapsed: false,
    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        })
    }
    render() {
        return (
            <div>
                <div className={'sidebar '+(this.state.collapsed ? 'open' : 'close')}>
                    <img height='60' src={logo} alt='P.U' />
                    <div>
                        <Link onClick={this.toggleCollapsed} to='/'>
                            HOME
                        </Link>
                    </div>
                    <div>
                        <Link onClick={this.toggleCollapsed} to='/skills'>
                            SKILLS
                        </Link>
                    </div>
                    <div>
                        <Link onClick={this.toggleCollapsed} to='/skills'>
                            CONTACT
                        </Link>
                    </div>
                </div>
                <div className="mobilemenu">
                    <Button type="primary" style={{marginLeft: this.state.collapsed ? '32vw' : 0}} onClick={this.toggleCollapsed}>
                        <Icon type={this.state.collapsed ? 'menu-fold' : 'menu-unfold'} />
                    </Button>
                </div>
                <div className='title'>
                    <img height='80' src={logo} alt='P.U' />
                    <div className='navbar'>
                        <span className='links'>
                            <span>
                                <Link to='/'>
                                    HOME
                                </Link>
                            </span>
                            <span>
                                <Link to='/skills'>
                                    SKILLS
                                </Link>
                            </span>
                            <span>
                                <Link to='/skills'>
                                    CONTACT
                                </Link>
                            </span>
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
                <img className='photo' height='80' src='./images/photo.jpg' alt='P.U' />
            </div>
        )
    }
}
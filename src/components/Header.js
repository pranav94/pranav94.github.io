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
                <div className={'sidebar ' + (this.state.collapsed ? 'open' : 'close')}>
                    <Link to='/'>
                        <img height='60' src={logo} alt='P.U' />
                    </Link>
                    <div>
                        <Link onClick={this.toggleCollapsed} to='/'>
                            Home
                        </Link>
                    </div>
                    <div>
                        <Link onClick={this.toggleCollapsed} to='/experience'>
                            Experience
                        </Link>
                    </div>
                    <div>
                        <Link onClick={this.toggleCollapsed} to='/contact'>
                            Contact
                        </Link>
                    </div>
                </div>
                <div className='mobilemenu'>
                    <Button type='primary' style={{ marginLeft: this.state.collapsed ? '32vw' : 0 }} onClick={this.toggleCollapsed}>
                        <Icon type={this.state.collapsed ? 'menu-fold' : 'menu-unfold'} />
                    </Button>
                </div>
                <div className='title'>
                    <img height='80' src={logo} alt='P.U' />
                    <div className='navbar'>
                        <span className='links'>
                            <span>
                                <Link to='/'>
                                    Home
                                </Link>
                            </span>
                            <span>
                                <Link to='/experience'>
                                    Experience
                                </Link>
                            </span>
                            <span>
                                <Link to='/contact'>
                                    Contact
                                </Link>
                            </span>
                        </span>
                    </div>
                    <div className='intro'>
                        <h1>
                            Pranav Udupa
                        </h1>
                    </div>
                </div>
                <img className='photo' height='80' src='./images/photo.jpg' alt='P.U' />
            </div>
        )
    }
}
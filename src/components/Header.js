import React from 'react'
import { Link } from 'react-router-dom'
import { Icon, Button } from 'antd'

import logo from '../logo.svg'
import Texty from 'rc-texty';
import TweenOne from 'rc-tween-one';

class Demo extends React.Component {
    state = {
        show: true,
        collapsed: false,
    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        })
    }
    geInterval = (e) => {
        switch (e.index) {
            case 0:
                return 0;
            case 1:
                return 150;
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                return 150 + 450 + (e.index - 2) * 10;
            default:
                return 150 + 450 + (e.index - 6) * 150;
        }
    }
    getEnter = (e) => {
        const t = {
            opacity: 0,
            scale: 0.8,
            y: '-100%',
        };
        if (e.index >= 2 && e.index <= 6) {
            return { ...t, y: '-30%', duration: 150 };
        }
        return t;
    }

    getSplit = (e) => {
        const t = e.split(' ');
        const c = [];
        t.forEach((str, i) => {
            c.push((
                <span key={`${str}-${i}`}>
                    {str}
                </span>
            ));
            if (i < t.length - 1) {
                c.push(<span key={` -${i}`}> </span>);
            }
        });
        return c;
    }

    onClick = () => {
        this.setState({
            show: false,
        }, () => {
            this.setState({
                show: true
            });
        });
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
                <div className='combined-wrapper'>
                    <img height='80' className='logo-image' src={logo} alt='P.U' />
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
                    {this.state.show && (
                        <div className='combined'>
                            <div className='combined-shape'>
                                <div className='shape-left'>
                                    <TweenOne
                                        animation={[
                                            { x: 158, type: 'from', ease: 'easeInOutQuint', duration: 600 },
                                            { x: -158, ease: 'easeInOutQuart', duration: 450, delay: -150 },
                                        ]}
                                    />
                                </div>
                                <div className='shape-right'>
                                    <TweenOne
                                        animation={[
                                            { x: -158, type: 'from', ease: 'easeInOutQuint', duration: 600 },
                                            { x: 158, ease: 'easeInOutQuart', duration: 450, delay: -150 },
                                        ]}
                                    />
                                </div>
                            </div>
                            <Texty
                                className='animated-title'
                                type='mask-top'
                                delay={400}
                                enter={this.getEnter}
                                interval={this.geInterval}
                                component={TweenOne}
                                componentProps={{
                                    animation: [
                                        { x: 130, type: 'set' },
                                        { x: 100, delay: 500, duration: 450 },
                                        {
                                            ease: 'easeOutQuart',
                                            duration: 300,
                                            x: 0,
                                        },
                                        {
                                            letterSpacing: 0,
                                            delay: -300,
                                            scale: 0.9,
                                            ease: 'easeInOutQuint',
                                            duration: 1000,
                                        },
                                        { scale: 1, width: '100%', delay: -300, duration: 1000, ease: 'easeInOutQuint' },
                                    ],
                                }}
                            >
                                Pranav
                        </Texty>
                            <TweenOne
                                className='combined-bar'
                                animation={{ delay: 2000, width: 0, x: 158, type: 'from', ease: 'easeInOutExpo' }}
                            />
                            <Texty
                                className='content'
                                type='bottom'
                                split={this.getSplit}
                                delay={2200}
                                interval={30}
                            >
                                Graduate student at UC Irvine
                        </Texty>
                        </div>
                    )}
                    <img className='photo' height='80' src='./images/photo.jpg' alt='P.U' />
                </div>
            </div>
        );
    }
}

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
                {/* <div className={'sidebar ' + (this.state.collapsed ? 'open' : 'close')}>
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
                <img className='photo' height='80' src='./images/photo.jpg' alt='P.U' /> */}
                <Demo />
            </div>
        )
    }
}
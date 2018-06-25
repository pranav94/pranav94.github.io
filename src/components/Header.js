import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../logo.svg'


export default class Header extends React.Component {
    render() {
        return (
            <div>
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
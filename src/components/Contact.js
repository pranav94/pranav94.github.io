import React from 'react'
import { Icon } from 'antd'
import linkedIn from './LinkedIn'


export default class Contact extends React.Component {
    /**
     * Load linkedIn badge.
     */
    componentDidMount() {
        linkedIn(window)
    }
    render() {
        return (
            <div className='contact'>
                <h2>
                    Like what you see? Write to me!
                </h2>
                <div className='LI-profile-badge' data-version='v1' data-size='large' data-locale='en_US' data-type='horizontal' data-theme='light' data-vanity='pranavudupa'>
                    <a className='LI-simple-link' href='https://in.linkedin.com/in/pranavudupa?trk=profile-badge'>
                        <Icon type='linkedin' />
                        {' '}
                        Pranav Udupa
                    </a>
                </div>
                <div>
                    <h4>
                        <a className='mail' href='mailto:pranavudupa94@gmail.com'>
                            <Icon type='mail' />
                            {' '}
                            pranavudupa94@gmail.com
                        </a>
                    </h4>
                </div>
            </div>
        )
    }
}
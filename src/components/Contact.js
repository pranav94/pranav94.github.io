import React from 'react'
import { Icon } from 'antd'


export default class Contact extends React.Component {
    render() {
        return (
            <div className='contact'>
                <h2>
                    Like what you see? Write to me!
                </h2>
                <div>
                    <Icon type='mail' />
                    <h4>
                        {'  '}
                        <a style={{ color: 'blue' }} href='mailto:pranavudupa94@gmail.com'>
                            pranavudupa94@gmail.com
                        </a>
                    </h4>
                </div>
                <div>
                    <Icon type='linkedin' />
                    <h4>
                        {'  '}
                        <a style={{ color: 'blue' }} href='https://www.linkedin.com/in/pranavudupa/'>
                            https://www.linkedin.com/in/pranavudupa/
                        </a>
                    </h4>
                </div>
            </div>
        )
    }
}
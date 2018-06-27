import React from 'react'


export default class Contact extends React.Component {
    render() {
        return (
            <div className='contact'>
                <div>
                    <h4>Phone: +91 81479 44554</h4>
                </div>
                <div>
                    <h4>Email: pranavudupa94@gmail.com</h4>
                </div>
                <div>
                    <h4>LinkedIn: <a style={{color: 'blue'}} href="https://www.linkedin.com/in/pudupa94/">https://www.linkedin.com/in/pudupa94/</a></h4>
                </div>
            </div>
        )
    }
}
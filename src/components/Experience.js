import React from 'react'
import { Timeline, Icon } from 'antd'


export default class Experience extends React.Component {
    render() {
        return (
            <div className='experience'>
                <Timeline>
                    <Timeline.Item dot={<Icon type="caret-right" />}>
                        <h3>
                            Intern at Oracle India Pvt. Ltd.
                        </h3>
                        <h5>
                            Jun 2015 – Aug 2015
                        </h5>
                        <p>
                            Implemented REST based APIs using Java and developed a web portal powered by jQuery to consume them.
                        </p>
                    </Timeline.Item>
                    <Timeline.Item dot={<Icon type="mobile" />} color="green">
                        <h3>
                            Intern at Green Mobiles
                        </h3>
                        <h5>
                            Sep 2015 – Nov 2015
                        </h5>
                        <p>
                            Built several web merchant tools using Amazon’s MWS and jQuery.
                        </p>
                    </Timeline.Item>
                    <Timeline.Item dot={<Icon type="code-o" />} color="black">
                        <h3>
                            Software Engineer at Akamai Technologies
                        </h3>
                        <h5>
                            Jul 2016 – Mar 2018
                        </h5>
                        <p>
                            Worked on a plethora of technologies including ReactJS, Flask, Python, PHP, Perl, Zend, Jinja2 and Pytest.
                        </p>
                        <p>
                            Optimized the Akamai on-boarding process by building a web portal, making the process 20X faster.
                        </p>
                        <p>
                            <strong>Spot award - 2017</strong>
                        </p>
                    </Timeline.Item>
                    <Timeline.Item dot={<Icon type="desktop" />} color="red">
                        <h3>
                            Full Stack Developer at HealthifyMe
                        </h3>
                        <h5>
                            Mar 2018 – Aug 2018
                        </h5>
                        <p>
                            Designed the entire engineering around Ria for 5 million users, a smart AI assistant with cutting edge technology.
                        </p>
                    </Timeline.Item>
                    <Timeline.Item dot={<Icon type="book" />} color="green">
                        <h3>
                            Masters in Computer Science from UC Irvine
                        </h3>
                        <h5>
                            Sept 2018 - Dec 2019 (Expected)
                        </h5>
                    </Timeline.Item>
                    <Timeline.Item dot={<Icon type="question-circle" />} color="red">
                        <h3>
                            What next?
                        </h3>
                        <p>
                            Looking forward to work in a setting where I can learn and grow as I build scalable full stack applications.
                        </p>
                    </Timeline.Item>
                </Timeline>
            </div>
        )
    }
}
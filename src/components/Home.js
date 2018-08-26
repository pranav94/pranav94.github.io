import React from 'react'
import { Col, Icon, Rate, Row, Tag } from 'antd'


export default class Home extends React.Component {
    render() {
        return (
            <div className='home'>
                <h1 className='home-head'>
                    A FULL STACK DEVELOPER WHO LOVES THE WEB
                </h1>
                <p>
                    I <Icon type='heart' /> Javascript, Python and developing full stack applications using them.
                </p>
                <div className='stack'>
                    <Row>
                        <Col className='stack-short-note-div' span={4}>
                            <div className='stack-short-note'>
                                <h1>Python</h1>
                                <h1>+</h1>
                                <h1>React</h1>
                                <h1>+</h1>
                                <h1>SQL</h1>
                                <h1>=</h1>
                                <h1> <Icon type='check' /></h1>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className='skills'>
                                <div>
                                    <img src='/images/python.svg' alt='Python' />
                                    <span>
                                        <strong>PYTHON</strong>
                                        <p>
                                            Engineered over 6+ projects with Python in the back end.
                                        </p>
                                        <Rate disabled defaultValue={4} />
                                    </span>
                                </div>
                                <div>
                                    <img src='/images/react.svg' alt='React' />
                                    <span>
                                        <strong>REACT</strong>
                                        <p>
                                            Built a very own version of React from scratch!
                                        </p>
                                        <Rate disabled defaultValue={4} />
                                    </span>
                                </div>
                                <div>
                                    <img src='/images/mysql.svg' alt='React' />
                                    <span>
                                        <strong>SQL</strong>
                                        <p>
                                            Has designed and implemented the schemas for numerous Projects.
                                        </p>
                                        <Rate disabled defaultValue={3} />
                                    </span>
                                </div>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div>
                                <div className='stack-border'></div>
                                <div className='stack-arrow'></div>
                            </div>
                            <div className='stack-description'>
                                <div>
                                    <h1>
                                        Python
                                    </h1>
                                    Working with
                                        {' '}
                                    <Tag>Flask</Tag>
                                    <Tag>Flask Restplus</Tag>
                                    <Tag>SqlAlchemy</Tag>
                                    <Tag>Django</Tag>
                                    <Tag>Django Rest Framework</Tag>
                                    {' and '}
                                    <Tag> TastyPie</Tag>
                                    has developed an affinity towards doing things in a Pythonic way.
                                        Can get overly obsessive about the <strong>PEP-8</strong> and <strong>TDD</strong>.
                                </div>
                                <div>
                                    <h1>
                                        React
                                    </h1>
                                    Loves everything about React. Hands-on experience extends over
                                        {' '}
                                    <Tag>Redux</Tag>
                                    <Tag>Flask</Tag>
                                    <Tag>Ant Design</Tag>
                                    <Tag>HTML/CSS</Tag>
                                    <Tag>jQuery</Tag>
                                    <Tag>webpack</Tag>
                                    {' and '}
                                    <Tag>node</Tag>
                                </div>
                                <div>
                                    <h1>
                                        SQL
                                    </h1>
                                    Has used <strong>ORM</strong>s to connect to a myriad databases including
                                        {' '}
                                    <Tag>MySQL</Tag>
                                    <Tag>MariaDB</Tag>
                                    <Tag>OracleDB</Tag>
                                    <Tag>Postgres</Tag>
                                    <Tag>SQLite</Tag>
                                    {' and '}
                                    <Tag>MongoDB</Tag>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div >
        )
    }
}
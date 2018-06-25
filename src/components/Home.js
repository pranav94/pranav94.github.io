import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Icon, Row } from 'antd'


export default class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <h1 className="home-head">
                    A FULL STACK DEVELOPER WHO LOVES THE WEB
                </h1>
                <p>
                    I <Icon type="heart" /> Javascript, Python and developing full stack applications using them.
                </p>
                <div className="stack">
                    <Row>
                        <Col span={4}>
                            <div className="stack-short-note">
                                <h1>React</h1>
                                <h1>+</h1>
                                <h1>Python</h1>
                                <h1>+</h1>
                                <h1>SQL</h1>
                                <h1>=</h1>
                                <h1> <Icon type="heart" /></h1>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className='skills'>
                                <div>
                                    <img src="/images/react.svg" alt="React" />
                                    <span>
                                        <strong>REACT</strong>
                                        <p>I love Redux and the reactive way of doing things. Almost always choose React as my front-end of the stack.</p>
                                    </span>
                                </div>
                                <div>
                                    <img src="/images/python.svg" alt="Python" />
                                    <span>
                                        <strong>PYTHON</strong>
                                        <p>
                                            My go-to language when I write back-ends.
                                    </p>
                                    </span>
                                </div>
                                <div>
                                    <img src="/images/mysql.svg" alt="React" />
                                    <span>
                                        <strong>SQL</strong>
                                        <p>I love ORMs and almost always use them to map to all kinds of databases.</p>
                                    </span>
                                </div>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div>
                                <div className="stack-border"></div>
                                <div className="stack-arrow"></div>
                            </div>
                            <div className="stack-description">
                                <h1>
                                    React
                            </h1>
                                <p>
                                    I love everything about React. My hands-on experience extends over Redux, Ant Design, CSS and HTML as I build numerous components/webtools using React + Redux.
                                    I use npm for dependency management and webpack as a bundler.
                            </p>
                                <br />
                                <br />
                                <h1>
                                    Python
                            </h1>
                                <p>
                                    I'm always excited to code in Python. The ease, scalability and extensibility of the interpreted language impresses me.
                                    Working with Flask, Flask Restplus, SqlAlchemy, Django, Django Rest Framework and TastyPie I've developed an affinity towards doing things in a Pythonic way.
                                Can get overly obsessive about the <strong>PEP-8</strong> coding standards.
                            </p>
                                <br />
                                <h1>
                                    SQL
                            </h1>
                                <p>
                                    I like to use ORMs everytime I need to connect to a database. Comfortable with SqlAlchemy and Django's models.
                                    I've connected to different sorts of underlying databases including MySQL, MariaDB, OracleDB and Postgres.
                                    Also have some experience with the no sql database MongoDB.
                            </p>
                            </div>
                        </Col>
                    </Row>
                </div>
                <footer>
                    <Link to='/'> Pranav </Link> © 2018.
                </footer>
            </div >
        )
    }
}
import React from 'react'
import { render } from 'react-dom'
import { Container, Row, Col, Countdown } from '../../src'
import './style.scss'

const App = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h2>Standard</h2>
                        <Countdown d h m s date={new Date('2022/09/04 17:00').getTime()} />
                        <br />
                        <code>{`<Countdown d h m s date={new Date("2022/09/04 17:00").getTime()} />`}</code>
                    </Col>
                </Row>
                <Row style={{ marginTop: '30px' }}>
                    <Col>
                        <h2>Custom Styling</h2>
                        <Countdown d date={new Date('2020/09/04 17:00').getTime()} style={{ fontSize: '30px' }} />
                        <br />
                        <code>{`<Countdown d date={new Date('2020/09/04 17:00').getTime()} style={{ fontSize: '30px' }} />`}</code>
                    </Col>
                </Row>
                <Row style={{ marginTop: '30px' }}>
                    <Col>
                        <h2>Custom Labels</h2>
                        <Countdown d daysText='ddaaayyss' date={new Date('2020/09/04 17:00').getTime()} />
                        <br />
                        <code>{`<Countdown d daysText='ddaaayyss' date={new Date('2020/09/04 17:00').getTime()} />`}</code>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

render(<App />, document.getElementById('root'))

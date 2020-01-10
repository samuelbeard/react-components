import React from 'react'

import { Container, Row, Col } from './index'

export default {
    title: 'Grid',
}

export const basic = () => (
    <>
        <Container>
            <Row>
                <Col style={{ background: 'Orange' }}>1</Col>
            </Row>
            <Row>
                <Col style={{ background: 'SpringGreen' }}>1</Col>
                <Col style={{ background: 'Fuchsia' }}>2</Col>
            </Row>
            <Row>
                <Col style={{ background: 'Orange' }}>1</Col>
                <Col style={{ background: 'Aquamarine' }}>2</Col>
                <Col style={{ background: 'Orange' }}>3</Col>
            </Row>
            <Row>
                <Col style={{ background: 'SpringGreen' }}>1</Col>
                <Col style={{ background: 'Fuchsia' }}>2</Col>
                <Col style={{ background: 'SpringGreen' }}>3</Col>
                <Col style={{ background: 'Fuchsia' }}>4</Col>
            </Row>
            <Row>
                <Col style={{ background: 'Orange' }}>1</Col>
                <Col style={{ background: 'Aquamarine' }}>2</Col>
                <Col style={{ background: 'Orange' }}>3</Col>
                <Col style={{ background: 'Aquamarine' }}>4</Col>
                <Col style={{ background: 'Orange' }}>5</Col>
            </Row>
            <Row>
                <Col style={{ background: 'SpringGreen' }}>1</Col>
                <Col style={{ background: 'Fuchsia' }}>2</Col>
                <Col style={{ background: 'SpringGreen' }}>3</Col>
                <Col style={{ background: 'Fuchsia' }}>4</Col>
                <Col style={{ background: 'SpringGreen' }}>5</Col>
                <Col style={{ background: 'Fuchsia' }}>6</Col>
            </Row>
            <Row>
                <Col style={{ background: 'Orange' }}>1</Col>
                <Col style={{ background: 'Aquamarine' }}>2</Col>
                <Col style={{ background: 'Orange' }}>3</Col>
                <Col style={{ background: 'Aquamarine' }}>4</Col>
                <Col style={{ background: 'Orange' }}>5</Col>
                <Col style={{ background: 'Aquamarine' }}>6</Col>
                <Col style={{ background: 'Orange' }}>7</Col>
            </Row>
            <Row>
                <Col style={{ background: 'SpringGreen' }}>1</Col>
                <Col style={{ background: 'Fuchsia' }}>2</Col>
                <Col style={{ background: 'SpringGreen' }}>3</Col>
                <Col style={{ background: 'Fuchsia' }}>4</Col>
                <Col style={{ background: 'SpringGreen' }}>5</Col>
                <Col style={{ background: 'Fuchsia' }}>5</Col>
                <Col style={{ background: 'SpringGreen' }}>5</Col>
                <Col style={{ background: 'Fuchsia' }}>5</Col>
            </Row>
            <Row>
                <Col style={{ background: 'Orange' }}>1</Col>
                <Col style={{ background: 'Aquamarine' }}>2</Col>
                <Col style={{ background: 'Orange' }}>3</Col>
                <Col style={{ background: 'Aquamarine' }}>4</Col>
                <Col style={{ background: 'Orange' }}>5</Col>
                <Col style={{ background: 'Aquamarine' }}>5</Col>
                <Col style={{ background: 'Orange' }}>5</Col>
                <Col style={{ background: 'Aquamarine' }}>5</Col>
                <Col style={{ background: 'Orange' }}>5</Col>
            </Row>
            <Row>
                <Col style={{ background: 'SpringGreen' }}>1</Col>
                <Col style={{ background: 'Fuchsia' }}>2</Col>
                <Col style={{ background: 'SpringGreen' }}>3</Col>
                <Col style={{ background: 'Fuchsia' }}>4</Col>
                <Col style={{ background: 'SpringGreen' }}>5</Col>
                <Col style={{ background: 'Fuchsia' }}>5</Col>
                <Col style={{ background: 'SpringGreen' }}>5</Col>
                <Col style={{ background: 'Fuchsia' }}>5</Col>
                <Col style={{ background: 'SpringGreen' }}>5</Col>
                <Col style={{ background: 'Fuchsia' }}>5</Col>
            </Row>
            <Row>
                <Col style={{ background: 'Orange' }}>1</Col>
                <Col style={{ background: 'Aquamarine' }}>2</Col>
                <Col style={{ background: 'Orange' }}>3</Col>
                <Col style={{ background: 'Aquamarine' }}>4</Col>
                <Col style={{ background: 'Orange' }}>5</Col>
                <Col style={{ background: 'Aquamarine' }}>5</Col>
                <Col style={{ background: 'Orange' }}>5</Col>
                <Col style={{ background: 'Aquamarine' }}>5</Col>
                <Col style={{ background: 'Orange' }}>5</Col>
                <Col style={{ background: 'Aquamarine' }}>5</Col>
                <Col style={{ background: 'Orange' }}>5</Col>
            </Row>
            <Row>
                <Col style={{ background: 'SpringGreen' }}>1</Col>
                <Col style={{ background: 'Fuchsia' }}>2</Col>
                <Col style={{ background: 'SpringGreen' }}>3</Col>
                <Col style={{ background: 'Fuchsia' }}>4</Col>
                <Col style={{ background: 'SpringGreen' }}>5</Col>
                <Col style={{ background: 'Fuchsia' }}>5</Col>
                <Col style={{ background: 'SpringGreen' }}>5</Col>
                <Col style={{ background: 'Fuchsia' }}>5</Col>
                <Col style={{ background: 'SpringGreen' }}>5</Col>
                <Col style={{ background: 'Fuchsia' }}>5</Col>
                <Col style={{ background: 'SpringGreen' }}>5</Col>
                <Col style={{ background: 'Fuchsia' }}>5</Col>
            </Row>
        </Container>

        <hr />

        <Container>
            <Row>
                <Col col="1" style={{ background: 'Orange' }}>
                    1
                </Col>
            </Row>
            <Row>
                <Col col="2" style={{ background: 'SpringGreen' }}>
                    2
                </Col>
            </Row>
            <Row>
                <Col col="3" style={{ background: 'Orange' }}>
                    3
                </Col>
            </Row>
            <Row>
                <Col col="4" style={{ background: 'SpringGreen' }}>
                    4
                </Col>
            </Row>
            <Row>
                <Col col="5" style={{ background: 'Orange' }}>
                    5
                </Col>
            </Row>
            <Row>
                <Col col="6" style={{ background: 'SpringGreen' }}>
                    6
                </Col>
            </Row>
            <Row>
                <Col col="7" style={{ background: 'Orange' }}>
                    7
                </Col>
            </Row>
            <Row>
                <Col col="8" style={{ background: 'SpringGreen' }}>
                    8
                </Col>
            </Row>
            <Row>
                <Col col="9" style={{ background: 'Orange' }}>
                    9
                </Col>
            </Row>
            <Row>
                <Col col="10" style={{ background: 'SpringGreen' }}>
                    10
                </Col>
            </Row>
            <Row>
                <Col col="11" style={{ background: 'Orange' }}>
                    11
                </Col>
            </Row>
            <Row>
                <Col col="12" style={{ background: 'SpringGreen' }}>
                    12
                </Col>
            </Row>
        </Container>

        <hr />

        <Container>
            <Row>
                <Col col="1" sm="12" md="1" lg="12" xl="1" className="tre">
                    1
                </Col>
                <Col col="11">11</Col>
            </Row>
            <Row>
                <Col col="2">2</Col>
                <Col col="4">4</Col>
                <Col col="6">6</Col>
            </Row>
            <Row>
                <Col col="3">3</Col>
            </Row>
            <Row>
                <Col col="4">4</Col>
            </Row>
            <Row>
                <Col col="5">5</Col>
            </Row>
            <Row>
                <Col col="6">6</Col>
            </Row>
            <Row>
                <Col col="7">7</Col>
            </Row>
            <Row>
                <Col col="8">8</Col>
            </Row>
            <Row>
                <Col col="9">9</Col>
            </Row>
            <Row>
                <Col col="10">10</Col>
            </Row>
            <Row>
                <Col col="11">11</Col>
            </Row>
            <Row>
                <Col col="12">12</Col>
            </Row>
        </Container>
    </>
)

basic.story = {
    name: 'Basic',
}

export const noColNumbers = () => (
    <Container>
        <Row>
            <Col style={{ background: 'SpringGreen' }}>One</Col>
            <Col style={{ background: 'Orange' }}>Two</Col>
            <Col style={{ background: 'SpringGreen' }}>Three</Col>
        </Row>
    </Container>
)

noColNumbers.story = {
    name: 'No Col Numbers',
}

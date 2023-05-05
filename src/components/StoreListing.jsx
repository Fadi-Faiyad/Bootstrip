import { Container, Row, Col } from "react-bootstrap";
import styled from 'styled-components';

const styledContainer = styled(Container)`
margin-top: 40px;
text-align: center;
`
const styledRow = styled(Row)`
boorder-bottom: 1px solid #e8e9eb;
display: flex;
justify-content: space-evenly;
`

const CircleDiv = styled.div`
    width: 60px;
    height: 60px;
    backgrond-color: red;
    border: 1px soild red;
    border-radius: 100%;
    position: center;
`


export default function StoreListing() {
    return <>
        <styledContainer>
            <styledRow>
                <Row>
                    <Col xs='0.5'>
                        <CircleDiv />
                    </Col>
                    <Col>
                        <h5 style={ { frontWight: 'bold' } }> Aldi</h5>
                        <p>Delivery and Pick yp </p>
                    </Col>
                </Row>
                <Col sm='1'></Col>
                <Row>
                    <Col xs='0.5'>
                        <CircleDiv />
                    </Col>
                    <Col>
                        <h5 style={{ frontWight: 'bold' }}> Scott's Veg</h5>
                        <p>Delivery and Pick yp </p>
                    </Col>
                </Row>
                <Col sm='1'></Col>
                <Row>
                    <Col xs='0.5'>
                        <CircleDiv />
                    </Col>
                    <Col>
                        <h5 style={{ frontWight: 'bold' }}>Kroger</h5>
                        <p>Delivery and Pick yp </p>
                    </Col>
                </Row>
            </styledRow>
        </styledContainer>
    </>
}
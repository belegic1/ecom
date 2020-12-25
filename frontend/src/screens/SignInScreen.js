import React from 'react';
import Layout from '../components/Layout';
import {Container, Form, Button, Row,Col} from 'react-bootstrap';

const SignInScreen = () => {
    return (
        <Layout>
            <Container>
               <Row style={{marginTop: '15px'}}>
                   <Col md={{span: 6, offset: 3}}>
                        <Form>
                <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
                   </Col>
               </Row>
            </Container>
        </Layout>
    )
}

export default SignInScreen

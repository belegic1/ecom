import React from 'react';
import Layout from '../components/Layout';
import {Container, Form, Button, Row,Col} from 'react-bootstrap';
import Input from '../components/Input';

const SignUpScreen = () => {
    return (
        <div>
            <Layout>
            <Container>
               <Row style={{marginTop: '15px'}}>
                   <Col md={{span: 6, offset: 3}}>
                        <Form>
                            <Row>
                                <Col md={6}>
                                     <Input
                                     controlId='firstName'
                                     placeholder='First Name'
                                     label='First Name'
                                     type='text'
                                      />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                      <Input
                                     controlId='lastName'
                                     placeholder='Last Name'
                                     label='Last Name'
                                     type='text'
                                      />
                                </Col>
                            </Row>

                             <Input
                                     controlId='email'
                                     placeholder='Enter Email'
                                     label='Enter Email'
                                     type='email'
                                      />

                             <Input
                                     controlId='password'
                                     placeholder='Enter Password'
                                     label='Enter Password'
                                     type='password'
                                      />


                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
                   </Col>
               </Row>
            </Container>
        </Layout>
        </div>
    )
}

export default SignUpScreen

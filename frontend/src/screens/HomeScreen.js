import React from 'react';
import Layout from '../components/Layout';
import {Jumbotron} from 'react-bootstrap';

const HomeScreen = () => {
    return (
        <Layout>
            <Jumbotron
            style={{margin: '0 5rem', backgroundColor: '#fff'}}
             className='text-center'>
                <h1>Admin Panel</h1>
            </Jumbotron>
        </Layout>
    )
}

export default HomeScreen

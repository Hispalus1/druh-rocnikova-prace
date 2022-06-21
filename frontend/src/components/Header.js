import React from 'react';
import { HEADER } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { Image,Row} from 'react-bootstrap';
import './header.css'

export const Header = (props) => {
    const { loading, error, data } = useQuery(HEADER);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{JSON.stringify(error)}</p>;
    const header = data.header.data.attributes;   
        
    return (
        <Row lg={12}>
        <header className='container-fluidp-5 text-center'>
            <div class="owo">
                <Image src={ `http://localhost:1337${header.logo.data.attributes.url }` } />
            </div>
        </header>
        </Row>
        
    );
}
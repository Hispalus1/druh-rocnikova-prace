import React from 'react';
import { Image,Row} from 'react-bootstrap';
import './Footer.css';



export const Footer = () => {
    let year = new Date().getFullYear();
    const logoStyle = {
        width: '40%',
        margin: '20px auto',
        padding: '20px auto',
        boxShadow: '5px 5px'
    };

    return (
        <div class="position">
            <Row lg={12}>
        <footer className='bg-dark mt-3 p-3 text-center'>
            <p style={logoStyle}><Image src={'/normal.jpg'} style={{height:'60px',borderRadius:'20%'}} /></p>
            <p className='copyright'>&copy; {year} - Ročníkový projekt IT2 - autor: <b>(plagiator)Lukáš Hrňa</b></p>
        </footer>
        </Row>
        </div>
    );
}
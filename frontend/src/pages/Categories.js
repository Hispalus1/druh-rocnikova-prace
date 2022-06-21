import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client'
import { Container, Row, Col, Image } from 'react-bootstrap';
import { ArticlesGrid } from '../components/Article/ArticlesGrid';
import { CATEGORY } from '../utils/queries';


export default function Categories() {
    const { id } = useParams(); 
    const { loading, error, data } = useQuery(CATEGORY, { 
        variables: { id: id }
    });
    if (loading) return <p>Loading...</p>
    if (error) return <p>{ JSON.stringify(error) }</p>    
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h2 className="text-center p-2 mt-3 text-uppercase">
                        {data.category.data.attributes.icon.data && 
                            <Image 
                                src={`http://localhost:1337${data.category.data.attributes.icon.data.attributes.url}`} 
                                style={{ height: '40px', margin: '10px', backgroundColor: '#888', borderRadius: '20px'}}
                            />
                        }
                        { data.category.data.attributes.name }
                    </h2>
                    <hr></hr>
                </Col>
            </Row>
            <ArticlesGrid sort="releasedAt:desc" search="" categoryId={id} categoryShortname="*" />
        </Container>
    );
}
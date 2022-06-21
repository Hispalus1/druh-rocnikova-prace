import React from 'react'
import { Container, Row, Col, Image} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client'
import { ARTICLE } from '../../utils/queries';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import './detail.css';

export default function ArticleDetail() {
    const { id } = useParams();
    const { loading, error, data } = useQuery(ARTICLE, { 
        variables: { id: id }
    });
    if (loading) return <p>Loading...</p>
    if (error) return <p>{ JSON.stringify(error) }</p>

    return (
        <Container className='mb-3'>
            <Row>
                <Col>
                    <h2 className="text-center  p-2 mt-3 text-white text-uppercase">{ data.article.data.attributes.title }</h2>
                </Col>
            </Row>
                    <div class="color"><ReactMarkdown children={data.article.data.attributes.content} remarkPlugins={[remarkGfm]} /></div>
                    <figure class="big">
                        <Image src={`http://localhost:1337${data.article.data.attributes.image.data.attributes.url}`} className="img-fluid"
                         style={{
                            minWidth: '15%',
                            height: 'auto',
                          }} />
                    </figure>
                
        </Container>
    );
}
import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { HOMEPAGE } from "./../utils/queries";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import './homepage.css';

export default function Homepage() {
  const { loading, error, data } = useQuery(HOMEPAGE);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;
  const homepage = data.homepage.data.attributes;

  return (
    <Container fluid>
      <div class="img">
      <Carousel>
        { homepage.carousel.banner.map(ban => (
            <Carousel.Item key={ban.id}>
                <a href={ban.link} target="_blank" rel="noopener noreferrer">
                    <img
                    className="d-block w-100"
                    src={`http://localhost:1337${ ban.photo.data.attributes.url }`}
                    alt="slide"
                    />
                    <Carousel.Caption>
                        <h3>{ ban.info }</h3>
                    </Carousel.Caption>
                </a>
            </Carousel.Item>
        )) 
        }  
      </Carousel>
      </div>

      <Row xs={1} sm={1} md={1} lg={1}>
        <div class="center">
        <Col className="p-2 mt-3 text-center">
          <h1>About</h1>
          <hr></hr>
          <ReactMarkdown className="p-2 mt-3 text-white">{homepage.about}</ReactMarkdown>
        </Col>
        </div>
      </Row>
    </Container>
  );
}

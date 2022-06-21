import React from "react";
import { Row, Col, Image} from "react-bootstrap";
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';

export const PersonCard = (props) => {
  const { name, birth, death, bio, photo } = props;
  let birthdate = new Date(birth.split('-')).toLocaleDateString();
  let deathdate = death ? new Date(death.split('-')).toLocaleDateString() : 'žije';
  return (
    <Row>
      <Col xs={4} md={1}>
          <figure>
            { photo && (
              <Image
                src={`http://localhost:1337${photo.attributes.url}`}
                className='img-fluid rounded-circle'
                alt={ name }
                width='100'
              />
            )}
            </figure>            
      </Col>
      <Col xs={8} md={11} xl={12}>
          <h4>
            <b>{ name }</b> ({birth && (<span>{birthdate}</span>)} - <span>{deathdate}</span>)
          </h4>
         <p>
        
        </p>
      </Col>
      <Col xs={12} md={12}>
        
          <ReactMarkdown children={bio} remarkPlugins={[remarkGfm]} />
       
      </Col>      
    </Row>  
  );
};

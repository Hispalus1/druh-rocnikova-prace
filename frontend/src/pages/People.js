import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { PEOPLE } from "../utils/queries";
import { PersonCard } from "../components/People/PersonCard";
import './people.css';

export default function People() {
  const { loading, error, data } = useQuery(PEOPLE);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;
  const people = data.people.data;

  return (
    <main class="container">
    <Container fluid>
      <Row>
        <Col>
          <h2 className="text-center p-2 mt-3 text-uppercase">
            Vývojáři
          </h2>
        </Col>
      </Row>
      <div class="uwu">
      {people.map((person) => (
        <PersonCard
          key={person.id}
          name={person.attributes.name}
          birth={person.attributes.birth}
          death={person.attributes.death}
          bio={person.attributes.bio}
          photo={person.attributes.photo.data}
        />
      ))}
      </div>
    </Container>
    </main>
  );
}

import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { CommitList } from './components/commit-list';

export const App: React.FC = () => {
  return (
    <Container>
      <Jumbotron>
        <h1 className="header">Github commit history</h1>
      </Jumbotron>
      <CommitList />
    </Container>
  );
};

import './App.scss';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Header from './components/header/Header';
import Tasks from './components/tasks/Tasks';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckCircle, faTrashAlt)

function App() {
  return (
    <div>
      <Header/>
      <Container>
        <Tasks/>
      </Container>
    </div>
  );
}

export default App;

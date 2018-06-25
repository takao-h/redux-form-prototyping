import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import showResults from "./showResult";
import MyForm from "./MyForm";
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Grid>
          <Row>
            <Col sm={10}>
              <h3>フォーム</h3>
              <MyForm onSubmit={showResults}/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;

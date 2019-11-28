import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import Skills from './components/Skills';


function App() {
	return (
		<div className="App">
			<Container>
				<Row className="justify-content-md-center">
					<Col sm={8}>
            <Header />
          </Col>
				</Row>
        <Skills></Skills>
			</Container>
		</div>
	);
}

export default App;

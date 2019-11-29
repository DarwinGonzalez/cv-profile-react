import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import styled from 'styled-components';

const StyleDescription = styled.div`
	margin-top: 10%;
	text-align: left;
`;

const StyleDescriptionYoda = styled.div`
	margin-top: 10%;
	text-align: center;
`;

const StylePhraseYoda = styled.p`
    margin-top: 0.5%;
    font-size: 1.8rem;
`;

const About = () => (
	<Row className="justify-content-md-center">
		<Col sm={6}>
			<StyleDescription>
				<h2>¿Quién soy yo?</h2>
				<p>
					Graduado en Ingeniería Informática en la Universidad de la Laguna (ULL) especializado en la rama de
					Tecnologías de la Información (IT). Recientemente he realizado un Máster en Tecnologías Web,
					Computación en la Nube y Aplicaciones Móviles en la Universidad de Valencia.
				</p>
			</StyleDescription>
		</Col>
		<Col sm={6}>
			<StyleDescriptionYoda>
				<Image src="./images/yoda.png" thumbnail />
				<StylePhraseYoda>"Do. Or do not. There is no try." - Yoda</StylePhraseYoda>
			</StyleDescriptionYoda>
		</Col>
	</Row>
);

export default About;

import React from 'react';
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';
import { Row, Col } from 'react-bootstrap';

const StyleContact = styled.div`
	margin-top: 6%;
	padding-bottom: 10%;

	.icon {
		margin-right: 4%;
	}

	h1 {
		margin-bottom: 4%;
	}
`;

const Contact = () => (
	<StyleContact>
		<Row className="justify-content-md-center">
			<Col sm={9}>
				<h1>Contacta conmigo</h1>
				<SocialIcon className="icon" url="https://github.com/DarwinGonzalez/" />
				<SocialIcon className="icon" url="https://linkedin.com/in/darwin-gonzalez-suarez" />
				<SocialIcon url="https://twitter.com/darwinmaking" />
			</Col>
		</Row>
	</StyleContact>
);

export default Contact;

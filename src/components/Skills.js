import React from 'react';
import {
	DiAngularSimple,
	DiCss3,
	DiGit,
	DiHtml5,
	DiJsBadge,
	DiMongodb,
	DiMysql,
	DiReact,
	DiNodejsSmall,
	DiDocker
} from 'react-icons/di';
import { Line } from 'rc-progress';
import { Col, Row } from 'react-bootstrap';

const Skills = () => (
	<Row className="justify-content-md-center">
		<Col sm={6}>
			<Row>
				<Col sm={2}>
					<DiAngularSimple className="dev-icon" />
				</Col>
				<Col sm={9}>
					<Line percent="70" strokeWidth="4" strokeColor="#b52e31" />
				</Col>
			</Row>
			<Row>
				<Col sm={2}>
					<DiReact className="dev-icon" />
				</Col>
				<Col sm={10}>
					<Line percent="65" strokeWidth="4" strokeColor="#00d8ff" />
				</Col>
			</Row>
			<Row>
				<Col sm={2}>
					<DiNodejsSmall className="dev-icon" />
				</Col>
				<Col sm={10}>
					<Line percent="80" strokeWidth="4" strokeColor="#6cc24a" />
				</Col>
			</Row>
			<Row>
				<Col sm={2}>
					<DiCss3 className="dev-icon" />
				</Col>
				<Col sm={10}>
					<Line percent="60" strokeWidth="4" strokeColor="#00afe1" />
				</Col>
			</Row>
			<Row>
				<Col sm={2}>
					<DiGit className="dev-icon" />
				</Col>
				<Col sm={10}>
					<Line percent="80" strokeWidth="4" strokeColor="#e24329" />
				</Col>
			</Row>
		</Col>
		<Col sm={6}>
			<Row>
				<Col sm={2}>
					<DiHtml5 className="dev-icon" />
				</Col>
				<Col sm={10}>
					<Line percent="80" strokeWidth="4" strokeColor="#e34f26" />
				</Col>
			</Row>
			<Row>
				<Col sm={2}>
					<DiJsBadge className="dev-icon" />
				</Col>
				<Col sm={10}>
					<Line percent="85" strokeWidth="4" strokeColor="#ffc600" />
				</Col>
			</Row>
			<Row>
				<Col sm={2}>
					<DiMysql className="dev-icon" />
				</Col>
				<Col sm={10}>
					<Line percent="60" strokeWidth="4" strokeColor="#00758f" />
				</Col>
			</Row>
			<Row>
				<Col sm={2}>
					<DiMongodb className="dev-icon" />
				</Col>
				<Col sm={10}>
					<Line percent="65" strokeWidth="4" strokeColor="#589636" />
				</Col>
			</Row>
			<Row>
				<Col sm={2}>
					<DiDocker className="dev-icon" />
				</Col>
				<Col sm={10}>
					<Line percent="75" strokeWidth="4" strokeColor="#0db7ed" />
				</Col>
			</Row>
		</Col>
	</Row>
);

export default Skills;

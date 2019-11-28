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
				<Col sm={4}>
					<DiAngularSimple className="dev-icon" />
				</Col>
				<Col sm={8}>
					<Line percent="10" strokeWidth="4" strokeColor="#D3D3D3" />
				</Col>
			</Row>
			<Row>
				<Col sm={4}>
					<DiReact className="dev-icon" />
				</Col>
				<Col sm={8}>
					<Line percent="10" strokeWidth="4" strokeColor="#D3D3D3" />
				</Col>
			</Row>
			<Row>
				<Col sm={4}>
					<DiNodejsSmall className="dev-icon" />
				</Col>
				<Col sm={8}>
					<Line percent="10" strokeWidth="4" strokeColor="#D3D3D3" />
				</Col>
			</Row>
			<Row>
				<Col sm={4}>
					<DiCss3 className="dev-icon" />
				</Col>
				<Col sm={8}>
					<Line percent="10" strokeWidth="4" strokeColor="#D3D3D3" />
				</Col>
			</Row>
			<Row>
				<Col sm={4}>
					<DiGit className="dev-icon" />
				</Col>
				<Col sm={8}>
					<Line percent="10" strokeWidth="4" strokeColor="#D3D3D3" />
				</Col>
			</Row>
		</Col>
		<Col sm={6}>
			<Row>
				<Col sm={4}>
					<DiHtml5 className="dev-icon" />
				</Col>
				<Col sm={8}>
					<Line percent="10" strokeWidth="4" strokeColor="#D3D3D3" />
				</Col>
			</Row>
			<Row>
				<Col sm={4}>
					<DiJsBadge className="dev-icon" />
				</Col>
				<Col sm={8}>
					<Line percent="10" strokeWidth="4" strokeColor="#D3D3D3" />
				</Col>
			</Row>
			<Row>
				<Col sm={4}>
					<DiMysql className="dev-icon" />
				</Col>
				<Col sm={8}>
					<Line percent="10" strokeWidth="4" strokeColor="#D3D3D3" />
				</Col>
			</Row>
			<Row>
				<Col sm={4}>
					<DiMongodb className="dev-icon" />
				</Col>
				<Col sm={8}>
					<Line percent="10" strokeWidth="4" strokeColor="#D3D3D3" />
				</Col>
			</Row>
			<Row>
				<Col sm={4}>
					<DiDocker className="dev-icon" />
				</Col>
				<Col sm={8}>
					<Line percent="10" strokeWidth="4" strokeColor="#D3D3D3" />
				</Col>
			</Row>
		</Col>
	</Row>
);

export default Skills;

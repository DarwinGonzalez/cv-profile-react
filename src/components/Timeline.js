import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { DiJava, DiAngularSimple, DiJsBadge, DiNodejsSmall, DiDocker, DiDatabase } from 'react-icons/di';

const TimelineComponent = () => (
	<Row className="justify-content-md-center">
		<Col sm={10}>
			<Timeline lineColor={'#ddd'}>
				<TimelineItem key="001" dateText="8/2019 – Actualidad" style={{ color: '#e86971' }}>
					<h3>Junior Full-Stack Developer</h3>
					<h4>Capgemini ADCenter de Valencia</h4>
					<p>
                        <DiAngularSimple className="dev-icon-md"></DiAngularSimple>
                        <DiJsBadge className="dev-icon-md" />
                        <DiNodejsSmall className="dev-icon-md" />
                        <DiDocker className="dev-icon-md"></DiDocker>
                        <DiDatabase className="dev-icon-md"></DiDatabase>
					</p>
				</TimelineItem>
                <TimelineItem
					key="002"
					dateText="1/2019 – 8/2019"
					dateInnerStyle={{ background: '#61b8ff'}}>
					<h3>Intern - Consultant</h3>
					<h4>Capgemini ADCenter de Valencia</h4>
					<p>
                        <DiAngularSimple className="dev-icon-md"></DiAngularSimple>
                        <DiJsBadge className="dev-icon-md" />
                        <DiNodejsSmall className="dev-icon-md" />
                        <DiDocker className="dev-icon-md"></DiDocker>
                        <DiDatabase className="dev-icon-md"></DiDatabase>
					</p>
				</TimelineItem>
				<TimelineItem
					key="003"
					dateText="3/2018 – 6/2018"
					dateInnerStyle={{ background: '#61b8ff'}}>
					<h3>Estudiante en prácticas</h3>
					<h4>SISTEMAS DE DATOS SL - Servicios y tecnologías de la información</h4>
					<p>
						<DiJava className="dev-icon-md"></DiJava>
					</p>
				</TimelineItem>
				<TimelineItem key="004" dateText="2018 – 2019" dateInnerStyle={{ background: '#76bb7f' }}>
					<h3>Máster en Tecnologías Web, Computación en la Nube y Aplicaciones Móviles</h3>
					<h4>Universidad de Valencia</h4>
				</TimelineItem>
                <TimelineItem key="005" dateText="2013 – 2018" dateInnerStyle={{ background: '#76bb7f' }}>
					<h3>Grado en Ingeniería informática</h3>
					<h4>Universidad de La Laguna</h4>
				</TimelineItem>
			</Timeline>
		</Col>
	</Row>
);

export default TimelineComponent;

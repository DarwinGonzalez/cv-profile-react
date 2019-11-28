import React from 'react';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';

const StyleTitle = styled.h1`
    font-size: 48px;
`;

const StyleSubTitle = styled.h2`
    font-size: 32px;
`;

const StyledHeader = styled.header`
    margin-bottom: 10%;
`;


const Header = () => (
    <StyledHeader>
        <Image src="./images/avatar.png" roundedCircle />
        <StyleTitle>
            Darwin González Suárez
        </StyleTitle>
        <StyleSubTitle>
            Junior Full Stack Developer
        </StyleSubTitle>
    </StyledHeader>
)

export default Header;
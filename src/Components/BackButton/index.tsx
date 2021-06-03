import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BackButtonWrapper = styled.div`
min-height: 90px;
margin: 0 10px;
display: flex;
justify-content: center;
align-items: center;
`;

const HomeLinkWrapper = styled.div`
  border: 0;
  background-color: #FFCD24;
  padding: 10px;
  font-size: 16px;
  border-radius: 3px;
  color: #33393D;
  :hover{
    cursor: pointer;
    text-decoration: underline;
  }
  :active{
    color: #666B6E;
  }
`;

const BackButton: FC = () => (
  <BackButtonWrapper>
    <Link style={{ textDecoration: 'none' }} to="/">
      <HomeLinkWrapper>
        Go Back
      </HomeLinkWrapper>
    </Link>
  </BackButtonWrapper>
);

export default BackButton;

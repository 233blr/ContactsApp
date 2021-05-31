import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
min-height: 90px;
margin: 0 10px;
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
color:#FFF;
`;

const H1Wrapper = styled.h1`
font-family: "Gill Sans";
font-style: italic;
::after {
  content: "ReactContacts"
}
@media(max-width: 450px) {
  ::after {
    content: "RC"
  }
}
`;

const LiadersPageWrapper = styled.div`
border: 0;
background-color: #FFCD24;
padding: 10px;
font-size: 16px;
text-decoration: underline;
color: #33393D;
border-radius: 3px;
cursor: pointer;
`;

const UlWrapper = styled.ul`
position: absolute;
right: 0;
bottom: 0;
display: flex;
flex-direction: row;
gap: 10px;
`;

const LiWrapper = styled.li`
list-style: none;
cursor: pointer;
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <H1Wrapper />
      <LiadersPageWrapper>
        To Liaders Page
      </LiadersPageWrapper>
      <UlWrapper>
        <LiWrapper>All</LiWrapper>
        <LiWrapper>Name</LiWrapper>
        <LiWrapper>Rating</LiWrapper>
      </UlWrapper>
    </HeaderWrapper>
  );
};

export default Header;

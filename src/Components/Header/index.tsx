import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.div`
min-height: 90px;
margin: 0 10px;
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
color:#FFF;
`;

const LeadersLinkWrapper = styled.div`
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

const H1Wrapper = styled.h1`
font-family: "Gill Sans",sans-serif;
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
:hover{
cursor: pointer;
text-decoration: underline;
}
:active{
  color: #9DC8E4;
}
`;

const listItems: string[] = [
  'Name', 'Login', 'Email', 'Phone', 'Rating',
];

// const clickHandler = (str: string) => {
//   console.log(str);
// };

const Header: FC = () => (
  <HeaderWrapper>
    <H1Wrapper />
    <Link style={{ textDecoration: 'none' }} to="/leaders">
      <LeadersLinkWrapper>Leaders</LeadersLinkWrapper>
    </Link>
    <UlWrapper>
      {listItems.map((item) => (
        <LiWrapper
          key={item}
          // onClick={() => clickHandler(item)}
        >
          {item}
        </LiWrapper>
      ))}
    </UlWrapper>
  </HeaderWrapper>
);

export default Header;

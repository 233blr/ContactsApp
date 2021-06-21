import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import sortingContacts from '../../Store/Actions/sortContactAction';

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

const Header: FC = () => {
  const dispatch = useDispatch();

  const [currentCategory, setCategory] = useState('');

  return (
    <HeaderWrapper>
      <H1Wrapper />
      <Route path="/" exact>
        <Link style={{ textDecoration: 'none' }} to="/leaders">
          <LeadersLinkWrapper>Leaders</LeadersLinkWrapper>
        </Link>
      </Route>
      <Route path="/leaders" exact>
        <Link style={{ textDecoration: 'none' }} to="/">
          <LeadersLinkWrapper>Go Back</LeadersLinkWrapper>
        </Link>
      </Route>
      <Route path="/" exact>
        <UlWrapper>
          {listItems.map(item => (
            <LiWrapper
              onClick={() => {
                dispatch(sortingContacts(item));
                setCategory(item);
              }}
              style={
                currentCategory === item
                  ? { color: '#FFCD24' }
                  : { color: '#FFF' }
              }
              key={item}
            >
              {item}
            </LiWrapper>
          ))}
        </UlWrapper>
      </Route>
    </HeaderWrapper>
  );
};

export default Header;

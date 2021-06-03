import React, { FC } from 'react';
import styled from 'styled-components';
import LeaderItem from './LeaderItem';
import { ContactType } from '../../Types/contactsReduser';

const LeadersListWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 10px 10px;
margin: 10px;
`;

const LeadersList: FC = () => {
  const response: ContactType[] = [
    {
      id: '3b83bf69-0af5-4980-bc5e-05f443c99104',
      image: 'https://randomuser.me/api/portraits/med/women/29.jpg',
      fullImage: 'https://randomuser.me/api/portraits/women/29.jpg',
      name: 'Christy',
      lastName: 'Reynolds',
      login: 'tinybird395',
      email: 'christy.reynolds@example.com',
      phone: '(275)-610-2652',
      rating: 1,
    },
    {
      id: '3f2eb2d1-8bae-4e6e-97b8-1126b80622fb',
      image: 'https://randomuser.me/api/portraits/med/men/57.jpg',
      fullImage: 'https://randomuser.me/api/portraits/men/57.jpg',
      name: 'Franklino',
      lastName: 'Novaes',
      login: 'crazyfrog235',
      email: 'franklino.novaes@example.com',
      phone: '(45) 8559-0293',
      rating: 3,
    },
    {
      id: 'f1c6ee45-2f99-478d-99f0-4f5bb0bb15eb',
      image: 'https://randomuser.me/api/portraits/med/women/87.jpg',
      fullImage: 'https://randomuser.me/api/portraits/women/87.jpg',
      name: 'Hasibe',
      lastName: 'Van de Belt',
      login: 'purpleleopard368',
      email: 'hasibe.vandebelt@example.com',
      phone: '(886)-424-9768',
      rating: 2,
    }];
  return (
    <LeadersListWrapper>
      {response.map((item) => (
        <LeaderItem
          key={item.id}
          data={item}
        />
      ))}
    </LeadersListWrapper>
  );
};

export default LeadersList;

import React from 'react';
import styled from 'styled-components';

import ContactItem from './ContactItem';

const ContactListWrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit,minmax(580px, 1fr));
gap: 10px 10px;
`;

const ContactList: React.FC = () => {
  return (
    <ContactListWrapper>
      <ContactItem />
      <ContactItem />
      <ContactItem />
      <ContactItem />
    </ContactListWrapper>
  );
};

export default ContactList;

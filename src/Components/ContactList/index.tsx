import React from 'react';
import styled from 'styled-components';
import useTypedSelector from '../../Hooks/useTypedSelector';
import { ContactState, Contact } from '../../Types/getContactsReduser';
import ContactItem from './ContactItem';

const ContactListWrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit,minmax(580px, 1fr));
gap: 10px 10px;
`;

const ContactList: React.FC = () => {
  const { contacts }: ContactState = useTypedSelector(
    (store) => { return store; },
  );

  console.log(contacts);

  return (
    <ContactListWrapper>
      {contacts && contacts.map((contact: Contact) => {
        return (
          <ContactItem key={contact.id} data={contact} />
        );
      })}
    </ContactListWrapper>
  );
};

export default ContactList;

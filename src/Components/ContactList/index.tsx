import React from 'react';
import styled from 'styled-components';
import useTypedSelector from '../../Hooks/useTypedSelector';
import { ContactsState, ContactType } from '../../Types/getContactsReduser';
import ContactItem from './ContactItem';

const ContactListWrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit,minmax(580px, 1fr));
gap: 10px 10px;
`;

const ContactList: React.FC = () => {
  const { contacts, error }: ContactsState = useTypedSelector(
    (store) => { return store.listOfContacts; },
  );

  return (
    <ContactListWrapper>
      {error ? <h3>{error}</h3>
        : contacts.map((contact: ContactType) => {
          return <ContactItem key={contact.id} data={contact} />;
        })}

    </ContactListWrapper>
  );
};

export default ContactList;

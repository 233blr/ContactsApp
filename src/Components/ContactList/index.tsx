import React, { FC } from 'react';
import styled from 'styled-components';
import useTypedSelector from '../../Hooks/useTypedSelector';
import { ContactsState, ContactType } from '../../Types/getContactsReduser';
import ContactItem from './ContactItem';
import PreLoader from '../Preloader';

const ContactListWrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit,minmax(280px, 1fr));
justify-content: space-between;
gap: 10px 10px;
margin: 10px;
`;

const ContactList: FC = () => {
  const { contacts, error, loading }: ContactsState = useTypedSelector(
    (store) => store.listOfContacts,
  );

  return (
    <ContactListWrapper>
      {loading ? <PreLoader />
        : error ? <h3>{error}</h3>
          : contacts.map(
            (contact: ContactType) => (
              <ContactItem key={contact.id} data={contact} />
            ),
          )}

    </ContactListWrapper>
  );
};

export default ContactList;

import React, { FC } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import useTypedSelector from '../../Hooks/useTypedSelector';
import { ContactType } from '../../Types/contactsReducer';
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
  const history = useHistory();
  const { contacts, error, loading } = useTypedSelector(
    store => store.listOfContacts,
  );

  if (error) history.push('/not-found');

  return (
    <ContactListWrapper>
      {loading ? <PreLoader />
        : contacts.map(
          (contact: ContactType) => (
            <ContactItem key={contact.id} data={contact} />
          ),
        )}
    </ContactListWrapper>
  );
};

export default ContactList;

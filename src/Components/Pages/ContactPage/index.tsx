import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Header } from '../..';
import getFullContact from '../../../Store/Actions/getFullContactAction';
import { ContactPageParams } from '../../../Types/getFullContactAction';
import useTypedSelector from '../../../Hooks/useTypedSelector';

const DivWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
max-width: 1200px;
height: 100vh;
`;

const ContactWrapper = styled.div`
display: flex;
flex-diraction: column;
width: 320px;
border-radius: 5px;
background-color: #FFF;
`;

const ContactPage: FC = () => {
  const params = useParams<ContactPageParams>();
  const dispatch = useDispatch();

  const { contact, loading } = useTypedSelector(
    store => store.fullContact,
  );

  useEffect(() => {
    dispatch(getFullContact(params.id));
  }, []);

  return (
    <>
      <Header />
      <DivWrapper>
        <ContactWrapper>
          {loading}
          {contact.length ? 'contact is here!' : 'NO contact'}
        </ContactWrapper>
      </DivWrapper>
    </>
  );
};
export default ContactPage;

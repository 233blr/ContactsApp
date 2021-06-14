import React from 'react';
import styled from 'styled-components';
import useTypedSelector from '../../../Hooks/useTypedSelector';

const DivWrapper = styled.div`
width: 100%;
height: 70vh;
display: flex;
align-items: center;
justify-content: center;
color: #FFF;
`;

const ErrorPage: React.FC = () => {
  const { error } = useTypedSelector(
    store => store.listOfContacts,
  );

  return (
    <DivWrapper data-testid="errorPage">
      <p>{error}</p>
    </DivWrapper>
  );
};

export default ErrorPage;

import React, { FC } from 'react';
import styled from 'styled-components';
import { BackButton, LeadersList } from '../..';

const Leaders: FC = () => {
  const LeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1200px;
  height: 100vh;
  `;

  return (
    <LeaderWrapper>
      <BackButton />
      <LeadersList />
    </LeaderWrapper>
  );
};

export default Leaders;

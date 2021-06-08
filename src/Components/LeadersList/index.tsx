import React, { FC } from 'react';
import styled from 'styled-components';
import LeaderItem from './LeaderItem';
import useTypedSelector from '../../Hooks/useTypedSelector';
import { PreLoader } from '../index';

const LeadersListWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 10px 10px;
margin: 10px;
`;

const LeadersList: FC = () => {
  const { leaders, loading } = useTypedSelector(
    store => store.listOfLeaders,
  );

  return (
    <LeadersListWrapper>
      {loading ? <PreLoader />
        : leaders.map(item => (
          <LeaderItem
            key={item.id}
            data={item}
          />
        ))}
    </LeadersListWrapper>
  );
};

export default LeadersList;

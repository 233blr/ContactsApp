import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import LeaderItem from './LeaderItem';
import useTypedSelector from '../../Hooks/useTypedSelector';
import getLeaders from '../../Store/Actions/getLeadersAction';
import { PreLoader } from '../index';

const LeadersListWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 10px 10px;
margin: 10px;
`;

const NoLeadersWrapper = styled.div`
color: #FFF;
text-align: center;
`;

const LeadersList: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLeaders());
  }, []);

  const { leaders, loading } = useTypedSelector(
    store => store.listOfLeaders,
  );

  return (
    <LeadersListWrapper data-testid="leadersListComponent">
      {loading ? <PreLoader />
        : leaders.length === 0
          ? <NoLeadersWrapper>No Leders 🧐!</NoLeadersWrapper>
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

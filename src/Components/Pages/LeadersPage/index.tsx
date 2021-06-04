import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { LeadersList, Header } from '../..';
import getLeaders from '../../../Store/Actions/getLeadersAction';

const Leaders: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLeaders());
  }, []);

  return (
    <>
      <Header />
      <LeadersList />
    </>
  );
};

export default Leaders;

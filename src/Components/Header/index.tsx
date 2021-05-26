import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
height: 30px;
display: flex;
justify-content: space-between;
align-items: center;
padding-right: 5px;
color:#204969;
`;

const SelectWrapper = styled.select`
border: 0;
background-color: #fff7f7;
font-size: 16px;
text-decoration: underline;
color: #204969;
`;

const SpanWrapper = styled.span`
font-weight: 600;
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <div>leaders</div>
      <SpanWrapper>
        Sort by:
        <SelectWrapper>
          {/* <option value="all" selected>all</option>
          <option value="name">name</option>
          <option value="rating">rating</option> */}
        </SelectWrapper>
      </SpanWrapper>
    </HeaderWrapper>
  );
};

export default Header;

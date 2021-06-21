import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';
import {
  AiOutlineUser,
  AiOutlineCompass,
  AiOutlinePhone,
  AiOutlineMail,
  AiFillStar,
} from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import useTypedSelector from '../../Hooks/useTypedSelector';
import addRating from '../../Store/Actions/addRatingAction';

const DivWrapper = styled.div`
  height: 100vh;
`;

const ContactWrapper = styled.div`
  display: grid;
  grid-template-rows: 200px;
  grid-template-areas:
  'img' 'img' 'rating' 'name' 'login' 'phone' 'email' 'button';
  align-items: center;
  justify-items: center;
  gap: 30px 10px;
  position: relative;
  border-radius: 5px;
  background-color: #FFF;
`;

const ImgWrapper = styled.img`
  margin-top: 40px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid #9DC8E4;
`;

const ButtonWrapper = styled.button`
  bottom: 15px;
  border: 0;
  background-color: #FFCD24;
  padding: 10px;
  font-size: 16px;
  border-radius: 3px;
  color: #33393D;
  :hover{
    cursor: pointer;
    text-decoration: underline;
  }
  :active{
    color: #666B6E;
  }
`;

const ItemWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: auto 1fr auto;
  font-size: 25px;
  width: 50%;
`;

const SpanWrapper = styled.span`
  color: #666B6E;
`;

const RatingBodyWrapper = styled.div`
  font-size: 26px;
  :hover > .stars {
    cursor: pointer;
  }
`;

const FullContact: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { contact } = useTypedSelector(store => store.fullContact);

  const goBack = () => history.push('/');

  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const handleRatingClick = (rating: number) => {
    const clickStates = [...clicked];
    for (let i = 0; i < 5; i += 1) {
      clickStates[i] = i <= rating;
    }
    setClicked(clickStates);
    dispatch(addRating(rating + 1, contact?.id));
  };

  const getRating = () => {
    const rating = contact?.rating;
    if (rating === undefined) return;
    handleRatingClick(rating - 1);
  };

  useEffect(() => {
    getRating();
  }, []);

  return (
    <DivWrapper data-testid="fullContactComponent">
      <ContactWrapper>
        <ImgWrapper src={contact?.fullImage} alt={contact?.name} />
        <RatingBodyWrapper>
          {clicked.map((star, index) => (
            <AiFillStar
              key={uuidv4()}
              onClick={() => handleRatingClick(index)}
              className="stars"
              style={star ? { color: '#FFCD24' } : { color: '#666B6E' }}
            />
          ))}
        </RatingBodyWrapper>
        <ItemWrapper>
          <SpanWrapper><AiOutlineUser /></SpanWrapper>
          <span>{`${contact?.name} ${contact?.lastName}`}</span>
          <span />
        </ItemWrapper>
        <ItemWrapper>
          <SpanWrapper><AiOutlineCompass /></SpanWrapper>
          <span>{contact?.login}</span>
          <span />
        </ItemWrapper>
        <ItemWrapper>
          <SpanWrapper><AiOutlinePhone /></SpanWrapper>
          <span>{contact?.phone}</span>
          <span />
        </ItemWrapper>
        <ItemWrapper>
          <SpanWrapper><AiOutlineMail /></SpanWrapper>
          <span>{contact?.email}</span>
          <span />
        </ItemWrapper>
        <ButtonWrapper
          type="button"
          onClick={goBack}
        >
          Go Back
        </ButtonWrapper>
      </ContactWrapper>
    </DivWrapper>
  );
};
export default FullContact;

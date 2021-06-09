import React, { FC } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AiOutlineDelete, AiOutlineIdcard } from 'react-icons/ai';
import getFullContact from '../../../Store/Actions/getFullContactAction';
import deleteContact from '../../../Store/Actions/deleteContactAtions';
import { ContactItemType } from '../../../Types/contactItem';
import { RatingList } from '../..';

const ContactItemWrapper = styled.div`
display: grid;
grid-template-rows: 100px;
grid-template-areas:
'img' 'img' 'discription' 'vue' 'list' 'rating' 'buttons';
align-items: center;
justify-items: center;
height: 280px;
border-radius: 5px;
background-color: #FFF;
color: #33393D;
position: relative;
overflow: hidden;
:hover > .DeleteBtn {
  top: 15px;
  right: 15px;
};
:hover > .ViewBtn {
  top: 15px;
  left: 15px;
};
`;

const ImgWrapper = styled.img`
border-radius: 50%;
border: 3px solid #FFCD24;
padding: 3px;
`;

const NameWrapper = styled.div`
font-family: "Gill Sans",sans-serif;
font-weight: bold;
`;

const ViewBtnWrapper = styled.button`
position: absolute;
top: -20px;
left: -20px;
width: 25px;
height: 25px;
border: none;
border-radius: 50%;
background-color: #FFF;
transform-origin: center center;
color: #1FF0BD;
font-size: 20px;
cursor: pointer;
transition: all 0.5s ease-in-out 0.5s;
`;

const DeleteBtnWrapper = styled.button`
position: absolute;
display: block;
top: -20px;
right: -20px;
width: 25px;
height: 25px;
border: none;
border-radius: 50%;
background-color: #FFF;
vertical-align: baseline;
transform-origin: center center;
color: #FF3333;
font-size: 20px;
cursor: pointer;
transition: all 0.5s ease-in-out 0.5s;
`;

const EmailWrapper = styled.div`
margin-bottom: 5px;
`;

const ContactItem: FC<ContactItemType> = ({ data }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const toFullPageHandler = (id: string) => {
    dispatch(getFullContact(id));
    history.push(`/users/${id}`);
  };

  const deleteContactHandler = (id: string) => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactItemWrapper>
      <ImgWrapper src={data.image} alt="avatar" />
      <RatingList rating={data.rating} />
      <NameWrapper>
        {`${data.name} ${data.lastName}`}
      </NameWrapper>
      <div>{data.phone}</div>
      <div>{data.login}</div>
      <EmailWrapper>{data.email}</EmailWrapper>
      <ViewBtnWrapper
        className="ViewBtn"
        type="button"
        title="Open full contact"
        onClick={() => toFullPageHandler(data.id)}
      >
        <p><AiOutlineIdcard /></p>
      </ViewBtnWrapper>
      <DeleteBtnWrapper
        className="DeleteBtn"
        type="button"
        title="Delete contact"
        onClick={() => deleteContactHandler(data.id)}
      >
        <p><AiOutlineDelete /></p>
      </DeleteBtnWrapper>
    </ContactItemWrapper>
  );
};

export default ContactItem;

import React, { FC } from 'react';
import styled from 'styled-components';
import { AiOutlineDelete, AiOutlineFullscreen } from 'react-icons/ai';
import { ContactItemType } from '../../../Types/contactItem';
import RatingList from './RaitingList';

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
}
}
`;

const ImgWrapper = styled.img`
border-radius: 50%;
border: 3px solid #FFCD24;
padding: 3px;
`;

const NameWrapper = styled.div`
font-family: "Gill Sans";
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

const ContactItem: FC<ContactItemType> = ({ data }) => (
  <ContactItemWrapper>
    <ImgWrapper src={data.foto} alt="foto" />
    <RatingList rating={data.rating} />
    <NameWrapper>
      {data.firstName}
      <span>
        {` ${data.lastName}`}
      </span>
    </NameWrapper>
    <div>{data.phone}</div>
    <div>{data.login}</div>
    <div>{data.email}</div>
    <ViewBtnWrapper
      className="ViewBtn"
      type="button"
      title="Open full contact"
    >
      <p><AiOutlineFullscreen /></p>
    </ViewBtnWrapper>
    <DeleteBtnWrapper
      className="DeleteBtn"
      type="button"
      title="Delete contact"
    >
      <p><AiOutlineDelete /></p>
    </DeleteBtnWrapper>
  </ContactItemWrapper>
);

export default ContactItem;

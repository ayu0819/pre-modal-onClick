import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ModalHeader = styled.div`
     text-align: left;
 svg {
     font-size: 1.5em;
     color: #FF385C;
     padding-left: 1em;
 }
`;

const Modals = styled.div`
 margin:  0 auto;
 padding: 1em 0 2.5em 0;
 background-color: #fff;
 border-radius: 1em;
 text-align: center;
 box-shadow: 0px 3px 15px rgb(0 0 0 / 20%);
 width: 100%;
 max-width: 25em;
 transition: all .5s ease;
 p {
     text-align: center;
     padding: 2em 0;
 }
`;

const Button = styled.div`
  background-color: #FF385C;
  color: #eee;
  font-size: 1em;
  margin: 2em 0;
  padding: .5em 1.8em;
  border-radius: 0.5em;
  border: none;
  outline: none;
  cursor: pointer;
  text-align: center;
  margin : 0 auto ;
  width: 10em;
`;

const Modal = ({show,close}) => {
 return(
  <Modals style={{
          transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0'
      }}>
      <ModalHeader><FontAwesomeIcon onClick={close} icon={faTimes} /></ModalHeader>
      <img src="https://placehold.jp/150x150.png" alt="画像" />
      <p>新規会員登録が出来ました</p>
      <Button onClick={close}>ログインページへ</Button>
  </Modals>
 )
}

export default Modal;
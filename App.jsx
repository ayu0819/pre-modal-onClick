import React,{useState} from 'react';
import {Modal} from '../components/UIkit'
import styled from 'styled-components';

const Button= styled.button`
  background-color: #FF385C;
  color: #eee;
  font-size: 1em;
  margin: 2em;
  padding: .5em 1.8em;
  border-radius: 0.5em;
  border: none;
  outline: none;
  cursor: pointer;
`;

const Overlay= styled.div`
 background-color: rgba(255, 136, 186, 0.692);
 height: 100%;
 position: fixed;
 transition:  all 1.3s;
 width: 100%;
`;

const App = () => {

const [show,setShow] = useState(false);
const closeModalHandler = () => setShow(false);

 return(
    <>
     { show ? <Overlay onClick={closeModalHandler} ></Overlay> : null }
     <div className="common__sub-contents">
      <div className="common__size">
       <Button onClick={() => setShow(true)}>新規登録</Button>
       <Modal show={show} close={closeModalHandler} />
      </div>
     </div>
    </>
 )
}

export default App;
/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '리엑트 뿌시기';
  let [Title,setTitle] = useState(['리엑트 하루컷으로 배우기','리엑트 하루안에 절대 못함', '게시판 기능 추가 예정','랜덤번호 로또 추출']);
  let [Time, setTime] = useState('2024-06-07');
  // useState [a, c] ==> Title = '리엑트 어쩌구~~', b = state 변경 함수
  // State 쓰던 html 은 자동변경이 됨. ==> 재렌더링 함
  // let [a, c] = [1, 2];
  let [like, likeChange] = useState(0);
  const currentDate = new Date();

  let [modal,setModal] = useState('close');
  

  function changeTitle() {
    
    let newTitle = [...Title];
    newTitle[1] = 'ㅁ 리엑트 이틀만에 할수 있지롱';
    console.log(Title == newTitle);
    setTitle(newTitle);
  }


  function ModalClick() {
    if(modal == 'close') {
      setModal('open') } 
    else {
      setModal('close')
    }
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color : 'white', fontSize : '16px'} }>ReactBroken</h4>
      </div>

      <button onClick={() => {
        let newTitle = [...Title];
        newTitle.sort();
        setTitle(newTitle);
      }}>정렬하기</button>
      <div className='list' onClick={ModalClick}>
        <h4>{Title[0]} <span onClick={() => { likeChange(like+1) } }>👍</span> {like} </h4>
        <p>{Time}<span onClick={ ()=> {setTime(currentDate.toLocaleString()) }}>현재 시각으로 변경</span></p>
      </div>
      {
        // 보통 없을때 null 많이 씀
        modal == 'close' ? null : <Modal/>
      }

    
      <div className='list' onClick={ModalClick}>
        <h4>{Title[1]} <span style={{color: 'red'}} onClick={changeTitle}>제목 변경 마술</span></h4>
        <p>{Time}</p>
      </div>

      {
        // 보통 없을때 null 많이 씀
        modal == 'close' ? null : <Modal/>
      }

      <div className='list' onClick={ModalClick}>
        <h4>{Title[2]}</h4>
        <p>{Time}</p>
      </div>

      {
        // 보통 없을때 null 많이 씀
        modal == 'close' ? null : <Modal/>
      }

      <div className='list' onClick={ModalClick}>
        <h4>{Title[3]}</h4>
        <Lotto/>
      </div>

      {
        // 보통 없을때 null 많이 씀
        modal == 'close' ? null : <Modal/>
      }

    </div>
  );
}

function Lotto() {

  const number = [];

  for(var i = 0; i<6; i++){
    const random = Math.floor(Math.random() * 45 + 1);
    number.push(random);
    number.push('/')
  }

  return (
    <p>{number}</p>
  )
}

function Modal() {
  // 2개의 div 불가
  return (
    <>
      <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  )
}

export default App;

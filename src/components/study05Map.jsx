// 메뉴판을 출력하는 Menu 컴포넌트를 만드세요.
import React from 'react';

function Menu() {

  const menu = ['짜장면', '짬뽕', '볶음밥'];
  const menuList = {};

  return (
    <>
      <h3>엘리스 식당 메뉴판</h3>
      <ul>
        {menuList}
      </ul>
    </>
  );
}

export default Menu;

//이거보고 위에꺼 고쳐보기~!
// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [todo, setTodo] = useState([
//     '꾸준히 운동하기',
//     '영어 공부하기',
//     '미니 프로젝트 진행하기',
//   ]);

//   //todoList를 정의합니다.
//   const todoList = todo.map(item => <li key={item.id}>{item}</li>);

//   const handleClick = () => {
//     setTodo(todo => {
//       const newTodo = [...todo];
//       newTodo.push('새로운 항목');
//       return newTodo;
//     });
//   };

//   return (
//     <div>
//       <h2>신년 목표</h2>
//       <button onClick={handleClick}>추가하기</button>
//       <ul>{todoList}</ul>
//     </div>
//   );
// }

// export default App;

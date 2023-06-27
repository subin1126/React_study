import React from 'react';
import ReactDOM from 'react-dom/client';
//import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //기존의 컴포넌트
//import Study01 from './components/Study01.jsx';
// import Study02 from './components/study02.jsx';
import Study06 from './components/study06State';
import Study03SetInterval from './components/study03SetInterval.jsx';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <App />
    
    <Study06 />
    
  </React.StrictMode>,
  document.getElementById('root')
);
//<Study01 />
//<Study03SetInterval />
//study03을 렌더링할때
// setInterval(() => {
//   root.render(
//   <React.StrictMode>
//     <Study03SetInterval />
//   </React.StrictMode> );
// }, 1000)


//<Study01 />
  //  <Study02 />

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

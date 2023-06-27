import React from 'react';
//import './App.css';

//style 뭐? 킹시보기 ㅠㅠ

const Study01 = () => {
    const style = {
        span: {},
        style1: { backgroundColor: 'green', color: 'yellow' },
    }; //object를 할당받고있음

    return (
        <div className="App">
            <div style={style.style1}>안녕.</div>
        </div>
    );
}

export default Study01;

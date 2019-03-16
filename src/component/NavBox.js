import React from 'react';

export default class NavBox extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div className="nav-box">
            <Menu />
            <Items />
        </div>;
    }
}

let menuArr = ['校内导航', '常用网站', '编程学习', '娱乐游戏'];

class Menu extends React.Component{
    constructor(props){
        super(props);
    }

    handleClick = () => {
        alert("hhh");
    }

    render(){
        return <ul className="menu">
            {menuArr.map((item, index)=>{
            return <li onClick={this.handleClick} key={index}>{item}</li>;
        })}
        </ul>;
    }
}

let arr = ['校医院', '图书馆', '校内新闻'];

class Items extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <ul className="items">
                {arr.map((item, index)=>{
                    return <li key={index}>{item}</li>;
                })}
            </ul>;
    }
}
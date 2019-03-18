import React from 'react';

export default class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menuArr: ['校内导航', '常用网站', '常用软件', '编程学习', '娱乐游戏']
        }
    }

    handleClick = () => {
        console.log(this.props.store);
        alert("hhh");
    }

    render(){
        return <ul className="menu">
            {this.state.menuArr.map((item, index)=>{
            return <li onClick={this.handleClick} key={index}>{item}</li>;
        })}
        </ul>;
    }
}
import React from 'react';

export default class Items extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            arr: ['校医院', '图书馆', '校内新闻', '工作室', '广工地图', '校医院', '图书馆', '校内新闻', '工作室', '广工地图']
        }
    }

    render(){
        return <ul className="items">
                {this.state.arr.map((item, index)=>{
                    return <li key={index}>{item}</li>;
                })}
            </ul>;
    }
}
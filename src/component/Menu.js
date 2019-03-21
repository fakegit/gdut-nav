import React from 'react';
import {menuArr} from '../db';

// 导航菜单组件
export default class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menuArr,
            triStyle: {}
        }
    }

    // 点击导航菜单, 渲染items子项目
    handleClick = (e) => {
        let {store: {dispatch}} = this.props;
        const action = {type: e.currentTarget.getAttribute('data-id')};
        dispatch(action);
    }

    render(){
        return <ul className="menu">
            {this.state.menuArr.map((item, index)=>{
            return <li onClick={this.handleClick} key={index} data-id={item.title}>{item.value}</li>;
        })}
            <span className="triangle" style={this.state.triStyle}></span>
        </ul>;
    }
}
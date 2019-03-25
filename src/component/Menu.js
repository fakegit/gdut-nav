import React from 'react';
import {menuArr} from '../db';

// 导航菜单组件
export default class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menuArr
        }
    }

    // 点击导航菜单, 渲染items子项目
    handleClick = (e, index) => {
        let {store: {dispatch}} = this.props;
        const action = {type: menuArr[index].title};
        dispatch(action);
    }

    render(){
        return <div className="menu">
            <ul>
                {this.state.menuArr.map((item, index)=>{
                return <li onClick={(e)=>{this.handleClick(e, index)}} key={index}>{item.value}</li>;
                })}
            </ul>
        </div>;
    }
}
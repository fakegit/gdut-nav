import React from 'react';
import Logo from '../static/images/logo.png';
import {Input} from 'antd';

const Search = Input.Search;

// logo和搜索框组件
export default class SearchBox extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div className="search-box">
        <a href="https://www.zhihu.com/topic/19604314/intro">
            <img id="logo" src={Logo} alt="工大导航" title="工大导航" />
        </a>
        <Search className="input-box" size="large" enterButton placeholder="百度一下" onSearch={value => window.open("https://www.baidu.com/s?wd="+value)} autoFocus />
        </div>;
    }
}
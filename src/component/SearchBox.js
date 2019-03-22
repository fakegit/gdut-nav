import React from 'react';
import Logo from '../static/images/logo.png';
import {Input} from 'antd';
import axios from 'axios';

const Search = Input.Search; // antd的按钮

// logo和搜索框组件
export default class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hitokoto: '百度一下'
        }
    }

    // 获取hitokoto一句话
    getHitokoto = () => {
        axios.get("https://v1.hitokoto.cn?c=b").then(obj => {return obj.data.hitokoto}).then(result => {
            if(result.length > 32) {
                this.getHitokoto();
            }else this.setState({hitokoto: result});
        }).catch(err => {console.error(err)});
    };

    componentWillMount() {
        this.getHitokoto();
    }
    
    componentDidMount() {
        setInterval(()=>{this.getHitokoto()},10000)
    }

    render() {
        return <div className="search-box">
            <a href="https://www.zhihu.com/topic/19604314/intro" target="_blank">
                <img id="logo" src={Logo} alt="工大导航" title="团结勤奋求是创新" />
            </a>
        <Search className="antd-input" size="large" placeholder={this.state.hitokoto} onSearch={value => window.open("https://www.baidu.com/s?wd="+value)} autoFocus />
        </div>;
    }
}
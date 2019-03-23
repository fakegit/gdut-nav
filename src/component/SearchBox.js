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
            hitokoto: '百度一下',
            sug: []
        }
    }

    // 获取hitokoto一句话
    getHitokoto = () => {
        axios.get("https://v1.hitokoto.cn?c=b").then(obj => {return obj.data.hitokoto}).then(result => {
            if(result.length > 32 || result.length < 10) {
                this.getHitokoto();
            }else this.setState({hitokoto: result});
        }).catch(err => {console.error(err)});
    };

    // 实现搜索框智能提示
    baiduSug = () => {
        let antdInput = document.getElementsByClassName("ant-input ant-input-lg")[0];
        antdInput.onkeyup = () => {
            let script = document.createElement("script");
            script.src = ["http://suggestion.baidu.com/su?wd=", antdInput.value, "&cb=window.baidu.sug"].join('');
            document.body.appendChild(script);
            document.body.removeChild(script);
        }
        window.baidu = {
            sug: (obj) => {
                let length = obj.s.length > 6 ? 6 : obj.s.length;
                let arr = obj.s.slice(0, length);
                this.setState({sug: arr});
            }
        }
    }

    componentWillMount() {
        this.getHitokoto();
    }
    
    componentDidMount() {
        setInterval(()=>{this.getHitokoto()},10000);
        this.baiduSug();
    }

    render() {
        return <div className="search-box">
            <a href="https://weibo.com/gdutnc" target="_blank" rel="noopener noreferrer">
                <img id="logo" src={Logo} alt="工大导航" title="团结勤奋求是创新" />
            </a>
            <Search className="antd-input" size="large" placeholder={this.state.hitokoto} onSearch={value => {window.open("https://www.baidu.com/s?wd="+value); window.opener=null;}} autoFocus />
            <ul className="search-ul">
                {this.state.sug.map((item, index)=>{
                    return <a href={"https://www.baidu.com/s?wd=" + item} key={index} target="_blank" rel="noopener noreferrer"><li key={index}>{item}</li></a>;
                })}
            </ul>
        </div>;
    }
}
import React from 'react';

export default class Search extends React.Component {
    render() {
        return <form action="https://www.baidu.com/s" className="search">
            <i className="iconfont">&#xe688;</i>
            <input type="text" placeholder="搜索" name="wd" autoComplete="off" />
        </form>
    }
}
import React from 'react';

export default class Header extends React.Component {
    render() {
        return <header className="header">
            <div className="header-github">
                <a href="https://github.com/brenner8023/gdutnav" target="_blank" rel="noopener noreferrer" title="Talk is cheap. Show me the code."><i className="iconfont">&#xe64a;</i></a>
            </div>
            <h1 className="header-title" >
                <span>GdutNav - 工大导航</span>
                <i className="iconfont">&#xe600;</i>
            </h1>
            <div className="header-subtitle">
                <i className="iconfont">&#xe6af;</i>
                <span>团结,勤奋,求是,创新</span>
            </div>
        </header>;
    }
}
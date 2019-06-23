import React from 'react';
import {navTitle, navArray} from '../api/db';

class AddItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editNav: JSON.parse(window.localStorage.getItem('editNav'))
        }
    }

    // 根据flag显示或隐藏对话框
    showDialog = (flag) => {
        this.refs["edit-dialog"].hidden = !flag;
    }

    // 点击添加网址的回调函数, 显示对话框
    handleClick = () => {
        this.showDialog(true);
    }

    // 点击取消/完成/删除按钮的回调函数
    handleButtonClick = (e) => {
        const title = this.refs["edit-title"].value;
        const url = this.refs["edit-url"].value;
        const newEditNav = this.state.editNav || [];
        const value = e.target.value;

        if(value !== "取消") {
            switch(value) {
                // 点击删除按钮
                case "删除":
                    for(let i = 0; i < newEditNav.length; i++) {
                        if(newEditNav[i].title === title) {
                            newEditNav.splice(i, 1);
                            break;
                        }
                    }
                    break;
                // 点击完成按钮
                case "完成":
                    if(!title || !url) {
                        alert("输入不能为空");
                        this.handleButtonClick(e);
                    } else {
                        newEditNav.push({title, url});
                    }
            }
            window.localStorage.setItem('editNav', JSON.stringify(newEditNav));
            this.setState({editNav: newEditNav});
        }

        this.showDialog(false);
    }

    componentDidMount() {
        this.showDialog(false);
    }

    render() {
        return <div className="nav-list edit-nav">
            <h2 className="nav-title" onClick={this.handleClick}>
                <i className="iconfont">&#xe634;</i>
                <span>添加网址</span>
            </h2>
                {/* 添加删除快捷方式的对话框 */}
                <dialog className="edit-dialog" ref="edit-dialog" open style={{opacity: 1}}>
                    <div className="dialog-title">添加或删除快捷方式</div>
                    <div>
                        <div className="edit-title">
                            <label>名称 </label>
                            <input type="text" className="input-box" ref="edit-title" />
                        </div>
                        <div className="edit-url">
                            <label>网址 </label>
                            <input type="text" className="input-box" ref="edit-url" />
                        </div>
                        {/* 添加删除取消的三个按钮 */}
                        <div className="buttons-container">
                            <input value="删除" type="submit" className="edit-submit edit-rm" onClick={this.handleButtonClick} />
                            <input value="完成" type="submit" className="edit-submit edit-right" onClick={this.handleButtonClick} />
                            <input value="取消" type="submit" className="edit-submit edit-right" onClick={this.handleButtonClick} />
                        </div>
                    </div>
                   
                </dialog>
            {/* 自定义导航快捷方式的内容 */}
            <ul className="nav-items">
                {
                    this.state.editNav ? this.state.editNav.map((item, idx) => {
                        return (
                            <a href={item.url} target="_blank" key={idx} rel="noopener noreferrer"><li>{item.title}</li></a>
                        )
                    }) : ''
                }
            </ul>
        </div>
    }
}

class Nav extends React.Component {
    iconfont = (item) => {
        return {__html: item.iconfont}
    }
    render() {
        return <div>
            {
                navTitle.map((item, idx) => {
                    return (
                        <div key={idx} className="nav-list floatLeft">
                            {/* nav标题 */}
                            <h2 className="nav-title">
                                {/* 标题类型对应的图标
                                    使用dangerouslySetInnerHtml, 把iconfont代码当做html来解析
                                */}
                                <i className="iconfont" dangerouslySetInnerHTML={this.iconfont(item)}></i>
                                {/* 标题名称 */}
                                <span>{item.title}</span>
                            </h2>

                            {/* 集合 */}
                            <ul className="nav-items">
                                {
                                    navArray[idx].map((item2, idx2) => {
                                        return (
                                            <a href={item2.url} target="_blank" key={idx2} rel="noopener noreferrer"><li>{item2.name}</li></a>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                })
            }                
        </div>
    }
}

export default class Main extends React.Component {
    render() {
        return <main className="main">
            <AddItem />
            <Nav />
        </main>
    }
}
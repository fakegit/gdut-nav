import React from 'react';
import {navTitle, navArray} from '../api/db';

class AddItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editNav: JSON.parse(window.localStorage.getItem('editNav'))
        }
    }

    // 点击添加网址的回调函数
    handleClick = () => {
        // 显示对话框
        this.refs["edit-dialog"].hidden = false;
    }

    // 点击取消的回调函数
    handleCancle = () => {
        this.refs["edit-dialog"].hidden = true;
    }

    // 点击完成的回调函数
    handleComplete = () => {
        const title = this.refs["edit-title"].value;
        const url = this.refs["edit-url"].value;
        let newEditNav = [];
        let editNav = [];

        if(!title || !url) {
            alert("输入不能为空");
        } else {
            editNav = this.state.editNav;
            if(!editNav) {
                newEditNav.push({
                    title, url
                });
            }else {
                editNav.push({title, url});
                newEditNav = editNav;
            }

            window.localStorage.setItem('editNav', JSON.stringify(newEditNav));

            this.refs["edit-dialog"].hidden = true;
        }
    }

    // 点击删除的回调函数
    handleDelete = () => {
        const title = this.refs["edit-title"].value;
        const editNav = this.state.editNav;

        for(let i = 0; i < editNav.length; i++) {
            if(editNav[i].title === title) {
                editNav.splice(i, 1);
                break;
            }
        }
        window.localStorage.setItem('editNav', JSON.stringify(editNav));

        this.refs["edit-dialog"].hidden = true;
    }

    componentDidMount() {
        this.refs["edit-dialog"].hidden = true;
    }

    render() {
        return <div className="nav-list edit-nav">
            <h2 className="nav-title" onClick={this.handleClick}>
                <i className="iconfont">&#xe634;</i>
                <span>添加网址</span>
            </h2>
                <dialog className="edit-dialog" ref="edit-dialog" open style={{opacity: 1}}>
                    <div className="dialog-title">添加或删除快捷方式</div>
                    <form action="">
                        <div className="edit-title">
                            <label>名称 </label>
                            <input type="text" className="input-box" ref="edit-title" />
                        </div>
                        <div className="edit-url">
                            <label>网址 </label>
                            <input type="text" className="input-box" ref="edit-url" />
                        </div>
                        <div className="buttons-container">
                            <input value="删除" type="submit" className="edit-submit edit-rm" onClick={this.handleDelete} />
                            <input value="完成" type="submit" className="edit-submit edit-right" onClick={this.handleComplete} />
                            <input value="取消" type="submit" className="edit-submit edit-right" onClick={this.handleCancle} />
                        </div>
                    </form>
                   
                </dialog>
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
                        <div key={idx} className="nav-list">
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
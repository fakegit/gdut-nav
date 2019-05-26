import React from 'react';
import {navTitle, navList} from '../api/db';

export default class Nav extends React.Component {
    iconfont = (item) => {
        return {__html: item.iconfont}
    }
    render() {
        return <main>
            {
                navTitle.map((item, idx) => {
                    return (
                        <div key={idx} className="main-nav">
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
                                    navList[idx].map((item2, idx2) => {
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
        </main>
    }
}
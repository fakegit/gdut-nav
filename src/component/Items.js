import React from 'react';
import {schoolNav} from '../db';

// 站点列表组件
export default class Items extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            arr: schoolNav
        }
    }

    componentDidMount() {
        let {store: {getState, subscribe}} = this.props;
        let unsubscribe = subscribe(()=>{
            let {list} = getState();
            this.setState({arr: list});
        });
    }

    render() {
        return <ul className="items">
                {this.state.arr.map((item, index)=>{
                    return <a href={item.url} target="_blank"><li key={index}>{item.name}</li></a>;
                })}
            </ul>;
    }
}
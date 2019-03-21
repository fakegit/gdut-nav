import React from 'react';
import ReactDOM from 'react-dom';
import {Icon} from 'antd';

import './static/css/reset.css';
import './static/css/index.css';
import './static/css/public.css';
import './plugin';

import SearchBox from './component/SearchBox';
import Menu from './component/Menu';
import Items from './component/Items';
import {reducer, store} from './store/store';

ReactDOM.render(<div className="container">
    <div className="github">
        <a href="https://github.com/brenner8023/gdutnav" target="_blank">
            <Icon type="github" title="Talk is cheap. Show me the code." alt="github.com/brenner8023" className="antd-github" />
        </a>
    </div>
    <SearchBox />
    <div className="nav-box">
        <Menu store={store} />
        <Items store={store} />
    </div>
</div>, document.getElementById('root'));
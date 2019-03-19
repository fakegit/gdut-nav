import React from 'react';
import ReactDOM from 'react-dom';

import './static/css/reset.css';
import './static/css/index.css';
import Github from './static/images/github.png';

import SearchBox from './component/SearchBox';
import Menu from './component/Menu';
import Items from './component/Items';
import {reducer, store} from './store/store';

ReactDOM.render(<div className="container">
    <div className="github">
        <a href="https://github.com/brenner8023/gdutnav" target="_blank">
            <img src={Github} alt="github" title="github" />
        </a>
    </div>
    <SearchBox />
    <div className="nav-box">
        <Menu store={store} />
        <Items store={store} />
    </div>
</div>, document.getElementById('root'));
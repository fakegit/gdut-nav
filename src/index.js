import React from 'react';
import ReactDOM from 'react-dom';


import './static/css/reset.css';
import './static/css/index.css';

import SearchBox from './component/SearchBox';
import Menu from './component/Menu';
import Items from './component/Items';

ReactDOM.render(<div className="container">
    <SearchBox />
    <div className="nav-box">
        <Menu store={store} />
        <Items store={store} />
    </div>
</div>, document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/reset.css';
import './static/css/index.css';
import SearchBox from './component/SearchBox';
import NavBox from './component/NavBox';

ReactDOM.render(<div>
    <SearchBox />
    <NavBox />
</div>, document.getElementById('root'));
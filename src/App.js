import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Nav from './components/Nav';

export default class App extends React.Component {
    render() {
        return <div>
            <Header />
            <Search />
            <Nav />
        </div>;
    }
}
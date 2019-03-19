import {createStore} from 'redux';
import {schoolNav, commonSite} from '../db';

let reducer = (state={list: schoolNav}, action) => {
    switch(action.type){
        case 'schoolNav':
            state = {...state, list: schoolNav};
            break;
        case 'commonSite':
            state = {...state, list: commonSite};
            break;
        case 'commonSoftware':
            state = {...state};
            break;
    }
    return state;
};

let store = createStore(reducer);

export {reducer, store};
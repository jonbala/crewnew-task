import { combineReducers, createStore,applyMiddleware } from 'redux';
import { projectReducer } from './reducers/projectReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {ProjectState, UserState} from '../types'
import thunk from "redux-thunk"
import { userReducer } from './reducers/userReducer';

export interface IRootState {
    project: ProjectState;
    users:UserState;
}
const middleware = [thunk];

const store = createStore<IRootState, any, any, any>(
    combineReducers({
        project: projectReducer,
        users:userReducer
}) ,composeWithDevTools(applyMiddleware(...middleware)));

export { store };

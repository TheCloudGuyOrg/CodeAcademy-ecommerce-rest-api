import { combineReducers } from 'redux';
import AuthReducer from './auth/Auth.reducers';


export default combineReducers({
    auth: AuthReducer
});
import { combineReducers } from 'redux';
import AuthReducer from './auth/Auth.reducers';
import productReducer from './products/Products.reducers';
import cartReducer from './cart/Cart.reducers';

export default combineReducers({
    auth: AuthReducer,
    products: productReducer,
    cart: cartReducer
});
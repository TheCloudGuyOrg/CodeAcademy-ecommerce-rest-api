import { combineReducers } from 'redux';
import AuthReducer from './auth/Auth.reducers';
import productReducer from './products/Products.reducers';
import cartReducer from './cart/Cart.reducers';
import orderReducer from './orders/Orders.reducers';
import userReducer from './user/User.reducers';

export default combineReducers({
    auth: AuthReducer,
    products: productReducer,
    cart: cartReducer,
    order: orderReducer,
    user: userReducer
});
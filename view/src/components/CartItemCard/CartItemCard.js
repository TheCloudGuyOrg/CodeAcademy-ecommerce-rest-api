import React, { useState } from 'react';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import Incrementer from '../Incrementer/Incrementer';
import { removeItem } from '../../store/cart/Cart.actions';
import './CartItemCard.css';

const CartItemCard = (props) => {
    const { cartItemId, name, price, qty} = props;
    const [ quantity, setQuantity ] = useState(qty);
    const dispatch = useDispatch();

    const haldleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if(quantity === 1) {
            return
        };
        setQuantity(quantity -1);
    };

    const remove = async() => {
        await dispatch(removeItem(cartItemId));
    };

    return (
        <>
            <div className="cart-item-container">
                <div className="cart-item-details">
                    <img 
                        src="https://i5.walmartimages.com/asr/37a49c0c-6f69-4958-b30a-e7ea8b21338e_2.e8072fad5bf0ffa2e3af108b059d8b0b.jpeg"
                        alt=""
                        style={{height: '100%', paddingRight: '10px'}} 
                    />
                    <p>{name}</p>
                    <p>{price / 100}</p>
                </div>
                <div className=".cart-item-interact">
                    <Incrementer 
                        onDecrement={handleDecrement}
                        onIncrement={haldleIncrement}
                        value={quantity}
                    />
                    <Typography onClick={remove}>Remove</Typography>
                </div>
                <div className=".cart-item-price">
                    <p>{`$${price * qty / 100}`}</p>
                </div>
            </div>
            <Divider />
        </>
    );
};

export default CartItemCard;
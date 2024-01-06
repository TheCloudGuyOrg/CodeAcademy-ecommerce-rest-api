import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Incrementer from '../../components/Incrementer/Incrementer';
import { addItem } from '../../store/cart/Cart.actions';
import { loadProduct } from '../../store/products/Products.actions';
import '../Login/Login';


function ProductDetails() {
    const { productId } = useParams();
    const [ quantity, setQuantity ] = useState(1);
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const product = products[productId];
    const [ heroImg, setHeroImg ] = useState("https://i5.walmartimages.com/asr/37a49c0c-6f69-4958-b30a-e7ea8b21338e_2.e8072fad5bf0ffa2e3af108b059d8b0b.jpeg");

    useEffect(() => {
        if (!products[productId]) {
            (async function load() {
                await dispatch(loadProduct(productId))
            })();
        }
    }, [dispatch, products, productId]);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity === 1) {
            return;
        }
        setQuantity(quantity -1);
    };

    const handleAddToCart = async () => {
        await dispatch(addItem(product, quantity));
    };

    return (
        <section className="product-details-container">
            <div className="product-img-container">
                <div className="product-hero-img">
                    <img
                        className="hero-img"
                        src={heroImg} alt=""
                    />
                </div>
                <div className="product-img-bar">
                    <div 
                        className="alt-product-img-container"
                        onClick={() => {setHeroImg("https://i5.walmartimages.com/asr/37a49c0c-6f69-4958-b30a-e7ea8b21338e_2.e8072fad5bf0ffa2e3af108b059d8b0b.jpeg")}}
                    >
                        <img
                            style={{maxWidth: '100%', maxHeight: '100%'}}
                            src={"https://i5.walmartimages.com/asr/37a49c0c-6f69-4958-b30a-e7ea8b21338e_2.e8072fad5bf0ffa2e3af108b059d8b0b.jpeg"}
                            alt=""
                        />
                    </div>
                    <div 
                        className="alt-product-img-container"
                        onClick={() => {setHeroImg("https://i5.walmartimages.com/asr/07513039-e130-4f23-ad14-421bb12f7d8f_1.c3af3dd62e864fce3d0330ec8d1519be.jpeg")}}
                    >
                        <img
                            style={{maxWidth: '100%', maxHeight: '100%'}}
                            src={"https://i5.walmartimages.com/asr/07513039-e130-4f23-ad14-421bb12f7d8f_1.c3af3dd62e864fce3d0330ec8d1519be.jpeg"}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="product-info-container">
                {
                product &&
                <>
                    <Typography variant="h3">{product?.name}</Typography>
                    <Typography variant="h6">{product?.description}</Typography>
                    <Typography variant="h6">{product?.price / 100}</Typography>
                    <Incrementer 
                        onDecrement={handleDecrement}
                        onIncrement={handleIncrement}
                        value={quantity}
                    />
                    <Button
                        type="contained"
                        color="primary"
                        onClick={handleAddToCart}
                    >Add to Cart
                    </Button>
                </>
                }
            </div>
        </section>
    )
};

export default ProductDetails;
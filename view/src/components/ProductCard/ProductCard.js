import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard(props) {
    const { data } = props;

    return(
        <div className="grid-item">
            <img className="product-card-img" src="https://i5.walmartimages.com/asr/37a49c0c-6f69-4958-b30a-e7ea8b21338e_2.e8072fad5bf0ffa2e3af108b059d8b0b.jpeg" alt=""></img>
            <div className="product-card-info-container">
                <div className="product-card-info">
                    <p>{data.name}</p>
                    <p>{data.price / 100}</p>
                </div>
                <Button
                    variant="outlined"
                    color="primary"
                    component={Link}
                    to={`/products/${data.id}`}
                >
                    View
                </Button>
            </div>
        </div>
    );
};

export default ProductCard;
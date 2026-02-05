import BuyAgainIcon from '../../assets/images/icons/buy-again.png';
import dayjs from 'dayjs';

export function CartItemDetails({ orderProduct }) {
    return(
        <>
    <div className="product-image-container">
                        <img src={orderProduct.product.image} />
                    </div>

                    <div className="product-details">
                        <div className="product-name">
                            {orderProduct.product.name}
                        </div>
                        <div className="product-delivery-date">
                            Arriving on: {dayjs(orderProduct.estimatedDeliveryTimeMs).add(7, 'day').format('MMMM D')}
                        </div>
                        <div className="product-quantity">
                            Quantity: {orderProduct.product.quantity}
                        </div>
                        <button className="buy-again-button button-primary">
                            <img className="buy-again-icon" src={BuyAgainIcon} />
                            <span className="buy-again-message">Add to Cart</span>
                        </button>
                    </div>
        </>
    )
}
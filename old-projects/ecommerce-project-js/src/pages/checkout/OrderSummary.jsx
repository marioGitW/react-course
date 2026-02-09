import { DeliveryDate } from './DeliveryDate.jsx'
import { DeliveryOptions } from './DeliveryOptions.jsx'
import { CartItemDetails } from '../orders/CartItemDetails.jsx'
export function OrderSummary({ deliveryOption, cart, loadCart }) {

    return (
        <div className="order-summary">
            {deliveryOption.length > 0 && cart.map((cartItem) => {
                
                return (
                    <div
                        key={cartItem.productId}
                        className="cart-item-container" >
                        <DeliveryDate cartItem={cartItem} deliveryOptions={deliveryOption} />

                        <div className="cart-item-details-grid">
                            <CartItemDetails cartItem={cartItem} loadCart={loadCart} />
                            <DeliveryOptions deliveryOption={deliveryOption} cartItem={cartItem} loadCart={loadCart} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
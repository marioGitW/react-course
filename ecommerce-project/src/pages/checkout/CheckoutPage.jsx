import './CheckoutHeader.css'
import './CheckoutPage.css'
import { CheckoutHeader } from './CheckoutHeader.jsx'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { OrderSummary } from './OrderSummary.jsx'
import { PaymentSummary } from './PaymentSummary.jsx'

export function CheckoutPage({ cart, loadCart }) {
    const [deliveryOption, setDeliveryOption] = useState([])
    const [paymentSummary, setPaymentSummary] = useState(null)
    useEffect(() => {
        const fetchCheckoutData = async () => {
            const response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
            setDeliveryOption(response.data)
        }
        fetchCheckoutData()
    }, [cart])
    useEffect(() => {
        const fetchPaymentSummary = async () => {
            let response = await axios.get('/api/payment-summary')
            setPaymentSummary(response.data)
        };
        fetchPaymentSummary();
    }, [cart])
    return (
        <>
            <link rel="icon" type="image/svg+xml" href="cart-favicon.png" />
            <title>Checkout</title>

            <CheckoutHeader cart={cart} />

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary deliveryOption={deliveryOption} cart={cart} loadCart={loadCart} />
                    {paymentSummary && (
                        <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
                    )}
                </div>
            </div>
        </>
    )
}

import './CheckoutHeader.css'
import './CheckoutPage.css'
import { CheckoutHeader } from './CheckoutHeader.jsx'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { OrderSummary } from './OrderSummary.jsx'
import { PaymentSummary } from './PaymentSummary.jsx'

export function CheckoutPage({ cart }) {
    const [deliveryOption, setDeliveryOption] = useState([])
    const [paymentSummary, setPaymentSummary] = useState(null)
    useEffect(() => {
        axios
            .get('/api/delivery-options?expand=estimatedDeliveryTime')
            .then((response) => {
                setDeliveryOption(response.data)
            })
            .catch((error) => {
                console.error('Error fetching delivery options:', error)
            })

        axios.get('/api/payment-summary')
            .then((response) => {
                setPaymentSummary(response.data)
            })
            .catch((error) => {
                console.error('Error fetching payment summary:', error)
            })
    }, [])

    return (
        <>
            <link rel="icon" type="image/svg+xml" href="cart-favicon.png" />
            <title>Checkout</title>

            <CheckoutHeader />

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary deliveryOption={deliveryOption} cart={cart} />
                    <PaymentSummary paymentSummary={paymentSummary} />
                </div>
            </div>
        </>
    )
}

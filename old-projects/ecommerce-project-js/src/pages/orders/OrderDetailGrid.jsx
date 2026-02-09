import { Fragment } from 'react';
import { CartItemDetails } from './CartItemDetails.jsx';
export function OrderDetailGrid({ order }) {
    return (
        <>
        <div className="order-details-grid">
        {
            order.products.map((orderProduct) => {
                return (
                    <Fragment key={orderProduct.product.id}>

                    <CartItemDetails orderProduct={orderProduct} />
                        <div className="product-actions">
                            <a href={`/tracking/${order.id}/${orderProduct.product.id}`}>
                                <button className="track-package-button button-secondary">
                                    Track package
                                </button>
                            </a>
                        </div>
                    </Fragment>
                )
            })

        }

    </div>
        </>
    )}
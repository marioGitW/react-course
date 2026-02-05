import './OrdersPage.css'
import { OrderHeader } from './OrderHeader.jsx';
import { OrderDetailGrid } from './OrderDetailGrid.jsx';
export function OrdersGrid({ orders }) {
    return (
        <>
        <div className="orders-grid">
                    {orders.map((order) => {
                        return (
                            <div key={order.id} className="order-container">

                              <OrderHeader order={order} />
                              <OrderDetailGrid order={order} />  
                            </div>
                        )
                    })}

                </div>
        </>
    )
}
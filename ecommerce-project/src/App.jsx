// import { useState } from 'react'
import { Routes,Route } from 'react-router'
import { HomePage } from './pages/home/HomePage.jsx'
import { CheckoutPage } from './pages/checkout/CheckoutPage.jsx'
import { OrdersPage } from './pages/orders/OrdersPage.jsx'
import { TrackingPage } from './pages/tracking/TrackingPage.jsx'
import { NotFoundPage } from './pages/notFound/NotFoundPage.jsx'
import './App.css'


function App() {

  return (
      <Routes>
        <Route index element={<HomePage />}/>
        <Route path="checkout" element={<CheckoutPage/>}/>
        <Route path="orders" element={<OrdersPage/>}/>
        <Route path="tracking" element={<TrackingPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>

      </Routes>
  )
}

export default App

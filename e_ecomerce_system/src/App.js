import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {routes} from './routes'
import HomePage from './pages/HomePage/HomePage'
import Order from './pages/OrderPage/OrderPage'
import Product from './pages/ProductPage/ProductPage'

function App() {
  console.log(routes)
  return (
    <div>
      <Router>
        <Routes>
          
          {routes.map((route) => {
            const Page = route.page
            return (
              <Route path={route.path} element={<Page/>} />
            )
          })}
          
          {/* <Route path='order' element={<Order/>}/>
          <Route path='product' element={<Product/>}/> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
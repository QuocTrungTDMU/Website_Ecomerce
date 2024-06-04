import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'
import DefaultComponent from './components/DefaultComponent/DefaultComponent'

function App() {
  console.log(routes)
  return (
    <div>
      <HeaderComponent />
      <Router>
        <Routes>

          {routes.map((route) => {
            const Page = route.page
            const Layout = routes.isShowHeader ? DefaultComponent : Fragment
            return (
              <Route path={route.path} element={
                <>
                  <Page />
                  <Layout/>
                </>
              } />
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
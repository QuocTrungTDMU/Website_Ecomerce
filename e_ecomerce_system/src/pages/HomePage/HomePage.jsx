import React from 'react'
import TypeProducts from '../../components/TypeProduct/TypeProducts'
import { WrapperTypeProduct } from './style'

const HomePage = () => {
  const arr = ['Tu Lanh','TV','May Giat','Laptop']
  return (
    <div style={{padding:'0 120px'}}>
      <WrapperTypeProduct>
      {arr.map((item) => {
        return (
          <TypeProducts name={item} key={item} />
        )
      })}
      </WrapperTypeProduct>
      HomePage
      
    </div>
  )
}

export default HomePage
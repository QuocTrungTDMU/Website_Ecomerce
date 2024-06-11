import React from 'react'
import TypeProducts from '../../components/TypeProduct/TypeProducts'
import { WrapperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import slider1 from '../../assets/image/slider1.png'
import slider2 from '../../assets/image/slider2.jpg'
import slider3 from '../../assets/image/slider3.jpg'
import slider4 from '../../assets/image/slider4.jpg'
import CardComponent from '../../components/CardComponent/CardComponent'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'

const HomePage = () => {
  const arr = ['Tu Lanh', 'TV', 'May Giat', 'Laptop']
  return (
    <>
    
      <div style={{ }}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return (
              <TypeProducts name={item} key={item} />
            )
          })}
        </WrapperTypeProduct>
        </div>
        <div id='container' style={{ backgroundColor: '#efefef', padding:'0 120px',height:'1000px' }}>
          <SliderComponent arrImages={[slider1, slider2, slider3, slider4]} />
          <div style={{marginTop:'20px', display:'flex',alignItems:'center', gap:'20px'}}>
               <CardComponent />
          </div>
          <NavbarComponent/>
        </div>
    </>
  )
}

export default HomePage
import React from "react";
import TypeProducts from "../../components/TypeProduct/TypeProducts";
import { WrapperButtonMode, WrapperTypeProduct } from "./style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from "../../assets/image/slider1.png";
import slider2 from "../../assets/image/slider2.jpg";
import slider3 from "../../assets/image/slider3.jpg";
import slider4 from "../../assets/image/slider4.jpg";
import CardComponent from "../../components/CardComponent/CardComponent";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

const HomePage = () => {
  const arr = ["Tu Lanh", "TV", "May Giat", "Laptop"];
  return (
    <>
      <div style={{}}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return <TypeProducts name={item} key={item} />;
          })}
        </WrapperTypeProduct>
      </div>
      <div
        id="container"
        style={{
          backgroundColor: "#efefef",
          padding: "0 120px",
          height: "1000px",
          width:'100%', 
        }}
      >
        <SliderComponent arrImages={[slider1, slider2, slider3, slider4]} />
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
            gap:'20px',
            flexWrap: "wrap",
          }}
        >
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
        <div style={{width:'100%',display:'flex',justifyContent:'center',marginTop:'10px'}}>
          <WrapperButtonMode
            textButton="Xem thêm"
            type="outline"
            styleButton={{
              border: "1px solid rgb(11,116,229)",
              color: "rgb(11,116,229)",
              width: "240px",
              height: "38px",
              borderRadius: "4px",
            }}
            styleTextButton={{ fontWeight: 500 }}
          />
        </div>
        {/* <NavbarComponent/> */}
      </div>
    </>
  );
};

export default HomePage;

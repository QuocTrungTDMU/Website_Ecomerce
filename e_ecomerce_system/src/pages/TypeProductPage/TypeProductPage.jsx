import React from "react";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Col, Pagination, Row } from "antd";
import { WrapperNavbar, WrapperProducts } from "./style";

function TypeProductPage() {
  const onChange = () => {};
  return (
    <div style={{ padding: "0 100px", background: "#efefef" }}>
      <Row
        style={{
          padding: "0 100px",
          background: "#efefef",
          flexWrap: "nowrap",
          paddingTop: "10px",
        }}
      >
        <WrapperNavbar>
          <NavbarComponent />
        </WrapperNavbar>
        <Col  span={20}>
          <WrapperProducts>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrapperProducts>
          <Pagination defaultCurrent={2} total={100} 
          onChange={onChange} style={{textAlign:'center', marginTop:'10px', }}/>
        </Col>
        
      </Row>
      
    </div>
  );
}

export default TypeProductPage;

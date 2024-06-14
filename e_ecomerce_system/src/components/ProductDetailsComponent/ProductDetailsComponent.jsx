import React from "react";
import { Row, Col, Image } from "antd";

import imageProduct from "../../assets/image/Iphone 15 series/iphone15promax.jpg.webp";
import imageProductSmall from "../../assets/image/Iphone 15 series/camera_15.jpg";
import {
  WrapperAddressProduct,
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperQualityProduct,
  WrapperStyleColImage,
  WrapperStyleImageSmall,
  WrapperStyleTextSell,
  WrapperStylyNameProduct,
  WrappetInputNumber,
} from "./style";
import { StarFilled, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

const ProductDetailsComponent = () => {
  const onChange = () => {};
  return (
    <Row style={{ padding: "16px", background: "white" , borderRadius:'4px'}}>
      <Col span={10} style={{borderRight:'1px solid #e5e5e5', paddingRight:'8px'}}>
        <Image src={imageProduct} alt="image-product" preview={false} />
        <Row style={{ paddingTop: "10px", justifyContent: "space-between" }}>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="imageProductSmall"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="imageProductSmall"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="imageProductSmall"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="imageProductSmall"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="imageProductSmall"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="imageProductSmall"
              preview={false}
            />
          </WrapperStyleColImage>
        </Row>
      </Col>
      <Col span={14} style={{paddingLeft:'10px'}}>
        <WrapperStylyNameProduct>
          Apple iPhone 15 Pro Max
        </WrapperStylyNameProduct>
        <div>
          <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54)" }} />
          <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54)" }} />
          <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54)" }} />
          <WrapperStyleTextSell>| Đã bán 1000+</WrapperStyleTextSell>
        </div>
        <WrapperPriceProduct>
          <WrapperPriceTextProduct>29.490.000</WrapperPriceTextProduct>
        </WrapperPriceProduct>
        <WrapperAddressProduct>
          <span>Giao đến </span>
          <span className="address">
            Phường Phú Hòa, Thủ Dầu Một, Bình Dương
          </span>{" "}
          -<span className="change-address"> Đổi địa chỉ</span>
        </WrapperAddressProduct>
        <div style={{margin:'10px 0 20px',padding: '10px 0',borderTop:'1px solid #e5e5e5', borderBottom:'1px solid #e5e5e5  '}}>
          <div style={{marginBottom:'10px'}}>Số lượng</div>
          <WrapperQualityProduct>
            <button style={{ border: "none", background: "transpanrent" }}>
              <MinusOutlined
                style={{ color: "black", fontSize: "20px" }}
                size="10px"
              />
            </button> 
            <WrappetInputNumber
              min={1}
              max={10}
              defaultValue={3}
              onChange={onChange}
              size="small"
            />
            <button style={{ border: "none", background: "transpanrent" }}>
              <PlusOutlined
                style={{ color: "black", fontSize: "20px" }}
                size="10px"
              />
            </button>
          </WrapperQualityProduct>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <ButtonComponent
            size={40}
            styleButton={{
              background: "rgb(255,57,69)",
              height: "48px",
              width: "220px",
              border: "none",
              borderRadius: "4px",
            }}
            //styleButton ={{ border: 'none', boxShadow: 'none',background: backgroundColorButton, }}
            textButton={"Chọn mua"}
            styleTextButton={{
              color: "white",
              fontSize: "15px",
              fontWeight: "700px",
            }}
          ></ButtonComponent>
          <ButtonComponent
            size={40}
            styleButton={{
              background: "white",
              height: "48px",
              width: "220px",
              border: "1px solid rgb(13,92,182)",
              borderRadius: "4px",
            }}
            //styleButton ={{ border: 'none', boxShadow: 'none',background: backgroundColorButton, }}
            textButton={"Mua trước trả sau"}
            styleTextButton={{ color: "rgb(13,92,182)", fontSize: "15px" }}
          ></ButtonComponent>
        </div>
      </Col>
    </Row>
  );
};

export default ProductDetailsComponent;

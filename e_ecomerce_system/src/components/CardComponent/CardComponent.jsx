import React from "react";
import {
  StyleNameProduct,
  WrapperCardStyle,
  WrapperDiscountText,
  WrapperPriceText,
  WrapperReportText,
  WrapperStyleTextSell,
} from "./style";
import { StarOutlined } from "@ant-design/icons";
import logo from "../../assets/image/logo.png";
import ip from '../../assets/image/avt-iphone-14-pro-max-deep-purple.png'

const CardComponent = () => {
  return (
    <WrapperCardStyle
      hoverable
      // headStyle={{ width: "200px", height: "200px" }}
      style={{ width: 200 }}
      bodyStyle={{ padding: "10px" }}
      cover={
        <img
          alt="iphone"
          src={ip}
        />
      }
    >
      <img
        src={logo}
        style={{
          width: "58px",
          height: "14px",
          position: "absolute",
          top: -2,
          left: -1,
          borderTopLeftRadius: '3px'
        }}
        alt="logo"
      />
      <StyleNameProduct>Iphone 14 Promax </StyleNameProduct>
      <WrapperReportText>
        <span style={{ marginRight: "4px" }}>
          <span>4.9</span>{" "}
          <StarOutlined style={{ fontSize: "12px", color: "yellow" }} />
        </span>
        <WrapperStyleTextSell>| Đã bán 1000+</WrapperStyleTextSell>
      </WrapperReportText>
      <WrapperPriceText>
        <span style={{marginRight: '8px'}}>20.000.000d</span>
        <WrapperDiscountText>-5%</WrapperDiscountText>
      </WrapperPriceText>
    </WrapperCardStyle>
  );
};

export default CardComponent;

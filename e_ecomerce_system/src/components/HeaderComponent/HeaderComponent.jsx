import React from "react";
import { Badge, Col } from "antd";
import {
  WrapperHeader,
  WrapperHeaderAccount,
  WrapperTextHeader,
  WrapperTextHeaderSmall,
} from "./style";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={6}>
          <WrapperTextHeader>THUONGMAIDIENTU</WrapperTextHeader>
        </Col>
        <Col span={12}>
          <ButtonInputSearch
            size="large"
            bordered="false"
            textButton="Tìm Kiếm"
            placeholder="input search text"
            // onSearch = {onSearch}
            enterButton
          />
        </Col>
        <Col
          span={6}
          style={{ display: "flex", gap: "20px", alignItems: "center" }}
        >
          <WrapperHeaderAccount>
            <UserOutlined style={{ fontSize: "30px" }} />
            <div>
              <WrapperTextHeaderSmall style={{ fontSize: "12px" }}>
                Đăng Nhập/Đăng Kí
              </WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall style={{ fontSize: "12px" }}>
                  Tài Khoản
                </WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccount>
          <div>
            <div  style={{ display: "flex" }}>
              <ShoppingCartOutlined
                style={{ fontSize: "30px", color: "white" }}/>
              <div style={{display:'flex',flexDirection:'column'}}>
                <Badge count={4} size="small" style={{marginBottom:'5px'}} />
                <WrapperTextHeaderSmall>Giỏ Hàng</WrapperTextHeaderSmall>
              </div>
            </div>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;

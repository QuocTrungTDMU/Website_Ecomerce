import React from 'react'
import { Col } from 'antd'
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from './style'
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader gutter={16}>
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
            enterButton />
        </Col>
        <Col span={6} style={{display:'flex', gap:'20px', alignItems:'center' }}>
          <WrapperHeaderAccount>
            <UserOutlined style={{ fontSize: '30px' }} />
            <div>
              <WrapperTextHeaderSmall style={{ fontSize: '12px' }}>Đăng Nhập/Đăng Kí</WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall style={{ fontSize: '12px' }}>Tài Khoản</WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccount>
          <div>
            <div>
            <ShoppingCartOutlined style={{ fontSize: '30px',color:'white' }}/>  
            <WrapperTextHeaderSmall>Giỏ Hàng</WrapperTextHeaderSmall>
            </div>  
          </div>
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default HeaderComponent
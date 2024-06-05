import React from 'react'
import { Col } from 'antd'
import { WrapperHeader, WrapperTextHeader } from './style'
import Search from 'antd/es/transfer/search'

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={6}>
          <WrapperTextHeader>THUONGMAIDIENTU</WrapperTextHeader>
        </Col>
        <Col span={12}>
        <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      //onSearch={onSearch}
    />
        </Col>
        <Col span={6}>
          col-8
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default HeaderComponent
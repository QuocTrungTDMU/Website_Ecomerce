import { Card } from 'antd'
import React from 'react'
import { StyleNameProduct, WrapperReportText } from './style'
import {StarOutlined } from '@ant-design/icons';

const CardComponent = () => {
  return (
    <Card
    hoverable
    style={{ width: 240 }}
    bodyStyle={{padding:'10px'}}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <StyleNameProduct>Iphone 14 Promax </StyleNameProduct>
    <WrapperReportText>4.7 <StarOutlined /></WrapperReportText>
  </Card>
  )
}

export default CardComponent
import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'

const DefaultComponent = ({children}) => {
  return (
    <div>
        <HeaderComponent/>
        {/* <Row>
      <Col span={8}>col-8</Col>
      <Col span={8} offset={8}>
        col-8
      </Col>
    </Row> */}
        {children}
    </div>
  )
}

export default DefaultComponent
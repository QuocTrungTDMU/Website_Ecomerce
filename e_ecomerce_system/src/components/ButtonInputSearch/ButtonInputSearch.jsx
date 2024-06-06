import { Button, Input } from 'antd'
import React from 'react'
import { SearchOutlined } from '@ant-design/icons'


const ButtonInputSearch = (props) => {
    const { 
            size, 
            placeholder, 
            textButton, 
            bordered, 
            backgroundColorInput = 'white', 
            backgroundColorButton ='rgb(13, 92, 182)' ,
            colorButton = 'white'
    } = props
    return (
        <div style={{ display: 'flex' }}>
            <Input
                size={size}
                bordered={bordered}
                placeholder={placeholder}
                style={{ backgroundColor: backgroundColorInput }}
            />
            <Button size={size}
                bordered={bordered}
                icon={<SearchOutlined color={colorButton} style={{color:colorButton}}/>}
                //style={{ background: backgroundColorButton,border: !bordered && 'none' }}
            style={{ border: 'none', boxShadow: 'none',background: backgroundColorButton, }} 
            ><span style={{color:colorButton}}>{textButton}</span></Button>
        </div>
    )
}

export default ButtonInputSearch
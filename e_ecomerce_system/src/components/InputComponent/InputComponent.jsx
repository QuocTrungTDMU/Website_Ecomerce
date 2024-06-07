import { Input } from 'antd'
import React from 'react'

const InputComponent = ({size,placeholder,bordered,style,...rests}) => {
    return (
        <Input
            size={size}
            bordered={bordered}
            //variant="borderless"
            placeholder={placeholder}
            style={style}
            {...rests}
        />
    )
}

export default InputComponent
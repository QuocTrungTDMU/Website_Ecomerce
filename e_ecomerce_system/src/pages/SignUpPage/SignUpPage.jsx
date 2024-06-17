import React, { useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent'
import logologin from "../../assets/image/logo_login.png";
import { Image } from "antd";
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'

const SignUpPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false)
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.53)",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "800px",
          height: "445px",
          borderRadius: "6px",
          backgroundColor: "white",
          display: "flex",
        }}
      >
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Đăng nhập hoặc tạo tài khoản</p>
          <InputFormComponent style={{marginBottom:'10px'}} placeholder="abcd@gmail.com"/>
          <div style={{position:'relative'}}>
            <span style={{
              zIndex: 10,
              position: 'absolute',
              top: '4px',
              right:'8px'
            }}
            >{
              isShowPassword ? (
                <EyeFilled/>
              ) : (
                <EyeInvisibleFilled/>
              )
            }
            </span>
             <InputFormComponent placeholder='password' type={isShowPassword ? "text" : "password"}/>
          </div>
         
          <div style={{position:'relative'}}>
            <span style={{
              zIndex: 10,
              position: 'absolute',
              top: '4px',
              right:'8px'
            }}
            >{
              isShowPassword ? (
                <EyeFilled style={{marginTop:'10px'}}/>
              ) : (
                <EyeInvisibleFilled  style={{marginTop:'10px'}}/>
              )
            }
            </span>
             <InputFormComponent style={{marginTop:'10px'}}    
           placeholder='Enter the password' type={isShowPassword ? "text" : "password"}/>
          </div>
          <ButtonComponent
            size={40}
            styleButton={{
              background: "rgb(255,57,69)",
              height: "48px",
              width: "100%",
              border: "none",
              borderRadius: "4px",
              margin:'26px 0 10px'
            }}
            textButton={"Đăng Nhập"}
            styleTextButton={{
              color: "white",
              fontSize: "15px",
              fontWeight: "700px",
            }}
          ></ButtonComponent>
          <p>Bạn đã có tài khoản ?<WrapperTextLight> Đăng Nhập </WrapperTextLight></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image
            src={logologin}
            preview={false}
            alt="Login Logo"
            height="203px"
            width="203px"
            style={{ marginBottom: '20px' }}
          />
          <h4>Mua sắm tại Panther</h4>
        </WrapperContainerRight>
      </div>
    </div>
  )
}

export default SignUpPage
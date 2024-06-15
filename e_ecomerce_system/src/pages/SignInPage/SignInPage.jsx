import React from "react";
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from "./style";
import InputFormComponent from "../../components/InputFormComponent/InputFormComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import logologin from "../../assets/image/logo_login.png";
import { Image } from "antd";

const SignInPage = () => {
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
          <InputFormComponent placeholder='password'/>
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
          <p><WrapperTextLight>Quên mật khẩu</WrapperTextLight></p>
          <p>Bạn chưa có tài khoản ? <WrapperTextLight>Đăng ký</WrapperTextLight></p>
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
  );
};

export default SignInPage;

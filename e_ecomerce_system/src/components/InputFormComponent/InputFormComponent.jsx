import React, { useState } from "react";
import { Input } from "antd";
import { WrapperInputStyle } from "./style";
const InputFormComponent = (props) => {
  const [valueInput, setValueInput] = useState("");
  const { placeholder = "Nhập text", ...rests } = props;
  return (
    <>
      <div>
        <WrapperInputStyle
          placeholder={placeholder}
          value={valueInput}
          {...rests}
        ></WrapperInputStyle>
      </div>
    </>
  );
};

export default InputFormComponent;

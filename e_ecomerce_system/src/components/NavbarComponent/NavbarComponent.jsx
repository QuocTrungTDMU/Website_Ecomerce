import React from "react";
import { WrapperContent, WrapperLableText, WrapperTextValue, WrappetTextPrice } from "./style";
import { Checkbox, Rate } from "antd";

function NavbarComponent() {
  const onChange = () => {};
  const renderContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((option) => {
          return <WrapperTextValue>{option}</WrapperTextValue>;
        });
      case "checkbox":
        return (
          <Checkbox.Group
            style={{ width: "100%", flexDirection: "column" }}
            onChange={onChange}
          >
            {options.map((option) => {
              return <Checkbox value={option.value}>{option.label}</Checkbox>;
            })}
            <Checkbox value="A">A</Checkbox>
            <Checkbox value="B">B</Checkbox>
          </Checkbox.Group>
        );
      case "star":
        return options.map((option) => {
          return (
            <div style={{ display: "flex", gap: "4px" }}>
              <Rate
                style={{ fontSize: "12px" }}
                disabled
                defaultValue={option}
              />
              <span>{`từ ${option} sao`}</span>
            </div>
          );
        });
      case "price":
        return options.map((option) => {
          return (
            <WrappetTextPrice>{option}</WrappetTextPrice>
          )
        
        })
      default:
        return {};
    }
  };
  return (
    <div style={{backgroundColor:'white'}}>
      <WrapperLableText>Label</WrapperLableText>
      <WrapperContent>
        {renderContent("text", ["Tu lanh", "TV", "May giat", "Laptop"])}
      </WrapperContent>
      <WrapperContent>
        {renderContent("checkbox", [
          { value: "a", label: "A" },
          { value: "b", label: "B" },
        ])}
      </WrapperContent>
      <WrapperContent>{renderContent("star", [3, 4, 5])}</WrapperContent>
      <WrapperContent>
        {renderContent("price", ["duoi 40", "tren 50"])}
      </WrapperContent>
    </div>
  );
}

export default NavbarComponent;

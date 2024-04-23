import { Input, ThemeProvider, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { CustomIcon2 } from "../CustomIcons/CustomIcon";

const CustomInput = ({ type, labelHidden, containerClass, onChange, label, labelClass, error, registerProps, ...restProps }) => {
  const customTheme = {
    input: {
      styles: {
        base: {
          container: {
            minWidth: "min-w-[20px]",
          },
          input: {
            width: "w-full",
            minWidth: "min-w-[20px]",
            color: "text-blue-gray-900",
            fontFamily: "font-inter",
            disabled: "disabled:border-blue-gray-200 disabled:bg-blue-gray-50 disabled:bg-opacity-80",
          },
          label: {
            fontWeight: "font-normal",
            fontFamily: "font-inter",
            fontSize: "text-md",
            color: "text-blue-gray-800",
          },
        },
      },
    },
  };

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow((prevState) => !prevState);
  };

  const Icon = () => {
    if (type !== "password") return <></>;
    if (show) return <i className="fa-regular fa-eye cursor-pointer text-white" onClick={handleShow}></i>;
    if (!show) return <i className="fa-regular fa-eye-slash cursor-pointer text-white" onClick={handleShow}></i>;
  };


  // const inputClass = `!border  ${error ? "!border-red-600" : "!border-[#00ACEC]"}  ${error ? "text-red-600" : "text-white"}  shadow-lg shadow-[#00ACEC]/5 ring-4 ring-transparent placeholder:text-white placeholder:opacity-100  ${
  //   error ? " focus:!border-red-600 focus:!border-t-red-600" : "focus:!border-[#00ACEC] focus:!border-t-[#00ACEC]"
  // } focus:ring-[#00ACEC]/10`;

  const generalClass = "shadow-lg shadow-[#00ACEC]/5 ring-4 ring-transparent placeholder:text-white placeholder:opacity-10 focus:ring-[#00ACEC]/10";

  const baseClass = "!border !border-[#00ACEC] text-white focus:!border-[#00ACEC] focus:!border-t-[#00ACEC]";

  // Clase para estilos en caso de error
  const errorClass = "!border !border-red-600 text-red-600 focus:!border-red-600 focus:!border-t-red-600";

  if (labelHidden) {
    return (
      <div className="w-full">
        <ThemeProvider value={customTheme}>
          <div className={containerClass}>
            {label ? (
              <Typography htmlFor={restProps.id} className={labelClass}>
                {label}
              </Typography>
            ) : (
              <></>
            )}
            <Input
              type={type === "password" && !show ? "password" : "text"}
              icon={Icon()}
              theme={customTheme}
              className={(error ? errorClass : baseClass) + generalClass}
              labelProps={{
                className: "hidden",
              }}
              onChange={onChange}
              {...restProps}
              {...registerProps}
            />
          </div>
        </ThemeProvider>
      </div>
    );
  } else {
    return (
      <div className="w-full">
        <ThemeProvider value={customTheme}>
          <div className={containerClass}>
            <Input type={type === "password" && show ? "text" : "password"} icon={Icon()} theme={customTheme} crossOrigin={undefined} onChange={onChange} {...restProps} {...registerProps} />
          </div>
        </ThemeProvider>
      </div>
    );
  }
};

export default CustomInput;

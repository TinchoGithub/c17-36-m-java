import { Input, ThemeProvider } from "@material-tailwind/react";
import React from "react";

const CustomInput = ({labelHidden, containerClass, onChange, ...restProps}) => {
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
            disabled:
              "disabled:border-blue-gray-200 disabled:bg-blue-gray-50 disabled:bg-opacity-80",
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

  if (labelHidden) {
    return (
      <div className="w-full">
        <ThemeProvider value={customTheme}>
        <div className={containerClass}>
          <Input
            {...restProps}
            theme={customTheme}
            className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
            labelProps={{
              className: "hidden",
            }}
            onChange={onChange}
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
              <Input {...restProps} theme={customTheme} crossOrigin={undefined} onChange={onChange} />
            </div>
          </ThemeProvider>
        </div>
      );
  }
};

export default CustomInput;

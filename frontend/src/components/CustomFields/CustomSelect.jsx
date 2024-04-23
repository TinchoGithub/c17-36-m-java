import { ThemeProvider, Select, Option, Typography } from "@material-tailwind/react";
import { CustomCheckBox } from "./CustomCheckBox";

const CustomSelect = ({ labelHidden, containerClass, onChange, variant, label, labelClass, options, error, registerProps, ...restProps }) => {
  const customTheme = {
    select: {
      styles: {
        base: {
          container: {
            minWidth: "min-w-[20px]",
          },
          select: {
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
          menu: {
            width: "w-full",
            maxHeight: "max-h-96",
            bg: "bg-[#00ADEF]",
            p: "p-3",
            border: "border-none",
            borderRadius: "rounded-b-[2em]",
            boxShadow: "shadow-lg shadow-blue-gray-500/10",
            fontFamily: "font-sans",
            fontSize: "text-md",
            fontWeight: "font-normal font-inter",
            color: "text-[#003A53]",
            overflow: "overflow-auto",
            outline: "focus:outline-none",
            textAlign: "text-center",
          },
          option: {
            initial: {
              pt: "pt-[9px]",
              pb: "pb-2",
              px: "px-3",
              mb: "mb-2",
              borderRadius: "rounded-md",
              lightHeight: "leading-tight",
              cursor: "cursor-pointer",
              userSelect: "select-none",
              background: "hover:bg-[#017BAA] focus:bg-[#017BAA]",
              opacity: "hover:bg-opacity-80 focus:bg-opacity-80",
              color: "hover:text-white focus:text-white",
              outline: "outline outline-0",
              transition: "transition-all",
            },
            active: {
              bg: "bg-[#017BAA] bg-opacity-80",
              color: "text-white",
            },
            disabled: {
              opacity: "opacity-50",
              cursor: "cursor-not-allowed",
              userSelect: "select-none",
              pointerEvents: "pointer-events-none",
            },
          },
        },
      },
    },
  };

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
            <Select
              theme={customTheme}
              className={(error ? errorClass : baseClass) + generalClass}
              variant={variant || "outlined"}
              labelProps={{
                className: "hidden",
              }}
              onChange={onChange}
              {...restProps}
              {...registerProps}
            >
              {options?.map((option) => (
                <Option key={option.id} value={`${option.id}`}>
                  {option.value}
                  {/* <div className="flex justify-between">
                    <Typography></Typography>
                    <Typography >{option.value}</Typography>
                    <CustomCheckBox />
                  </div> */}
                </Option>
              ))}
            </Select>
          </div>
        </ThemeProvider>
      </div>
    );
  } else {
    return (
      <div className="w-full">
        <ThemeProvider value={customTheme}>
          <div className={containerClass}>
            <Select theme={customTheme} crossOrigin={undefined} onChange={onChange} {...restProps} {...registerProps}>
              {options?.map((option) => (
                <Option key={option.id} value={`${option.id}`}>
                  {option.value}
                </Option>
              ))}
            </Select>
          </div>
        </ThemeProvider>
      </div>
    );
  }
};

export default CustomSelect;

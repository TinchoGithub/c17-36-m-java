import { Checkbox, ThemeProvider, Typography } from "@material-tailwind/react";

const customTheme = {
  checkbox: {
    defaultProps: {
      color: "blue",
      label: undefined,
      icon: undefined,
      ripple: true,
      className: "",
      disabled: false,
      containerProps: undefined,
      labelProps: undefined,
      iconProps: undefined,
    },
    valid: {
      colors: [
        "blue-gray",
        "gray",
        "brown",
        "deep-orange",
        "orange",
        "amber",
        "yellow",
        "lime",
        "light-green",
        "green",
        "teal",
        "cyan",
        "light-blue",
        "blue",
        "indigo",
        "deep-purple",
        "purple",
        "pink",
        "red",
      ],
    },
    styles: {
      base: {
        container: {
          position: "relative",
          display: "flex",
          alignItems: "items-center",
          cursor: "cursor-pointer",
          p: "p-0 mr-3",
          borderRadius: "rounded-sm",
        },
        label: {  
          // color: "text-white",
          // fontWeight: "font-light",
          // userSelect: "select-none",
          // cursor: "cursor-pointer",
          // mt: "mt-px",
          padding: 0
        },
      },
    },
  },
};


export function CustomCheckBox({ label, LabelClass, registerProps, ...rest }) {
    
const Label = (<Typography className={LabelClass}>{label}</Typography>)

  return (
    <ThemeProvider value={customTheme}>
      <Checkbox label={Label} {...rest} {...registerProps} />
    </ThemeProvider>
  );
}

import { Typography } from "@material-tailwind/react";
import React from "react";

const CustomIcon = ({ containerClass, iconClass, labelClass, label, ...rest }) => {
  return (
    <div className={`${containerClass} flex items-center  gap-1`}>
      <i {...rest}></i>
      <Typography className={labelClass}>{label}</Typography>
    </div>
  );
};

export default CustomIcon;


const CustomIcon2 = ({ containerClass, iconClass, icon, labelClass, label, ...rest }) => {
  return (
    <div className={`${containerClass} flex items-center  gap-1`}>
      <span className={iconClass} {...rest}>{icon}</span>
      <Typography className={labelClass}>{label}</Typography>
    </div>
  );
};

export { CustomIcon2 };
// import { useState } from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import balanceEyeIcon from "../../../assets/balanceEyeIcon.svg";

export function Balance() {
  return (
   
      <Card className="flex justify-center mt-6 w-60 h-44 border-b-2 border-black-700 shadow-md bg-solitude-blue-100">
        <CardBody className="flex flex-col items-center justify-center">
          <Typography
            variant="h5"
            className="mb-3 text-xl  text-blumine-blue-900"
          >
            Tu Dinero
          </Typography>
          <div className="flex items-center">
            <Typography className="text-4xl text-picton-blue-500 mr-2">
              $1250
            </Typography>
            <img src={balanceEyeIcon} className="w-8 h-auto" />
          </div>
        </CardBody>
      </Card>
    
  );
}

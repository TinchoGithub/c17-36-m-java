// import React from "react";
import activityIcon from "../../../assets/activityIcon.svg";
import { Card, CardBody, Typography } from "@material-tailwind/react";

export function Activity() {
  return (
    <section className="flex flex-col mt-8 max-w-full">
      <div className="flex">
        <img src={activityIcon} className="ml-20 h-8 w-12" />
        <h1 className="  pt-1 text-picton-blue-500 ml-2">Tu Actividad</h1>
      </div>

      <div className="flex justify-center mx-20">
        <Card className="mt-6 w-full h-24 bg-solitude-blue-100">
          <CardBody className="flex flex-col items-start ml-10">
            <Typography className="text-md mt-0 text-blumine-blue-900">
              Transferencia Enviada | a Matias Perez
            </Typography>
            <div className="flex space-x-96 ">
              <Typography className="text-md mt-0 text-blumine-blue-900 mr-96 ">
                $2500
              </Typography>
              <Typography className="text-md mt-0 text-blumine-blue-900 ">
                19:30
              </Typography>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

// import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import iconMoney from "../../../assets/iconMoney.svg";
import shortcutIcon from "../../../assets/shortcutIcon.svg";

import payTaxesIcon from "../../../assets/payTaxesIcon.svg";
import transferMoneyIcon from "../../../assets/transferMoneyIcon.svg";
import requestLoanIcon from "../../../assets/requestLoanIcon.svg";
import { Link } from "react-router-dom";

export function Shortcuts() {
  return (
    <section className="w-auto">
      <div className="flex">
        <img src={shortcutIcon} className="ml-20  object-fit h-8 w-12" />
        <h1 className="  pt-1 text-picton-blue-500">Tus Atajos</h1>
      </div>

      <section className="grid grid-cols-2 justify-items-center">
        <Card className="mt-6 w-60 h-44 bg-solitude-blue-100">
          <CardBody className="flex flex-col items-center">
            <img src={iconMoney} className="h-24 w-20 object-fit" />
            <Typography className="text-xl font-bold mt-2 text-blumine-blue-900">
              Agregar Dinero
            </Typography>
          </CardBody>
        </Card>
        <Link to="/transferencias">
          <Card className="mt-6 w-60 h-44 bg-solitude-blue-100">
            <CardBody className="flex flex-col items-center">
              <img
                src={transferMoneyIcon}
                className="object-fit h-20 w-24 mt-0 mr-4"
              />
              <Typography className="text-xl font-bold mt-6 text-blumine-blue-900">
                Transferir Dinero
              </Typography>
            </CardBody>
          </Card>
        </Link>

        <Card className="mt-6 w-60 h-44 bg-solitude-blue-100">
          <CardBody className="flex flex-col items-center">
            <img src={requestLoanIcon} className="object-fit h-20 w-24 mt-1 " />
            <Typography className="text-xl font-bold mt-6 text-blumine-blue-900">
              Pedir Préstamo
            </Typography>
          </CardBody>
        </Card>

        <Card className="mt-6 w-60 h-44 bg-solitude-blue-100">
          <CardBody className="flex flex-col items-center">
            <img src={payTaxesIcon} className="object-fit h-20 w-20 mt-4" />
            <Typography className="text-xl font-bold mt-2 text-blumine-blue-900">
              Pagar impuestos
            </Typography>
          </CardBody>
        </Card>
      </section>
    </section>
  );
}

import { Card, CardBody, Typography } from "@material-tailwind/react";
import nextIcon from "../../../assets/nextIcon.svg";
import { Link } from "react-router-dom";

export function NewAccount() {
  return (
    <Link to="/transferencias/cuenta-nueva/agregar-cuenta">
      <Card className="flex justify-center mt-6 w-auto h-12 bg-bahama-blue-800 ml-4 mr-44 ">
        <CardBody className="flex items-center justify-between px-4">
          <div className="flex items-center justify-between w-full ">
            <Typography variant="h5" className="text-m text-solitude-blue-100">
              Nueva Cuenta
            </Typography>

            <img src={nextIcon} className="ml-auto" />
          </div>
        </CardBody>
      </Card>
    </Link>
  );
}

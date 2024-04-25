import { Input } from "@material-tailwind/react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import warningIcon from "../../../assets/warningIcon.svg";

export function InputMoneyAmount() {
  return (
    <Card className="flex justify-center mt-6 w-auto h-36 bg-solitude-blue-100 ml-4 mr-44 ">
      <CardBody className="flex mx-10 ">
        <div className="flex justify-startitems-center flex-col ">
          <Typography className="text-m text-black mb-2 ml-4">
            Ingresa un monto de dinero
          </Typography>
          <div>
            <Input ttype="text"
              inputMode="numeric"
              pattern="[0-9]*"/>

            <div className="flex items-center mt-2">
              <img src={warningIcon} className=" w-4 h-4 mr-1 ml-4" />
              <Typography className="text-xs text-black">
                Disponible: $8000
              </Typography>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

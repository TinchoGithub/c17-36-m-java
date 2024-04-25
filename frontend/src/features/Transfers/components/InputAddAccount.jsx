import { Card, CardBody, Typography, Input } from "@material-tailwind/react";
import warningIcon from "../../../assets/warningIcon.svg";

export function InputAddAccount() {
  return (
    <Card className="flex justify-center mt-6 w-auto h-36 bg-solitude-blue-100 ml-4 mr-44 ">
      <CardBody className="flex mx-10 ">
        <div className="flex justify-startitems-center flex-col ">
          <Typography className="text-m text-black mb-2 ml-4">
            Ingresa un CBU, CVU o Alias
          </Typography>
          <div>
            <Input className="w-50 " />

            <div className="flex items-center mt-2">
              <img src={warningIcon} className=" w-4 h-4 mr-1 ml-4" />
              <Typography  className="text-xs text-black">
                Usa entre 6 y 22 caracteres
              </Typography>
            </div>

          </div>
        </div>
      </CardBody>
    </Card>
  );
}

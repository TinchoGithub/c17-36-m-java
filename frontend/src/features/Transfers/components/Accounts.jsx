import { Card, CardBody, Typography } from "@material-tailwind/react";
import favoriteIcon from "../../../assets/favoriteIcon.svg";

export function Accounts() {
  return (
  <section>
<Card className="flex justify-center mt-6 w-auto h-24 bg-solitude-blue-100 ml-4 mr-44 ">
      <CardBody className="flex mx-10 justify-between">
        <div className="flex justify-startitems-center flex-col ">
          <Typography variant="h5" className="text-m text-picton-blue-500 mb-2">
            Florencia Gordillo
          </Typography>
          <Typography variant="h5" className="text-sm text-picton-blue-500">
            Grow Bank
          </Typography>
        </div>
        <div className="flex justify-end items-center flex-col">
          <img src={favoriteIcon} className=" w-7 h-7 mb-1" />
          <Typography variant="h5" className="text-sm text-picton-blue-500">
            Eliminar Cuenta
          </Typography>
        </div>
      </CardBody>
    </Card>

    <Card className="flex justify-center mt-6 w-auto h-24 bg-solitude-blue-100 ml-4 mr-44 ">
      <CardBody className="flex mx-10 justify-between">
        <div className="flex justify-startitems-center flex-col ">
          <Typography variant="h5" className="text-m text-picton-blue-500 mb-2">
            Pepito Flores
          </Typography>
          <Typography variant="h5" className="text-sm text-picton-blue-500">
            Grow Bank
          </Typography>
        </div>
        <div className="flex justify-end items-center flex-col">
          <img src={favoriteIcon} className=" w-7 h-7 mb-1" />
          <Typography variant="h5" className="text-sm text-picton-blue-500">
            Eliminar Cuenta
          </Typography>
        </div>
      </CardBody>
    </Card>
  </section>
    

    

    
  );
}

import { Card, CardBody, Typography } from "@material-tailwind/react";

export function Voucher() {
  return (
    <Card className="flex justify-center  w-96 h-auto bg-solitude-blue-100 ml-4 mr-44 ">
      <CardBody className="flex mx-10 justify-between">
        <div className="flex justify-startitems-center flex-col ">
          <Typography className="text-lg text-tarawera-blue-950 mb-2">
            Transferencia
          </Typography>
          <Typography className="text-m text-black mb-5">
            N° de operacion: 1145458 <br></br>
            Realizada: 19/abr/2024 - 22:30 hr.
          </Typography>
          <Typography className="text-m text-black mb-5">
            Empresa de origen <br></br>
            GROW BANK
          </Typography>
          <Typography className="text-m text-black mb-5">
            Desde <br></br>FULANO XXX
          </Typography>
          <Typography className="text-m text-black mb-5">
            Datos de la cuenta<br></br>
            107084302
          </Typography>
          <Typography className="text-m text-black mb-5">
            Cuit de origen <br></br>xxxxxxxxxxxxxx
          </Typography>
          <Typography className="text-m text-black mb-5">
            Cbu de destino<br></br>
            xxxxxxxxxxxxxx{" "}
          </Typography>
          <Typography className="text-m text-black">
            Concepto <br></br>Varios{" "}
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}

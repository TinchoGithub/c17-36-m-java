import { Card, CardBody, Typography } from "@material-tailwind/react";

export function InfoCheck() {
  return (
    <Card className="flex justify-center mt-6 w-auto h-auto bg-solitude-blue-100 ml-4 mr-44 ">
      <CardBody className="flex mx-10 justify-between">
        <div className="flex justify-startitems-center flex-col ">
          <Typography className="text-lg text-black mb-2">Para</Typography>
          <Typography className="text-m font-bold text-picton-blue-500">
            Florencia Gordillo
          </Typography>
          <Typography className="text-m font-bold text-picton-blue-500">
            Grow Bank
          </Typography>
          <Typography className="text-m font-bold text-picton-blue-500">
            CVU: 1234567890
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}

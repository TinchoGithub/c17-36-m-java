import { Card, CardBody, Typography } from "@material-tailwind/react";

export function ChooseAccount() {
  return (
    <Card className="flex justify-center mt-6 w-auto  h-12 bg-bahama-blue-800 ml-4 mr-44">
      <CardBody className="flex items-center">
        <div className="flex flex-wrap w-full  ">
          <div className="w-1/2 pl-16 pr-4">
            <SmallCard title="Ultimas" />
          </div>
          <div className="w-1/2 h-auto pr-16 pl-4">
            <SmallCard title="Favoritas" />
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

function SmallCard({ title }) {
  return (
    <Card>
      <CardBody className="flex justify-center p-0  ">
        <Typography variant="h6" className="text-picton-blue-500">
          {title}
        </Typography>
      </CardBody>
    </Card>
  );
}

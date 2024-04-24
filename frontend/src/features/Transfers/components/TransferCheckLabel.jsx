import { Card, CardBody, Typography } from "@material-tailwind/react"

export function TransferCheckLabel (){
    return(
        <Card className="flex justify-center mt-6 w-auto h-12 bg-bahama-blue-800 ml-4 mr-44 ">
        <CardBody className="flex items-center justify-between px-4">
          <div className="flex items-center justify-between w-full ">
            <Typography  className="text-xl text-solitude-blue-100">
              Verifica si todo esta bien
            </Typography>

            
          </div>
        </CardBody>
      </Card>
    )
}
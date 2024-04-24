import { Card, CardBody, Typography } from "@material-tailwind/react"

export function TransferDateAmount(){
    return(
        <Card className="flex justify-center mt-6 w-auto h-24 bg-solitude-blue-100 ml-4 mr-44 ">
      <CardBody className="flex mx-10 justify-between">
        <div className="flex justify-startitems-center flex-col ">
          <Typography className="text-lg text-black mb-2">
            19 de Abril 2024 - 22:30 hs.
          </Typography>
          <Typography variant="h5" className="text-m text-picton-blue-500">
            $2500
          </Typography>
        </div>
        
      </CardBody>
    </Card>
    )
}
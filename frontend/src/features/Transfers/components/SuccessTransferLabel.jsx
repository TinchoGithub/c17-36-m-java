import { Card, CardBody, Typography } from "@material-tailwind/react"
import checkIcon from '../../../assets/checkIcon.svg'

export function SuccessTransferLabel (){
    return(
        <Card className="flex justify-center mt-6 w-auto h-12 bg-picton-blue-500 ml-4 mr-44 border-4 border-tarawera-blue-950 ">
        <CardBody className="flex items-center justify-between px-4">
          <div className="flex items-center justify-between w-full ">
            <Typography  className="text-xl text-solitude-blue-100">
              FELICITACIONES, YA ENVIAMOS TU TRANSFERENCIA
            </Typography>
            <img src={checkIcon} />

            
          </div>
        </CardBody>
      </Card>
    )
}
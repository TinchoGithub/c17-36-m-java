import { SideBar } from "../../../components/SideBar";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Label } from "../components/Label";
import { SuccessTransferLabel } from "../components/SuccessTransferLabel";
import { TransferDateAmount } from "../components/TransferDateAmount";
import { InfoCheck } from "../components/InfoCheck";
import { VoucherButton } from "../components/VoucherButton";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";

export function SuccessTransfer (){
return(
    <div className="flex h-screen bg-sail-blue-200">
      <SideBar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex flex-col flex-1 overflow-y-auto p-8 ml-52 bg-sail-blue-200">
         <Label />
         <SuccessTransferLabel />
         <TransferDateAmount />
         <InfoCheck />
         
         <Link to="/transferencias/cuenta-nueva/voucher">
         <VoucherButton />
         </Link>
         
        </div>
        <Footer />
      </div>
    </div>
)
}
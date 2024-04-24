import { SideBar } from "../../../components/SideBar";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Label } from "../components/Label";
import { ContinueButton } from "../components/ContinueButton";
import { Link } from "react-router-dom";
import { MoneyAmountLabel } from "../components/MoneyAmountLabel";
import { InputMoneyAmount } from "../components/InputMoneyAmount";

export function TransferMoneyAmount (){
return(
    <div className="flex h-screen bg-sail-blue-200">
      <SideBar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex flex-col flex-1 overflow-y-auto p-8 ml-52 bg-sail-blue-200">
         <Label />
         <MoneyAmountLabel />
         <InputMoneyAmount />
         
         <Link to="/transferencias/cuenta-nueva/verificar-datos">
         <ContinueButton />
         </Link>
         
        </div>
        <Footer />
      </div>
    </div>
)
}
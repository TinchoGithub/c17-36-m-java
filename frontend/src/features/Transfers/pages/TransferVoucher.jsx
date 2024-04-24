import { SideBar } from "../../../components/SideBar";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";

import { Label } from "../components/Label";
import { Voucher } from "../components/Voucher";
import { ShareButton } from "../components/ShareButton";


export function TransferVoucher() {
  return (
    <div className="flex h-screen bg-sail-blue-200">
      <SideBar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex flex-col flex-1 overflow-y-auto p-8 ml-52 bg-sail-blue-200s">
          <Label />
          
          <div className="flex justify-center">
          <Voucher/>
          </div>
          <ShareButton />
        </div>
        <Footer />
      </div>
    </div>
  );
}

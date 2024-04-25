import { SideBar } from "../../../components/SideBar";
import { useState } from "react";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { NewAccount } from "../components/NewAccount";
import { Label } from "../components/Label";
import { ChooseAccount } from "../components/ChooseAccount";
import { Accounts } from "../components/Accounts";

export function Transfers() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-sail-blue-200">
      <SideBar isOpen={isSidebarOpen} />
      <div className="flex flex-col flex-1">
         <Header toggleSidebar={toggleSidebar} />
        <div className="flex flex-col flex-1 overflow-y-auto p-8 ml-52 bg-sail-blue-200">
          <Label />
          <div className="">
            <NewAccount />
            <ChooseAccount />
            <Accounts />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

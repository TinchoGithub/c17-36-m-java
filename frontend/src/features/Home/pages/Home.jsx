import { useState } from "react";
import { Balance } from "../components/Balance";
import { Header } from "../../../components/Header";
import { SideBar } from "../../../components/SideBar";
import { Shortcuts } from "../components/Shortcuts";
import { Activity } from "../components/Activity";
import { Footer } from "../../../components/Footer";

export function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <section className="w-screen bg-sail-blue-200">
  <div className="flex h-screen">
    <SideBar isOpen={isSidebarOpen} />

    <div className="flex flex-col flex-1">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex ml-56 flex-col flex-1 overflow-y-auto bg-sail-blue-200 pb-12">
        <section className="flex justify-center">
          <Balance />
        </section>
        <Shortcuts />
        <Activity />
      </div>
      <Footer />
    </div>
  </div>
</section>
  );
}

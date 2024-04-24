import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png";
import homeIcon from "../assets/homeIcon.svg";
import accountsIcon from "../assets/accountsIcon.svg";
import activityIcon from "../assets/activityIcon.svg";
import loansIcon from "../assets/loansIcon.svg";
import paymentIcon from "../assets/paymentIcon.svg";
import transfersIcon from "../assets/transfersIcon.svg";
import profileIcon from "../assets/profileIcon.svg";
import settingsIcon from "../assets/settingsIcon.svg";
import contactIcon from "../assets/contactIcon.svg";

export function SideBar({ isOpen, toggleSidebar }) {

  const sidebarStyle = {
    backgroundColor: "rgba(13, 31, 50, 0.85)", // Background color with 85% transparency
    position: "fixed",
    top: "4rem", // Adjust the top position to fit below the header
    left: 0,
    width: "100%",
    height: "100%", // Adjust the height to fit below the header
    zIndex: 999, // Ensure the sidebar covers other elements
    display: isOpen ? "flex" : "none",
    justifyContent: "center",
    alignItems: "center",
  };
  
  return (
    <>
      {/* Static Sidebar for larger screens */}
      <div className="hidden absolute z-10 lg:block w-56 bg-tarawera-blue-950 text-white">
        <section className="h-screen">
          {/* Sidebar */}
          <div className="flex items-center justify-center p-1 bg-bahama-blue-800 h-16">
          <button onClick={toggleSidebar} className="md:hidden mr-auto">
        <span className="block w-6 h-1 bg-white mb-1"></span>
        <span className="block w-6 h-1 bg-white mb-1"></span>
        <span className="block w-6 h-1 bg-white"></span>
      </button>
            <h1 className="text-2xl lg:text-m font-semibold text-center px-2 text-white">
              Hola, Fulano!
            </h1>
          </div>
          {/* Buttons for functionalities */}
          <div className="flex flex-col p-4 gap-y-3">
            <Link to="/home">
              <button className="w-full py-2 mb-2 bg-white text-black rounded-md flex flex-wrap items-center">
                <img src={homeIcon} className="mx-2" />
                Home
              </button>
            </Link>
            <Link>
              <button className="w-full py-2 mb-2 bg-white text-black rounded-md flex flex-wrap items-center">
                <img src={accountsIcon} className="mx-2 " />
                Cuentas
              </button>
            </Link>
            <hr className="my-2 border-picton-blue-500" />
            <button className="w-full py-2 mb-2 bg-white text-black rounded-md flex flex-wrap items-center">
              <img src={activityIcon} className="mx-2" />
              Actividad
            </button>
            <button className="w-full py-2 mb-2 bg-white text-black rounded-md flex flex-wrap items-center">
              <img src={loansIcon} className="mx-2" />
              Creditos
            </button>
            <button className="w-full py-2 mb-2 bg-white text-black rounded-md flex flex-wrap items-center">
              <img src={paymentIcon} className="mx-2" />
              Pagos
            </button>
            <Link to="/transferencias">
              <button className="w-full py-2 mb-2 bg-white text-black rounded-md flex flex-wrap items-center">
                <img src={transfersIcon} className="mx-2" />
                Transferencias
              </button>
            </Link>
            <hr className="my-2 border-picton-blue-500" />
            <button className="w-full py-2 mb-2 bg-white text-black rounded-md flex flex-wrap items-center">
              <img src={profileIcon} className="mx-2" />
              Perfil
            </button>
            <button className="w-full py-2 mb-2 bg-white text-black rounded-md flex flex-wrap items-center">
              <img src={settingsIcon} className="mx-2" />
              Configuracion
            </button>
            <button className="w-full py-2 bg-white text-black rounded-md flex flex-wrap items-center">
              <img src={contactIcon} className="mx-2" />
              Contacto
            </button>
          </div>
          {/* Main content */}
          <div className="flex-grow flex justify-center mt-0 items-center">
            {/* Bank logo */}
            <img
              src={logoImg}
              alt="Bank Logo"
              className="w-12 h-12 mb-4 ml-2"
            />
            <span className="text-lg inter pb-3 ml-1 text-solitude-blue-100">
              GROW BANK
            </span>
            {/* Add your main content here */}
          </div>
        </section>
      </div>

      {/* Toggleable Sidebar for smaller screens */}
      <div style={sidebarStyle} className="lg:hidden">
        <section className="h-screen w-screen">
          {/* Sidebar */}
          <div className="flex items-center justify-center p-1 bg-bahama-blue-800 h-16">
            <h1 className="text-2xl lg:text-m font-semibold text-center px-2 text-white">
              Hola, Fulano!
            </h1>
          </div>
          {/* Buttons for functionalities */}
          <div className="flex flex-col p-4 gap-y-3">
            <Link to="/home">
              <button className="w-full py-2 mb-2 bg-white text-black rounded-md flex flex-wrap items-center">
                <img src={homeIcon} className="mx-2" />
                Home
              </button>
            </Link>
            <Link>
              <button className="w-full py-2 mb-2 bg-white text-black rounded-md flex flex-wrap items-center">
                <img src={accountsIcon} className="mx-2 " />
                Cuentas
              </button>
            </Link>
            <hr className="my-2 border-picton-blue-500" />
            <button className="w-full py-2 mb-2 bg-white text-black rounded-md flex flex-wrap items-center">
              <img src={activityIcon} className="mx-2" />
              Actividad
            </button>
            <button className="w-full py-2 mb-2 bg-white text-black rounded-md flex flex-wrap items-center">
              <img src={loansIcon} className="mx-2" />
              Creditos
            </button>
            <button className="w-full py-2 mb-2 bg-white text-black rounded-md flex flex-wrap items-center">
              <img src={paymentIcon} className="mx-2" />
              Pagos
            </button>
            <Link to="/transferencias">
              <button className="w-full py-2 mb-2 bg-white text-black rounded-md flex flex-wrap items-center">
                <img src={transfersIcon} className="mx-2" />
                Transferencias
              </button>
            </Link>
            <hr className="my-2 border-picton-blue-500" />
            <button className="w-full py-2 mb-2 bg-white text-black rounded-md flex flex-wrap items-center">
              <img src={profileIcon} className="mx-2" />
              Perfil
            </button>
            <button className="w-full py-2 mb-2 bg-white text-black rounded-md flex flex-wrap items-center">
              <img src={settingsIcon} className="mx-2" />
              Configuracion
            </button>
            <button className="w-full py-2 bg-white text-black rounded-md flex flex-wrap items-center">
              <img src={contactIcon} className="mx-2" />
              Contacto
            </button>
          </div>
          {/* Main content */}
          <div className="flex-grow flex justify-center mt-0 items-center">
            {/* Bank logo */}
            <img
              src={logoImg}
              alt="Bank Logo"
              className="w-12 h-12 mb-4 ml-2"
            />
            <span className="text-lg inter pb-3 ml-1 text-solitude-blue-100">
              GROW BANK
            </span>
            {/* Add your main content here */}
          </div>
        </section>
      </div>
    </>
  );
}
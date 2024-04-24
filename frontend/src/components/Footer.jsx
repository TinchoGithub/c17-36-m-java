// import logoFooter from "../../../assets/logoFooter.svg";
import policyIcon from "../assets/policyIcon.svg";
import helpIcon from '../assets/helpIcon.svg'

export function Footer() {
  return (
    <footer className="flex items-center z-20 fixed justify-between bg-tarawera-blue-950 h-8 w-full bottom-0">
      <div className="flex items-center">
        {/* <img src={logoFooter} className="ml-1" /> */}
        <div>
          <h1 className="text-solitude-blue-100 ml-2 text-xs font-light">
            2024. Copyright. Grow Bank. Todos los derechos reservados
          </h1>
        </div>
      </div>

      <div className="flex items-center pr-2">
        <button className="flex">
        <img src={policyIcon} />
        <h1 className="text-solitude-blue-100 mr-4 ml-1 text-xs font-light ">
          Políticas y Condiciones
        </h1>
        </button>
        <button className="flex">
        <img src={helpIcon} />
        <h1 className="text-solitude-blue-100 mr-3 ml-1 text-xs font-light ">
          Ayuda
        </h1>
        </button>
      </div>
    </footer>
  );
}

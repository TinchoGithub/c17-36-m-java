import { useState } from "react";
import { Link } from "react-router-dom";
import announcementsIcon from "../assets/announcementsIcon.svg";
import helpBlueIcon from "../assets/helpBlueIcon.svg";

export function Header({ toggleSidebar }) {
  return (
    <header className="flex justify-between items-center bg-picton-blue-500 p-5 h-16 ">
      {/* Toggle button with three lines */}
      <button onClick={toggleSidebar} className="md:hidden mr-auto">
        <span className="block w-6 h-1 bg-white mb-1"></span>
        <span className="block w-6 h-1 bg-white mb-1"></span>
        <span className="block w-6 h-1 bg-white"></span>
      </button>

      {/* Navigation links */}
      <nav className="ml-auto">
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-gray-300 ">
              <div className="flex">
                <img src={announcementsIcon} alt="Announcements" />
                <h1 className="ml-1 text-tarawera-blue-950">Avisos</h1>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              <div className="flex">
                <img src={helpBlueIcon} alt="Help" />
                <h1 className="ml-1 text-tarawera-blue-950">Ayuda</h1>
              </div>
            </a>
          </li>
          <li>
            <Link to="/auth/*">
              <div className="flex">
                <h1 className=" text-tarawera-blue-950">Cerrar Sesión</h1>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

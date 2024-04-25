import { Card, Typography, Button, Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import React, { useState } from "react";
import images from "../assets/images";
import CustomIcon, { CustomIcon2 } from "../components/CustomIcons/CustomIcon";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const nativate = useNavigate();

  const handleNavigate = (path) => {
    nativate(path);
  };

  return (
    <div className="h-screen">
      <div className="header px-5 md:px-10 flex justify-between items-center gap-10 text-white  bg-[#003A52]">
        <div>
          <img src={images.logoPNG} alt="" width={60} className="cursor-pointer" />
        </div>
        <div className="flex items-center">
          <Button className="capitalize text-white bg-[#00ADEF] py-[0.6rem] px-7 rounded-2xl" onClick={() => handleNavigate("auth/login")}>
            Iniciar Sesión
          </Button>
          <Button className="capitalize text-[#00ADEF] bg-[#B6DFFF] py-[0.6rem] px-7 mx-4 rounded-2xl" onClick={() => handleNavigate("auth/login")}>
            Registrarse
          </Button>
          <CustomIcon2 icon="help_outline" iconClass="material-icons text-xl  px-1 cursor-pointer" />
          <Typography className="text-sm pr-8 text-[#27B9F2] cursor-pointer">Ayuda</Typography>
          <Typography className="text-sm text-[#27B9F2] cursor-pointer">Salir</Typography>
        </div>
      </div>
      <div className="min-h-full pb-52">
        <div>
          <div className="bg-[#00ADEF] py-4 px-10 rounded-3xl absolute right-8 top-80 w-6/12 ">
            <Typography className="text-white font-inter font-medium">¡Tu mejor opción al alcance tu mano!</Typography>
            <Typography className="text-[#002030] font-inter font-semibold text-lg py-2">GROW BANK</Typography>
            <Typography className="text-white font-inter font-medium">Probar no cuesta nada, abrís tu cuenta y empiezas a gestionar tus finanzas de forma fácil y rápida.</Typography>
          </div>
          <img src={images.landingPage.mainTopImgPNG} alt="" height={500} />
        </div>

        <div className="flex justify-center gap-20 w-full py-10 px-5">

          {/*  */}

          <div className="relative">
            <div className="flex justify-center items-center">
              <img src={images.landingPage.secondaryLeftImgPNG} alt="" className="w-12/12" />
              <div className="bg-[#00425D] w-8/12 p-7 rounded-3xl text-center flex flex-col items-center gap-5 absolute bottom-[-5rem]">
                <Typography className="text-white font-inter uppercase font-medium text-lg">CUENTA GRATIS Y FÁCIL DE USAR</Typography>
                <Typography className="text-white font-inter">100% Digital y Accesible. La abrís en un minuto y podes empezar a gestionar tus finanzas sin ninguna dificultad.</Typography>
                <Button className="capitalize text-white bg-[#00ADEF] py-[0.6rem] px-7 rounded-2xl" onClick={() => handleNavigate("auth/login")}>
                  Conoce más
                </Button>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="relative">
            <div className="flex justify-center items-center">
              <img src={images.landingPage.secondaryRightImgPNG} alt="" className="w-12/12" />
              <div className="bg-[#00425D] w-8/12 p-7 rounded-3xl text-center flex flex-col items-center gap-5 absolute bottom-[-5rem]">
                <Typography className="text-white font-inter uppercase font-medium text-lg">Una cuenta para tu empresa</Typography>
                <Typography className="text-white font-inter">100% Digital y Accesible. La abrís en un minuto y podes empezar a gestionar tus finanzas sin ninguna dificultad.</Typography>
                <Button className="capitalize text-white bg-[#00ADEF] py-[0.6rem] px-7 rounded-2xl" onClick={() => handleNavigate("auth/login")}>
                  Conoce más
                </Button>
              </div>
            </div>
          </div>

          {/*  */}
        </div>
      </div>

      <div className="footer flex justify-between py-2 px-5 md:px-10 bg-[#003A52]">
        <div className="flex items-center gap-5">
          <img src={images.logoPNG} alt="" width={40} className="cursor-pointer" />
          <Typography className="font-inter font-thin text-xs text-white">&copy; 2024. Copyright. Grow-Bank. Todos los derechos reservados</Typography>
        </div>
        <div className="flex items-center gap-5 text-white">
          <div className="flex items-center">
            <CustomIcon className="fa-solid fa-circle-exclamation text-lg cursor-pointer" />
            <Typography className="font-inter hidden lg:block">Pol&iacute;ticas y Condiciones</Typography>
          </div>
          <div className="flex items-center">
            <CustomIcon className="fa-regular fa-circle-question text-lg cursor-pointer" />
            <Typography className="font-inter hidden lg:block">Ayuda</Typography>
          </div>
          <div className="flex items-center">
            <CustomIcon className="fa-solid fa-angle-up text-lg cursor-pointer" />
            <Typography className="font-inter ">Salir</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

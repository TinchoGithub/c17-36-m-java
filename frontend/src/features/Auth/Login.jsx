import { Card, Typography, Button, Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import React, { useState } from "react";
import images from "../../assets/images";
import CustomIcon, { CustomIcon2 } from "../../components/CustomIcons/CustomIcon";
import CustomInput from "../../components/CustomFields/CustomInput";
import { CustomCheckBox } from "../../components/CustomFields/CustomCheckBox";
import CustomAccordion from "../../components/CustomAccordion/CustomAccordion";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { logIn } from "./auth.slice";
import authService from "./services/auth.service";
import AlertComponent from "../../components/Alert/Alert";
import { useNavigate } from "react-router-dom";
import CustomSelect from "../../components/CustomFields/CustomSelect";

function Login() {
  useState;
  const [isLoading, setIsLoading] = useState(false);
  const [alertInfo, setAlertInfo] = useState({ openAlert: false });
  const [activeTab, setActiveTab] = useState("iniciar-sesion");
  const [loginAttempts, setLoginAttempts] = useState(0);
  const {
    register: registerLoginForm,
    formState: { errors: errorsLoginForm },
    handleSubmit: handleSubmitLoginForm,
    reset: LoginFormReset,
  } = useForm();

  const {
    register: registerRegisterForm,
    formState: { errors: errorsRegisterForm },
    handleSubmit: handleSubmitRegisterForm,
    reset: RegisterFormReset,
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpenAlertComponent = (props) => {
    setAlertInfo((prevAlertInfo) => ({
      ...props,
      openAlert: !prevAlertInfo.openAlert,
    }));
  };

  const handleLogin = async (data) => {
    if (loginAttempts >= 3) {
      authService.sendEmailAlertLogin({ email: data?.email });
      handleOpenAlertComponent({
        message: "Has realizado varios intentos sin éxito. Por favor, inténtelo de nuevo más tarde.",
        title: "Error",
        mode: "DANGER",
        event: "INFO",
      });
      return;
    }

    setLoginAttempts((prev) => prev + 1);
    setIsLoading(true);
    const response = await authService.login({ credentials: data });
    // console.log(response);

    if ([400, 401].includes(response?.status)) {
      handleOpenAlertComponent({
        message: "Usuario o contraseña no valida, intentelo de nuevo.",
        title: "Error",
        mode: "DANGER",
        event: "INFO",
      });
    } else {
      setLoginAttempts((prev) => prev + 1);
      dispatch(logIn(data));
      if (data.remenberUser) localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/");
    }
    setIsLoading(false);
  };

  const handleRegister = async (data) => {
    setIsLoading(true);
    const response = await authService.saveClient({ credentials: data });
    console.log(data);

    if ([400, 401].includes(response?.status)) {
      handleOpenAlertComponent({
        message: "Error al procesar tu solicitud. Por favor, inténtalo de nuevo más tarde.",
        title: "Error",
        mode: "DANGER",
        event: "INFO",
      });
    } else {
      handleOpenAlertComponent({
        message: "Su cuenta a sido creada exitosamente, puede iniciar sesion.",
        title: "Error",
        mode: "SUCCESS",
        event: "INFO",
        onCloseFunction: () => {
          RegisterFormReset();
          // setActiveTab("iniciar-sesion");
        },
      });
    }
    setIsLoading(false);
  };

  const accordionData = [
    {
      title: <CustomIcon label="Robo de cuenta" labelClass="mt-[3px] text-light font-inter" className="fa-solid fa-user text-lg" />,
      text: "Salir Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odit ipsam qui aliquam",
    },
    {
      title: <CustomIcon label="Recuperar clave y/o usuario" labelClass="mt-[3px] text-light font-inter" className="fa-solid fa-t text-lg" />,
      text: "Salir Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odit ipsam qui aliquam",
    },
  ];

  const LoginComponent = (
    <>
      <div className="text-white mt-5 ">
        <p className="text-xl font-inter font-light">¡Hola! Bienvenido</p>
        <Typography className="font-inter font-light mt-2">Completa tus datos, y empez&aacute; operar.</Typography>
      </div>

      <form className="mt-8 flex flex-col" onSubmit={handleSubmitLoginForm(handleLogin)}>
        <CustomInput
          labelHidden={true}
          label="E-mail, tel&eacute;fono o usuario"
          labelClass="text-[#DEEFFF] text-sm font-inter pl-5"
          error={errorsLoginForm?.email?.message}
          registerProps={registerLoginForm("email", {
            required: {
              value: true,
              message: "Email requerido",
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
              message: "Ingresa un correo electrónico válido",
            },
          })}
        />
        {errorsLoginForm.email && (
          <CustomIcon
            className="fa-solid fa-circle-exclamation text-xs text-red-600 pl-1 pt-[2.4em] absolute"
            labelClass="pl-5 pt-[2.6em] absolute text-xs font-inter text-red-600"
            label={errorsLoginForm.email.message}
          />
        )}

        <CustomInput
          containerClass="mt-8"
          type="password"
          labelHidden={true}
          label="Contraseña"
          labelClass="text-[#DEEFFF] text-sm  font-inter pl-5"
          error={errorsLoginForm?.password?.message}
          registerProps={registerLoginForm("password", {
            required: "La contraseña es requerida",
          })}
        />
        {errorsLoginForm.password && (
          <CustomIcon
            className="fa-solid fa-circle-exclamation text-xs text-red-600 pl-1 pt-[2.4em] absolute"
            labelClass="pl-5 pt-[2.6em] absolute text-xs font-inter text-red-600"
            label={errorsLoginForm.password.message}
          />
        )}

        <Button type="submit" loading={isLoading} className="bg-[#00ADEF] mt-10 self-end  w-5/12  rounded-xl capitalize font-thin flex items-center justify-center gap-2" size="sm">
          Ingresar
        </Button>
        <CustomCheckBox color="blue" LabelClass="text-white font-inter font-light" label="Recordar E-mail, tel&eacute;fono o usuario" registerProps={registerLoginForm("remenberUser")} />
      </form>

      <div className="mt-16 flex flex-col">
        <Typography className="text-center font-inter text-[#00ACEC] cursor-pointer">Reportar un problema</Typography>
        <div className="mt-5">
          <CustomAccordion accordionData={accordionData} textClass="pl-4 font-inter" />
        </div>
        <Button className="bg-[#00ADEF] mt-5 self-center rounded-xl capitalize font-thin" size="sm">
          Necesito ayuda con otros temas
        </Button>
      </div>
    </>
  );

  const RegisterComponent = (
    <>
      <div className="text-white mt-5 ">
        <p className="text-xl font-inter font-light">¡Hola! Bienvenido</p>
        <Typography className="font-inter font-light mt-2">Completa tus datos, para registrarte.</Typography>
      </div>

      <form className="my-8  flex flex-col" onSubmit={handleSubmitRegisterForm(handleRegister)}>
        <CustomInput
          labelHidden={true}
          label="Ingresa tu E-mail"
          labelClass="text-[#DEEFFF] text-sm font-inter pl-5"
          error={errorsRegisterForm?.email?.message}
          registerProps={registerRegisterForm("email", {
            required: {
              value: true,
              message: "Email requerido",
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
              message: "Introduce un e-mail válido",
            },
          })}
        />

        {errorsRegisterForm.email && (
          <CustomIcon
            className="fa-solid fa-circle-exclamation text-xs text-red-600 pl-1 pt-[2.4em] absolute"
            labelClass="pl-5 pt-[2.6em] absolute text-xs font-inter text-red-600"
            label={errorsRegisterForm.email.message}
          />
        )}

        <CustomInput
          containerClass="mt-8"
          labelHidden={true}
          label="Ingresa tu Nombre"
          labelClass="text-[#DEEFFF] text-sm font-inter pl-5"
          error={errorsRegisterForm?.firstName?.message}
          registerProps={registerRegisterForm("firstName", {
            required: {
              value: true,
              message: "Nombre requerido",
            },
            pattern: {
              value: /^[a-zA-Z]$/,
              message: "Introduce un nombre válido",
            },
          })}
        />
        {errorsRegisterForm.firstName && (
          <CustomIcon
            className="fa-solid fa-circle-exclamation text-xs text-red-600 pl-1 pt-[2.4em] absolute"
            labelClass="pl-5 pt-[2.6em] absolute text-xs font-inter text-red-600"
            label={errorsRegisterForm.firstName.message}
          />
        )}

        <CustomInput
          containerClass="mt-8"
          labelHidden={true}
          label="Ingresa Apellido"
          labelClass="text-[#DEEFFF] text-sm font-inter pl-5"
          error={errorsRegisterForm?.lastName?.message}
          registerProps={registerRegisterForm("lastName", {
            required: {
              value: true,
              message: "Apellido requerido",
            },
            pattern: {
              value: /^[a-zA-Z]$/,
              message: "Introduce un apellido válido",
            },
          })}
        />
        {errorsRegisterForm.lastName && (
          <CustomIcon
            className="fa-solid fa-circle-exclamation text-xs text-red-600 pl-1 pt-[2.4em] absolute"
            labelClass="pl-5 pt-[2.6em] absolute text-xs font-inter text-red-600"
            label={errorsRegisterForm.lastName.message}
          />
        )}

        <CustomInput
          containerClass="mt-8"
          labelHidden={true}
          label="Ingresa tu numero de telefono"
          labelClass="text-[#DEEFFF] text-sm font-inter pl-5"
          error={errorsRegisterForm?.phone?.message}
          registerProps={registerRegisterForm("phone", {
            required: {
              value: true,
              message: "Número de telefono requerido",
            },
            pattern: {
              value: /^[0-9]{11}$/,
              message: "Introduce un numero de telefono válido de 11 caracteres",
            },
          })}
        />
        {errorsRegisterForm.phone && (
          <CustomIcon
            className="fa-solid fa-circle-exclamation text-xs text-red-600 pl-1 pt-[2.4em] absolute"
            labelClass="pl-5 pt-[2.6em] absolute text-xs font-inter text-red-600"
            label={errorsRegisterForm.phone.message}
          />
        )}

        <CustomInput
          containerClass="mt-8"
          type="password"
          labelHidden={true}
          label="Contraseña"
          labelClass="text-[#DEEFFF] text-sm  font-inter pl-5"
          error={errorsRegisterForm?.password?.message}
          registerProps={registerRegisterForm("password", {
            required: "Contraseña requerida",
            pattern: {
              value: /^[0-9]{11}$/,
              message: "Mínimo 6 caracteres entre números, letras en minúscula y mayúscula",
            },
          })}
        />
        {errorsRegisterForm.password && (
          <CustomIcon
            className="fa-solid fa-circle-exclamation text-xs text-red-600 pl-1 pt-[2.4em] absolute"
            labelClass="pl-5 pt-[2.6em] absolute text-xs font-inter text-red-600"
            label={errorsRegisterForm.password.message}
          />
        )}

        <CustomSelect
          containerClass="mt-8"
          labelHidden={true}
          label="Contanos para qué vas a crear tu cuenta"
          labelClass="text-[#DEEFFF] text-sm font-inter pl-5"
          error={errorsRegisterForm?.accountType?.message}
          options={[{ id: 1, value: "Tu Cuenta Personal" }, { id: 2, value: "Para tu Negocio" }]}
          registerProps={registerRegisterForm("accountType", {
            required: {
              value: true,
              message: "Información requerida",
            },
          })}
        />
        {errorsRegisterForm.accountType && (
          <CustomIcon
            className="fa-solid fa-circle-exclamation text-xs text-red-600 pl-1 pt-[2.4em] absolute"
            labelClass="pl-5 pt-[2.6em] absolute text-xs font-inter text-red-600"
            label={errorsRegisterForm.accountType.message}
          />
        )}

        <Button type="submit" loading={isLoading} className="bg-[#00ADEF] mt-10 mb-3 self-end  w-full rounded-xl capitalize font-thin flex items-center justify-center gap-2" size="sm">
          Registrarse
        </Button>

        <CustomCheckBox
          color="blue"
          LabelClass="text-white font-inter font-light text-sm"
          label="Autorizo el uso de mis datos de acuerdo a la Declarac&iacute;on de Privacidad."
          registerProps={registerRegisterForm("privacyConfirmation", { required: "Debes autorizar el uso de tus datos de acuerdo a nuestra Declaracíon de Privacidad" })}
        />
        {errorsRegisterForm.privacyConfirmation && (
          <CustomIcon
            className="fa-solid fa-circle-exclamation text-xs text-red-600 pl-1 pt-[2.4em] absolute"
            labelClass="pl-5 pt-[2.6em] absolute text-xs font-inter text-red-600"
            label={errorsRegisterForm.privacyConfirmation.message}
          />
        )}
      </form>
    </>
  );

  const tabData = [
    {
      label: "Iniciar Sesion",
      value: "iniciar-sesion",
      component: LoginComponent,
    },
    {
      label: "Registrase",
      value: "registrarse",
      component: RegisterComponent,
    },
  ];

  return (
    <div className="h-screen">
      <div className="header px-5 md:px-10 flex justify-between items-center gap-10 text-white  bg-[#003A52]">
        <div>
          <img src={images.logoPNG} alt="" width={60} className="cursor-pointer" />
        </div>
        <div className="flex items-center ">
          <CustomIcon2 icon="help_outline" iconClass="material-icons text-xl px-1 cursor-pointer"/>
          <Typography className="text-sm pr-8 text-[#27B9F2] cursor-pointer">Ayuda</Typography>
          <Typography className="text-sm text-[#27B9F2] cursor-pointer">Salir</Typography>
        </div>
      </div>
      <div className="flex">
        <div className="background w-6/12 lg:w-7/12 xl:w-8/12 hidden md:block">
          <img src={images.homeBackgroundPNG2} alt="background" className="inset-0 object-cover w-full h-full" />
        </div>
        <div className="w-full md:w-6/12 lg:w-5/12 xl:w-4/12 flex justify-center bg-[#00587C]">
          <div className="login-form h-full  flex flex-col justify-between">
            <div className="px-10 pt-5 min-h-[53em]">
              {/* Last auth buttons */}
              {/* <div className="bg-[#003A52] flex justify-center rounded-xl gap-5 py-2 px-5">
                <Button className="bg-[#00ADEF] w-5/12  rounded-xl capitalize font-thin" size="sm">
                  Iniciar Sesion
                </Button>
                <Button className="bg-[#B6DFFF] text-[#00ACEC] w-5/12 rounded-xl  capitalize font-thin" size="sm">
                  Registrase
                </Button>
              </div> */}

              <Tabs value="iniciar-sesion">
                {/* <TabsHeader className="bg-[#003A52]">
                  {tabData.map(({ label, value }) => (
                    <Tab  key={value} value={value}>
                      <Typography className="font-inter text-white capitalize">
                        {label}
                      </Typography>
                    </Tab>
                  ))}
                </TabsHeader> */}

                <TabsHeader
                  id="custom-animation"
                  className="bg-[#003A52] bg-opacity-100 px-10 py-2 gap-5"
                  indicatorProps={{
                    // className: "bg-[#B6DFFF] shadow-none text-[#00ACEC] ",
                    className: "bg-transparent",
                  }}
                >
                  {tabData.map(({ label, value }) => (
                    <Tab
                      key={value}
                      value={value}
                      onClick={() => {
                        setTimeout(() => setActiveTab(value), 250);
                      }}
                      className={` font-inter capitalize text-sm font-light rounded-lg ${activeTab !== value ? "text-[#00ADEF] bg-[#B6DFFF]" : "text-white bg-[#00ADEF]"}`}
                    >
                      {label}
                    </Tab>
                  ))}
                </TabsHeader>
                <TabsBody>
                  {tabData.map(({ value, component }) => (
                    <TabPanel key={value} value={value}>
                      {component}
                    </TabPanel>
                  ))}
                </TabsBody>
              </Tabs>
            </div>
            <div className="bg-white px-5 py-5 flex flex-col ">
              <div className="flex">
                <CustomIcon className="fa-solid fa-triangle-exclamation  text-[#00425C]" />
                <Typography className="font-inter font-normal text-sm">
                  No compartas por redes sociales, tel&eacute;fono, usuarios o email tus claves personales. Nadie en nombre del banco te lo va a pedir
                </Typography>
              </div>

              <Button className="bg-[#00ADEF] mt-2 self-center rounded-xl capitalize font-thin" size="sm">
                Ayuda con pol&iacute;ticas y condiciones
              </Button>
            </div>
          </div>
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
      <AlertComponent alertInfo={alertInfo} handleOpenAlertComponent={handleOpenAlertComponent} />
    </div>
  );
}

export default Login;

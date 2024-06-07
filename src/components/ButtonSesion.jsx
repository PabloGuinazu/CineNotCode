import React, { useState } from 'react';
import Registrar from './Registrar';

const ButtonSesion = () => {
  const [isShowLogin, setIsShowLogin] = useState(false);
	const [issetShowRegister, setShowRegister] = useState(false);


  const openLogin = () => {
    setIsShowLogin(true);
		setShowRegister(false);
  };

	const openRegister = () => {
    setIsShowLogin(false);
    setShowRegister(true);
  };

  const closeModulo = () => {
    setIsShowLogin(false);
		setShowRegister(false);
  };

  return (
    <>

      <button
        onClick={openLogin}
        className="block text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
        type="button"
      >
        Inicio Sesión
      </button>

      {isShowLogin && (
        <div
          id="authentication-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-md max-h-full bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Iniciar Sesión
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={closeModulo}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Cerrar</span>
              </button>
            </div>
            <div className="p-4 md:p-5">
              <form className="space-y-4" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Correo
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Correo@email.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Contraseña
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div className="flex justify-end">
                  <a
                    href="#"
                    className="text-sm  hover:underline dark:text-white"
                  >
                    Recuperar Clave
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                >
                  Ingresar
                </button>
								<div className="flex justify-end">
									<button
										type="button"
										className="dark:text-white bg-transparent  hover:underline rounded-lg text-sm  flex items-center justify-center  "
										onClick={openRegister}
										>
											Registrate
									</button>
								</div>
              </form>
            </div>
          </div>
        </div>
      )}

      {issetShowRegister && (
        <Registrar closeModulo={closeModulo} />
      )}
    </>
  );
};

export default ButtonSesion;

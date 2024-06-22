import { Link, Outlet, useLoaderData, useLocation } from "react-router-dom";
import { Modal } from "../components/Modal";
import { getPrograms } from "../services/programs";
import { useEffect } from "react";
import { useAppStore } from "../stores/useAppStore";

export const loader = async () => {
  const programs = await getPrograms();

  return programs;
};

export const Layout = () => {
  const location = useLocation();

  const programs = useLoaderData();
  const allPrograms = useAppStore((state) => state.allPrograms);

  useEffect(() => {
    if (Array.isArray(programs)) {
      allPrograms(programs);
    }
  }, [programs]);

  return (
    <>
      <header className="container mx-auto mt-10">
        <div>
          <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">
            Seguimiento de {""}
            <span className="text-indigo-600">Biblioteca</span>
          </h1>
        </div>
        <div className="mt-5 flex flex-row gap-5 justify-center">
          {location.pathname === "/" ? (
            <Link
              to="/loans"
              className="p-2 font-bold text-white text-lg bg-indigo-500 hover:bg-indigo-600 rounded-lg"
            >
              Ver prestamos
            </Link>
          ) : (
            <Link
              to="/"
              className="p-2 font-bold text-white text-lg bg-indigo-500 hover:bg-indigo-600 rounded-lg"
            >
              Ir a inicio
            </Link>
          )}
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <Modal />

      <footer className="mt-10 w-full mx-auto flex flex-col gap-2 text-center bg-slate-200 p-5 font-semibold">
        <h3>
          Realizado por <span>Julián Castrillón Sánchez</span>
        </h3>
        <p>Contacto: +57 319 211 0866 - juliancastrillon681@gmail.com</p>
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  );
};

import { useAppStore } from "../stores/useAppStore";
import { useForm } from "react-hook-form";
import { DraftStuddent } from "../types/students";
import { getUser } from "../services/users";
import { createLoans } from "../services/loans";
import { useNavigate } from "react-router-dom";

export const FormModal = () => {
  const [programs, showModal, asset] = useAppStore((state) => [
    state.programs,
    state.showModal,
    state.asset
  ]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<DraftStuddent>();

  const navigate = useNavigate(); 

  const handleOnSubmit = async (data: DraftStuddent) => {
    const id = Number(data.identification);
    const user = await getUser(id);
    const date = new Date();

    if (user) {
      const newUser = {
        ...data,
        _id: user._id,
        created_at: date,
      };
      const newLoan = await createLoans(newUser, asset);

      if(newLoan){
        showModal(false)
      }

      reset();
      navigate('/');
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(handleOnSubmit)}>
      <div className="flex flex-col gap-2">
        <label className="text-xl ml-2" htmlFor="expenseName">
          Identificación:
        </label>
        <input
          type="number"
          id="identification"
          placeholder="Ejemplo: 1000"
          className={`bg-slate-100 p-2 rounded-md ${
            errors.identification
              ? "border-t-2 border-r-2 border-b-2 border-l-8 border-red-300"
              : "border-2 border-gray-100"
          }`}
          {...register("identification", {
            required: "🚨 Campo obligatorio",
          })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xl ml-2" htmlFor="amount">
          Nombre:
        </label>
        <input
          type="text"
          id="name"
          placeholder="Ejemplo: Juan"
          className={`bg-slate-100 p-2 rounded-md ${
            errors.name
              ? "border-t-2 border-r-2 border-b-2 border-l-8 border-red-300"
              : "border-2 border-gray-100"
          }`}
          {...register("name", {
            required: "🚨 Campo obligatorio",
          })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xl ml-2" htmlFor="amount">
          Apellidos:
        </label>
        <input
          type="text"
          id="lastNames"
          placeholder="Ejemplo: Cardona Suárez"
          className={`bg-slate-100 p-2 rounded-md ${
            errors.lastNames
              ? "border-t-2 border-r-2 border-b-2 border-l-8 border-red-300"
              : "border-2 border-gray-100"
          }`}
          {...register("lastNames", {
            required: "🚨 Campo obligatorio",
          })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xl ml-2" htmlFor="amount">
          Programa:
        </label>

        <select
          id="program"
          aria-placeholder="Seleccione el programa"
          className={`bg-slate-100 p-2 rounded-md ${
            errors.program
              ? "border-t-2 border-r-2 border-b-2 border-l-8 border-red-300"
              : "border-2 border-gray-100"
          }`}
          {...register("program", {
            required: "🚨 Campo obligatorio",
          })}
        >
          {programs.map((program) => {
            return (
              <option key={program._id} value={program._id}>
                {program.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="mt-5 flex justify-between gap-4">
        <button
          type="submit"
          className={
            "w-full rounded bg-gray-600 font-bold uppercase p-3 shadow text-white hover:bg-gray-700"
          }
        >
          Realizar el prestamo
        </button>
        <button
          type="button"
          className="w-full rounded bg-red-500 font-bold uppercase p-3 shadow text-white hover:bg-red-600"
          onClick={() => showModal(false)}
        >
          Cerrar
        </button>
      </div>
    </form>
  );
};

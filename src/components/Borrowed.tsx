import { formatDate } from "../helpers/format";
import { useFetcher } from "react-router-dom";
import { LoanType } from "../types/loans";

type BorrowedProps = {
  asset: LoanType;
};

const url = import.meta.env.VITE_REACT_APP_API_URL;

export const Borrowed = ({ asset }: BorrowedProps) => {
  const fetcher = useFetcher();

  console.log(asset)

  return (
    <div className="border rounded-lg shadow-lg">
      <div className="overflow-hidden flex justify-center h-64 w-full">
        <img
          src={
            asset.asset.image === "default.png"
              ? "/default.png"
              : `${url}/assets/uploads/${asset.asset.image}`
          }
          alt={asset.asset.asset}
          className={
            asset.asset.image !== "default.png"
              ? "hover:scale-105 hover:-rotate-2 transition-transform duration-200"
              : ""
          }
        />
      </div>
      <div className="p-5">
        <h2 className="text-2xl truncate font-black text-slate-800">
          {asset.asset.asset}
        </h2>
        <p>
          <strong>Prestado el día:</strong>{" "}
          {formatDate(asset.created_at.toString())}
        </p>
        <p>
          <strong>Devolver el día:</strong>{" "}
          {formatDate(asset.period.toString())}
        </p>
        <p>
          <strong>Responsable: </strong>
          {asset.student.studentName} {asset.student.lastNames}
        </p>
        <fetcher.Form method="POST">
          <button
            type="submit"
            name="id"
            className=" rounded-md bg-slate-500 hover:bg-slate-600 text-white mt-5 w-full p-3 font-bold text-lg"
            value={asset._id}
            onClick={(e) => {
              if (!confirm("¿Está seguro que desea eliminar el registro?")) {
                e.preventDefault();
              }
            }}
          >
            Eliminar
          </button>
        </fetcher.Form>
      </div>
    </div>
  );
};

import { AssetType } from "../types/assets";
import { formatDate } from "../helpers/format";
import { useAppStore } from "../stores/useAppStore";

type AssetsCardProps = {
  asset: AssetType;
};

export const AssetsCard = ({ asset }: AssetsCardProps) => {
  const url = import.meta.env.VITE_REACT_APP_API_URL;
  const [showModal, addAsset] = useAppStore((state) => [
    state.showModal,
    state.addAsset,
  ]);

  const handleModal = (asset: AssetType) => {
    showModal(true);
    addAsset(asset);
  };

  return (
    <div className="border rounded-lg shadow-lg">
      <div className="overflow-hidden flex justify-center h-64 w-full">
        <img
          src={
            asset.image === "default.png"
              ? "/default.png"
              : `${url}/assets/uploads/${asset.image}`
          }
          alt={asset.asset}
          className={
            asset.image !== "default.png"
              ? "hover:scale-105 hover:-rotate-2 transition-transform duration-200"
              : ""
          }
        />
      </div>
      <div className="p-5">
        <h2 className="text-2xl truncate font-black text-slate-800">
          {asset.asset}
        </h2>
        <p>
          <strong>Publicado el:</strong>{" "}
          {formatDate(asset.publicationDate.toString())}
        </p>
        <p>
          <strong>Autor: </strong>
          {asset.author.name} -{" "}
          {formatDate(asset.author.dateOfBirth.toString())} -
          {asset.author.placeOfBirth}
        </p>
        <button
          type="button"
          className=" rounded-md bg-slate-500 hover:bg-slate-600 text-white mt-5 w-full p-3 font-bold text-lg"
          onClick={() => handleModal(asset)}
        >
          Prestar
        </button>
      </div>
    </div>
  );
};

import { useLoaderData } from "react-router-dom";
import { getAssets } from "../services/assets";
import { AssetsType } from "../types/assets";
import { AssetsCard } from "../components/AssetsCard";

export const loader = async () => {
  const assets = await getAssets();

  return assets;
};

export const Assets = () => {
  const assets = useLoaderData() as AssetsType;

  return (
    <div className="container mx-auto">
      <h1 className="text-slate-700 text-lg font-bold">Recursos disponibles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-2 gap-10 p-5">
        {assets.map((asset) => {
          return <AssetsCard key={asset._id} asset={asset} />;
        })}
      </div>
    </div>
  );
};

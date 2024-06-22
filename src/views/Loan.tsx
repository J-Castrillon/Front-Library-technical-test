import { useLoaderData } from "react-router-dom";
import { deleteLoan, getAssets } from "../services/loans";
import { LoansType } from "../types/loans";
import { Borrowed } from "../components/Borrowed";
import { ActionFunctionArgs } from "react-router-dom";

export const loader = async () => {
  const assets = await getAssets();

  console.log(assets)
  return assets;
};

export const action = async ({request} : ActionFunctionArgs) => {
  const data = Object.fromEntries(await request.formData());
  
  if(data.id){
    const id = data.id as string;
    await deleteLoan(id);
  }
  return null; 
  
}

export const Loan = () => {

  const assets = useLoaderData() as LoansType;

  console.log(assets)

  return (
    <div className="container mx-auto">
      <h1 className="text-slate-700 text-lg font-bold">Recursos prestados</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-2 gap-10 p-5">
        {assets.map((asset) => {
          return <Borrowed key={asset._id} asset={asset} />;
        })}
      </div>
    </div>
  )
}

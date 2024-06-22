import { createBrowserRouter } from "react-router-dom";
import { Layout, loader as programsLoader} from "../layouts/Layout";
import { Assets, loader as assetsLoader } from "../views/Assets";
import { Loan, loader as loansLoader, action as deleteLoanAction } from "../views/Loan";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: programsLoader,
    
    children: [
      {
        index: true, 
        element: <Assets/>,
        loader: assetsLoader
      }, 
      {
        path: 'loans', 
        element: <Loan/>,
        loader: loansLoader, 
        action: deleteLoanAction
      },
    ],
  },
]);

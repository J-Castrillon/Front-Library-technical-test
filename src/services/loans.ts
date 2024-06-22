import axios from "axios";
import { StudentType } from "../types/students";
import { safeParse } from "valibot";
import { getLoansSchema, loansSchema } from "../schemas/loans";
import { AssetType } from "../types/assets";
import { LoanType } from "../types/loans";
const url = import.meta.env.VITE_REACT_APP_API_URL;

export const createLoans = async (student: StudentType, asset: AssetType) => {
    try {

      console.log(student)
        const { data } = await axios.post(`${url}/loans`,{
          student: student._id,
          asset: asset._id
        });
        
        console.log(data)

        const result = safeParse(loansSchema, data);
    
        if (result) {
          return result.output;
        } else {
          throw new Error("Error fetching");
        }
      } catch (error) {
        console.log(error);
      }
}

export const getAssets = async () => {
  try {
    const { data } = await axios(`${url}/loans`);
    const result = safeParse(getLoansSchema, data.loans);

    if (result) {
      return result.output;
    } else {
      throw new Error("Error fetching");
    }
  } catch (error) {
    console.log(error);
  }
}

export const deleteLoan = async (id: LoanType['_id']) => {
  try {
    const { data } = await axios.delete(`${url}/loans/${id}`);
    const result = safeParse(getLoansSchema, data.loans);

    if (result) {
      return result.output;
    } else {
      throw new Error("Error fetching");
    }
  } catch (error) {
    console.log(error);
  }
}
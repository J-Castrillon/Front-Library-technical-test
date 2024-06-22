import axios from "axios";
import { safeParse } from "valibot";
import { ProgramsSchema } from "../schemas/programs";

const url = import.meta.env.VITE_REACT_APP_API_URL;
export const getPrograms = async () => {
  try {
    const { data } = await axios.get(`${url}/programs`,);

    const result = safeParse(ProgramsSchema, data.programs);

    if (result) {
      return result.output;
    } else {
      throw new Error("Error fetching");
    }
  } catch (error) {
    console.log(error);
  }
};
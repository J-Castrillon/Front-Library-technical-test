import axios from "axios";
import { safeParse } from "valibot";
import { AssetsSchema } from "../schemas/assets";

const url = import.meta.env.VITE_REACT_APP_API_URL;
export const getAssets = async () => {
  try {
    const { data } = await axios.get(`${url}/assets`);

    const result = safeParse(AssetsSchema, data.assets);

    if (result) {
      return result.output;
    } else {
      throw new Error("Error fetching");
    }
  } catch (error) {
    console.log(error);
  }
};
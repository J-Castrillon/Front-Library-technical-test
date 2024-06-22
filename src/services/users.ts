import axios from "axios";
import { StudentType } from "../types/students";
import { studentSchema } from "../schemas/students";
import { safeParse } from "valibot";

const url = import.meta.env.VITE_REACT_APP_API_URL;
export const getUser = async (identification: StudentType['identification']) => {
  try {
    const { data } = await axios.post(`${url}/students/find`,{
      identification
    });
    const result = safeParse(studentSchema, data.student);
    if (result) {
      return result.output as StudentType;
    } else {
      throw new Error("Error fetching");
    }
  } catch (error) {
    console.log(error);
  }
};
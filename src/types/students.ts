import { InferInput } from "valibot";
import { DraftStudent, studentSchema, studentsSchema } from "../schemas/students";

export type StudentType = InferInput<typeof studentSchema>
export type StudentsType = InferInput<typeof studentsSchema>
export type DraftStuddent = InferInput<typeof DraftStudent>
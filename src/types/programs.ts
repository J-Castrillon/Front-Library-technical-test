import { InferInput } from "valibot";
import { ProgramSchema, ProgramsSchema } from "../schemas/programs";

export type ProgramType = InferInput<typeof ProgramSchema>
export type ProgramsType = InferInput<typeof ProgramsSchema>
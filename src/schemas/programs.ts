import { array, object, string } from "valibot";

export const ProgramSchema = object({
    _id: string(), 
    name: string(), 
    created_at: string(),
})

export const ProgramsSchema = array(ProgramSchema);
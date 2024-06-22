import { array, date, number, object, string } from "valibot";

export const studentSchema = object({
    _id: string(), 
    identification: number(), 
    name: string(),    
    lastNames: string(), 
    program: string(),
    created_at: date()
})

export const studentsSchema = array(studentSchema);

export const DraftStudent = object({
    identification: number(), 
    name: string(),    
    lastNames: string(), 
    program: string(),
})
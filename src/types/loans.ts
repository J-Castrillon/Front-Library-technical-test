import { InferInput } from "valibot";
import { getLoanSchema, getLoansSchema } from "../schemas/loans";

export type LoanType = InferInput<typeof getLoanSchema>
export type LoansType = InferInput<typeof getLoansSchema>
import { array, date, number, object, string } from "valibot";

export const loansSchema = object({
  student: string(),
  asset: string(),
});

export const getLoanSchema = object({
  _id: string(),
  student: object({
    _id: string(),
    identification: number(),
    studentName: string(),
    lastNames: string(),
    program: string(),
    created_at: date(),
  }),
  asset: object({
    _id: string(),
    asset: string(),
    publicationDate: date(),
    author: object({
      name: string(),
      dateOfBirth: date(),
      placeOfBirth: string(),
      _id: string(),
    }),
    created_at: date(),
    image: string(),
  }),
  period: date(),
  created_at: date(),
});

export const getLoansSchema = array(getLoanSchema)

import { array, date, object, string } from "valibot";

export const AssetSchema = object({
    _id: string(), 
    asset: string(), 
    publicationDate: date(),    
    image: string(), 
    author: object({
        name: string(),
        dateOfBirth: date(),
        placeOfBirth: string(),
    }),
    created_at: date()
})

export const AssetsSchema = array(AssetSchema);
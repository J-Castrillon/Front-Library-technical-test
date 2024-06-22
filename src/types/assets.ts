import { InferInput } from "valibot";
import { AssetSchema, AssetsSchema } from "../schemas/assets";

export type AssetType = InferInput<typeof AssetSchema>
export type AssetsType = InferInput<typeof AssetsSchema>
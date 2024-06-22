import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { AssetType } from "../types/assets";
import { StudentsType } from "../types/students";
import { ProgramsType } from "../types/programs";

export type AppStoreType = {
  modal: boolean;
  asset: AssetType;
  users: StudentsType;
  programs: ProgramsType;
  allPrograms: (programs: ProgramsType) => void;
  showModal: (showModal: boolean) => void;
  addAsset: (asset: AssetType) => void;
  allUsers: (users: StudentsType) => void;
};

export const useAppStore = create<AppStoreType>()(
  devtools((set) => ({
    modal: false,
    asset: {} as AssetType,
    users: [],
    programs: [] as ProgramsType,
    allPrograms: (programs) => {
      set(state => ({
        ...state, 
        programs
      }))
    },
    showModal: (modal) => {
      set((state) => ({
        ...state,
        modal,
      }));
    },
    addAsset: (asset) => {
      set((state) => ({
        ...state,
        asset,
      }));
    },
    allUsers: (users) => {
      set((state) => ({
        ...state,
        users,
      }));
    },
  }))
);

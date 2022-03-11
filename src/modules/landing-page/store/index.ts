import { Module } from "vuex";
import { RootState } from "@/store";
import { state } from "./states";
import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { LandingPageStates } from "./types";

export const attendance: Module<LandingPageStates, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

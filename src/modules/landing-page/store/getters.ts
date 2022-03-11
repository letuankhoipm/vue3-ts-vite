import { LandingPageStates, LandingPageGetter } from "./types";
import { GetterTree } from "vuex";
import { RootState } from "@/store";

export const getters: GetterTree<LandingPageStates, RootState> = {
  [LandingPageGetter.GET_EXAMPLE]: (state: LandingPageStates) => state.banners,
};

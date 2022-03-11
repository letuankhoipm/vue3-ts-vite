import {
  LandingPageStates,
  LandingPageAction,
  LandingPageMutations,
} from "./types";
import { RootState } from "@/store";
import { ActionTree } from "vuex";

export const actions: ActionTree<LandingPageStates, RootState> = {
  [LandingPageAction.ACTION_EXAMPLE]({ commit }, example: string[]) {
    commit(LandingPageMutations.EXAMPLE, example);
  },
};

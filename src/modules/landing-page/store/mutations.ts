import { LandingPageStates, LandingPageAction } from "./types";
import { MutationTree } from "vuex";

export const mutations: MutationTree<LandingPageStates> = {
  [LandingPageAction.ACTION_EXAMPLE](
    state: LandingPageStates,
    payload: string[],
  ) {
    state.banners = payload;
  },
};

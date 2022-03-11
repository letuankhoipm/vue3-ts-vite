import { createStore } from "vuex";

export type RootState = {
  version: string;
  initialized: boolean;
  loading: boolean;
};

export default createStore({
  state: {
    version: "1.0.0",
    initialized: false,
    loading: false,
  },
  mutations: {},
  actions: {},
  modules: {},
});

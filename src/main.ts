import { createApp, provide, h } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { ApolloClients } from "@vue/apollo-composable";
import apolloClient from "@/modules/apollo/apollo-client";
import "@/assets/scss/_main.scss";
import AppComponents from "./components";
import { i18n } from "./locales/i18n";
import { VueCookieNext } from "vue-cookie-next";

const app = createApp({
  setup() {
    provide(ApolloClients, {
      default: apolloClient,
    });
  },

  mounted() {
    const elm = document.getElementById("global-loading");
    elm?.classList.add("hidden");
  },

  render: () => h(App),
});

app.use(router);
app.use(store);
app.use(i18n);
app.use(AppComponents);
app.use(VueCookieNext);
app.mount("#app");

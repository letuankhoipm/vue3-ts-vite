import { App } from "vue";
import { useElementPlus } from "./element-plus";
// import CkEditorComponent from "./ck-editor/index.vue";

export default {
  install: (app: App): void => {
    // app.component("CKEditorComponent", CkEditorComponent);
    useElementPlus(app);
  },
};

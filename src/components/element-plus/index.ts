import { ElButton, ElMessage } from "element-plus";
import "element-plus/dist/index.css";
import { App } from "vue";

export const useElementPlus = (app: App): void => {
  const components = [ElButton];
  const plugins = [ElMessage];

  components.forEach((component) => {
    app.component(component.name, component);
  });

  plugins.forEach((plugin) => {
    app.use(plugin);
  });

  app.provide("$message", app.config.globalProperties.$message);
};

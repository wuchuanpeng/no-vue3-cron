import noVue3Cron_ from "./no-vue3-cron";

const components = [noVue3Cron_];

const install = function(Vue) {
  components.map((component) => {
    Vue.component(component.name, component);
  });
};
/* 支持使用标签的方式引入 */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export const noVue3Cron = noVue3Cron_;

export default {
  install,
};

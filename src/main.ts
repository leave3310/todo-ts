import { createApp } from "vue";
import { createPinia } from "pinia";
import { defineRule, configure } from "vee-validate";
import * as AllRules from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
import zh_TW from "@vee-validate/i18n/dist/locale/zh_TW.json";

import App from "@/App.vue";
import router from "@/router/index.js";
import "@/style/index.css";

Object.keys(AllRules).forEach((rule) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defineRule(rule, (AllRules as Record<string, any>)[rule]),
);
configure({
  generateMessage: localize({
    zh_TW,
  }),
});
setLocale("zh_TW");

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount("#app");

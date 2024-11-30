//组件
import { defineClientConfig } from "vuepress/client";
import IFrame from "../components/IFrame/IFrame.vue";

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component("IFrame", IFrame);
  },
});
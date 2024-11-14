import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  // 这是基础路径
  base: "/XDH-/",

  lang: "zh-CN",
  // 这是标题
  title: "XDH的个人博客",
  // 这是描述
  description: "嘿嘿，嘿嘿嘿",

  theme,

  plugins: [
    // 搜索插件
    searchProPlugin({
      // 你的选项

    }),

  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

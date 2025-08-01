// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import "virtual:group-icons.css";
import "./style.css";
import { inject } from "@vercel/analytics";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    if (typeof window !== "undefined") {
      // Inietta Vercel Analytics
      inject();
    }
  },
};

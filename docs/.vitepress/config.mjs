import { defineConfig } from "vitepress";
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
  localIconLoader,
} from "vitepress-plugin-group-icons";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cube API",
  description: "Guida alle API di Cube.",
  lang: "it",
  head: [
    ["link", { rel: "icon", type: "image/png", href: "/logo.png" }],
    ["meta", { name: "theme-color", content: "#5f67ee" }],
    ["meta", { name: "algolia-site-verification", content: "417AD481A4A8659A" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "it" }],
    ["meta", { property: "og:title", content: "Cube API | Guida utile per Cube" }],
    ["meta", { property: "og:site_name", content: "VitePress" }],
    [
      "meta",
      {
        property: "og:image",
        content: "/cubeapi-og.jpg",
      },
    ],
    ["meta", { property: "og:url", content: "https://cube.doc.blastness.info/" }],
  ],
  themeConfig: {
    logo: "/logo.png",
    socialLinks: [{ icon: "github", link: "https://github.com/kevinbism/cubeapi" }],
    outlineTitle: "Panoramica",
    returnToTopLabel: "Torna su",
    darkModeSwitchLabel: "Aspetto",
    lightModeSwitchTitle: "Cambia a tema chiaro",
    darkModeSwitchTitle: "Cambia a tema scuro",
    nav: [
      { text: "Guida", link: "/guide/content-api" },
      { text: "Componenti", link: "/components/" },
    ],
    docFooter: {
      prev: "Pagina precedente",
      next: "Pagina successiva",
    },
    sidebar: {
      "/guide/": [
        {
          text: "Core Cube",
          items: [
            { text: "Contenuti", link: "/guide/content-api" },
            { text: "BE", link: "/guide/be-api" },
            { text: "Immagini", link: "/guide/images-api" },
            { text: "Lingue", link: "/guide/lang-api" },
            { text: "Menu", link: "/guide/menu-api" },
            { text: "Pagina", link: "/guide/page-api" },
            { text: "Template", link: "/guide/template-api" },
            { text: "Utili", link: "/guide/utils-api" },
            { text: "Funzioni di sistema", link: "/guide/functions-system-api" },
          ],
        },
      ],
      "/components/": [
        {
          text: "Introduzione",
          items: [{ text: "Cos'è un componente?", link: "/components/" }],
        },
        {
          text: "Lista componenti",
          items: [
            { text: "Accordion", link: "/components/accordion" },
            { text: "Image", link: "/components/image" },
            { text: "Link", link: "/components/link" },
          ],
        },
      ],
      // "/cubepack/": [
      //   {
      //     text: "Cubepack",
      //     items: [{ text: "Installazione", link: "/cubepack/" }],
      //   },
      // ],
    },
    search: {
      provider: "algolia",
      options: {
        appId: "5CFPNMMI3D", // Il tuo ID applicazione Algolia
        apiKey: "831a90cee624563ae464cb0828d0ebc8", // La tua chiave API di ricerca
        indexName: "...",
        detailedView: true,
        translations: {
          button: {
            buttonText: "Cerca",
            buttonAriaLabel: "Cerca",
          },
          modal: {
            displayDetails: "Mostra dettagli",
            resetButtonTitle: "Cancella ricerca",
            noResultsText: "Nessun risultato per",
            footer: {
              selectText: "seleziona",
              navigateText: "navigare",
              closeText: "chiudere",
            },
          },
        },
      },
    },
    footer: {
      copyright: "Copyright &copy; 2025 Blastness",
    },
    editLink: {
      pattern: "https://github.com/kevinbism/cubeapi/edit/main/docs/:path",
      text: "Modifica questa pagina su GitHub",
    },
  },
  markdown: {
    theme: {
      light: "github-light",
      dark: "laserwave",
    },
    config(md) {
      md.use(groupIconMdPlugin);
    },
  },
  vite: {
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          php: localIconLoader(import.meta.url, "../public/php.svg"),
        },
      }),
    ],
  },
});

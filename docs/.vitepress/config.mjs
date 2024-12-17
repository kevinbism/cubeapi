import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cube API",
  description: "Guida alle API di Cube.",
  lang: "it",
  head: [
    ["link", { rel: "icon", type: "image/png", href: "/logo.png" }],
    ["meta", { name: "theme-color", content: "#5f67ee" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "it" }],
    ["meta", { property: "og:title", content: "Cube API | Guida utile per Cube" }],
    ["meta", { property: "og:site_name", content: "VitePress" }],
    [
      "meta",
      {
        property: "og:image",
        content: "https://vitepress.dev/vitepress-og.jpg",
      },
    ],
    ["meta", { property: "og:url", content: "https://cube-api.dev/" }],
  ],
  themeConfig: {
    logo: "/logo.png",
    outlineTitle: "Panoramica",
    returnToTopLabel: "Torna su",
    darkModeSwitchLabel: "Aspetto",
    lightModeSwitchTitle: "Cambia a tema chiaro",
    darkModeSwitchTitle: "Cambia a tema scuro",
    nav: [{ text: "Guida", link: "/guide/content-api" }],
    docFooter: {
      prev: "Pagina precedente",
      next: "Pagina successiva",
    },
    sidebar: [
      {
        text: "Core Cube",
        collapsed: true,
        items: [
          { text: "Contenuto", link: "/guide/content-api" },
          { text: "Immagini", link: "/guide/images-api" },
          { text: "Lingue", link: "/guide/lang-api" },
          { text: "Pagina", link: "/guide/page-api" },
          { text: "Template", link: "/guide/template-api" },
          { text: "Utili", link: "/guide/utils-api" },
          { text: "Funzioni di sistema", link: "/guide/functions-system-api" },
        ],
      },
      {
        text: "Code Snippets",
        collapsed: true,
        items: [{ text: "Componenti", link: "/snippets/components" }],
      },
    ],
    search: {
      provider: "local",
      options: {
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
  },
});

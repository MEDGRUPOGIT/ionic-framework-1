// ionic
import { defineCustomElements } from "../loader/index.js";
import "../css/core.css";
import "../css/display.css";
import "../css/flex-utils.css";
import "../css/float-elements.css";
import "../css/global.bundle.css";
import "../css/ionic.bundle.css";
import "../css/normalize.css";
import "../css/padding.css";
import "../css/structure.css";
import "../css/text-alignment.css";
import "../css/text-transformation.css";
import "../css/typography.css";

defineCustomElements();

// storybook
import "./assets/fsemeric.css";
import "./themes/templarios.css";
import "./assets/color-system.stories.css";

// templarios
import "../templarios/css/themes/default.css";
import "../templarios/css/themes/medsoft.css";
import "../templarios/css/themes/extensivo.css";
import "../templarios/css/schemes/light.css";
import "../templarios/css/templarios.css";
import "../templarios/css/templarios-css-framework.css";
import "../templarios/css/templarios-web.css";
import "../templarios/css/templarios-medsoft.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: { disable: true },
  layout: "fullscreen",
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    target: "root",
    list: [
      {
        name: "Web Framework",
        class: ["theme-medsoft", "templarios-web"],
        color: "#000",
      },
      {
        name: "Theme Medsoft",
        class: ["theme-medsoft", "scheme-dark"],
        color: "#3aa8b9",
        default: true,
      },
      {
        name: "Theme Medsoft / Scheme Light",
        class: ["theme-medsoft", "scheme-light"],
        color: "#3aa8b9",
      },
      {
        name: "Theme Extensivo",
        class: ["theme-extensivo", "scheme-dark"],
        color: "#63fd68",
      },
      {
        name: "Theme Extensivo / Scheme Light",
        class: ["theme-extensivo", "scheme-light"],
        color: "#63fd68",
      },
    ],
  },
  viewport: {
    viewports: {
      xxs: {
        name: "xxs",
        styles: {
          width: "340px",
          height: "100%",
        },
      },
      xs: {
        name: "xs",
        styles: {
          width: "380px",
          height: "100%",
        },
      },
      sm: {
        name: "sm",
        styles: {
          width: "576px",
          height: "100%",
        },
      },
      md: {
        name: "md",
        styles: {
          width: "768px",
          height: "100%",
        },
      },
      lg: {
        name: "lg",
        styles: {
          width: "992px",
          height: "100%",
        },
      },
      xl: {
        name: "xl",
        styles: {
          width: "1200px",
          height: "100%",
        },
      },
    },
  },
  options: {
    storySort: {
      method: "alphabetical",
      order: [
        "General",
        ["Welcome", "Biblioteca", "Styleguide"],
        "Conhecimento",
        ["Metodologia BEM"],
        "Foundation",
        "Components",
        [
          "Ionic",
          "Core",
          "Compositions",
          "Team",
          "Compositions-scss",
          "Legado",
        ],
        "Utilities",
        "Sass",
      ],
    },
  },
};

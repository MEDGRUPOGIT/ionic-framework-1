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

// templarios
import "../templarios/css/themes/default.css";
import "../templarios/css/themes/medsoft.css";
import "../templarios/css/themes/extensivo.css";
import "../templarios/css/themes/recursos.css";
import "../templarios/css/schemes/light.css";
import "../templarios/css/templarios.css";
import "../templarios/css/templarios-css-framework.css";
import "../templarios/css/templarios-web.css";
import "../templarios/css/migracao-temporario.css";

/** @type { import('@storybook/web-components').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    themes: {
      target: 'root',
      default: 'MedSoft',
      list: [
        {
          name: 'MedSoft',
          class: ['theme-medsoft', 'scheme-dark'],
          color: '#14A2B8',
        },
        {
          name: 'MedSoft Light',
          class: ['theme-medsoft', 'scheme-light'],
          color: '#3D848F',
        },
      ]
    },
  },
};

export default preview;

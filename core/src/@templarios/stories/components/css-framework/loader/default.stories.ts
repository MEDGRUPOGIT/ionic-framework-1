import { html } from "lit-html";
import { withDesign } from "storybook-addon-designs";
import { MedColors } from "../../../../templarios";

export default {
  title: "Components/CSS Framework/Loader",
  decorators: [withDesign],
};

const Template = ({ "ds-color": dsColor }) => {
  return html`
  <div tp-loader ds-color=${dsColor}>
    <svg tp-loader-svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <circle tp-loader-circle cx="50" cy="50" r="47"/>

      <polyline tp-loader-polyline points="85,37 63,37 63,15 "/>
      <polyline tp-loader-polyline points="63,86 63,64 85,64 "/>
      <polyline tp-loader-polyline points="14,64 36,64 36,86 "/>
      <polyline tp-loader-polyline points="36,15 36,37 14,37 "/>

      <line tp-loader-line x1="45" y1="40" x2="45" y2="15"/>
      <line tp-loader-line x1="54" y1="40" x2="54" y2="15"/>
      <line tp-loader-line x1="60" y1="46" x2="85" y2="46"/>
      <line tp-loader-line x1="60" y1="55" x2="85" y2="55"/>
      <line tp-loader-line x1="54" y1="61" x2="54" y2="86"/>
      <line tp-loader-line x1="45" y1="61" x2="45" y2="86"/>
      <line tp-loader-line x1="39" y1="55" x2="14" y2="55"/>
      <line tp-loader-line x1="39" y1="46" x2="14" y2="46"/>

      <rect tp-loader-rect x="42" y="43" width="6" height="6"/>
      <rect tp-loader-rect x="42" y="52" width="6" height="6"/>
      <rect tp-loader-rect x="51" y="43" width="6" height="6"/>
      <rect tp-loader-rect x="51" y="52" width="6" height="6"/>

    </svg>
  </div>
  `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/01.-Componentes?node-id=9341%3A58123",
  },
};
Default.argTypes = {
  "ds-color": {
    options: [undefined, ...Object.values(MedColors)],
    control: { type: "select" },
    description: "Define a cor do componente.",
    defaultValue: undefined,
    table: {
      type: { summary: Object.values(MedColors).join(" |") },
      defaultValue: { summary: "undefined" },
    },
  },
};

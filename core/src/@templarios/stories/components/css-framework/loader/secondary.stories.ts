import { html } from "lit-html";
import { withDesign } from "storybook-addon-designs";
import { MedColors } from "../../../../templarios";

export default {
  title: "Components/CSS Framework/Loader",
  decorators: [withDesign],
};

const Template = ({ "ds-color": dsColor }) => {
  return html`
  <div tp-loader-secondary ds-color=${dsColor}>    
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div> 
  </div>
  `;
};

export const Secondary = Template.bind({});
Secondary.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/01.-Componentes?node-id=9341%3A58123",
  },
};
Secondary.argTypes = {
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
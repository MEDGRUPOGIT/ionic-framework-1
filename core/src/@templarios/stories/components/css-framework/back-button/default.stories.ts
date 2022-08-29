import { withDesign } from "storybook-addon-designs";
import { TemplariosButtonSize, MedColors } from "../../../../templarios";

export default {
  title: "Components/CSS Framework/Back Button",
  decorators: [withDesign],
};

const Template = ({ "ds-color": dsColor, "ds-size": dsSize, disabled }) => {
  return `
 
        <button tp-back-button
          mode="ios"
          text=""
          ${dsColor ? `ds-color=${dsColor}` : ""}
          ${dsSize ? `ds-size=${dsSize}` : ""}
          ${disabled ? `disabled=${disabled}` : ""}
          >
          <ion-icon class="med-icon" name="med-esquerda"></ion-icon>
        </button>

  `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/01.-Componentes?node-id=6441%3A51186",
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
  "ds-size": {
    options: Object.values(TemplariosButtonSize),
    control: { type: "select" },
    description: "Define a variação de tamanho do.",
    defaultValue: "xs",
    table: {
      type: { summary: Object.values(TemplariosButtonSize).join(" |") },
      defaultValue: { summary: "undefined" },
    },
  },
  disabled: {
    disabled: false,
    control: { type: "boolean" },
    description: "Define o estado disabled do componente.",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "undefined" },
    },
  },
};

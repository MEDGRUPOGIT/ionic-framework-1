import { html } from "lit-html";
import { withDesign } from "storybook-addon-designs";
import { MedColors } from "../../../../../templarios";

export default {
  title: "Components/Web Framework/CSS Framework/Input",
  decorators: [withDesign],
};

const Template = ({ "ds-color": dsColor, "ds-name": dsName, disabled, state }) => {
  return html`
      <p tp-label token="p14"> Description: </p>
      <input
          tp-input
          ds-color=${dsColor}
          ds-name=${dsName}
          .disabled=${disabled}
          state=${state}
          placeholder="Lorem ipsum dolor"
      ></input>
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
  "ds-name": {
    options: [undefined, "secondary"],
    control: { type: "inline-radio" },
    description: "Define a variação do componente.",
    defaultValue: undefined,
    table: {
      type: { summary: "secondary | undefined" },
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
  "state": {
    options: [undefined, "attention", "caution", "warning", "success"],
    control: { type: "select" },
    description: "Define o estado de feedback do componente.",
    defaultValue: undefined,
    table: {
      type: { summary: "attention | caution | warning | success | undefined" },
      defaultValue: { summary: "undefined" },
    },
  },
};

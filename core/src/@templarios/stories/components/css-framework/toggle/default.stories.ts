import { html } from "lit-html";
import { withDesign } from "storybook-addon-designs";
import { MedColors } from "../../../../templarios";

export default {
  title: "Components/CSS Framework/Toggle",
  decorators: [withDesign],
};

const Template = ({ "ds-color": dsColor, disabled }) => {
  return html`
  <style>
    section {
      display:flex;
      flex-direction: column;
    }

    section > * {
      margin: 10px;
    }
  </style>

  <section>
    <div tp-container-toggle ?disabled=${disabled}>
      <label tp-toggle>
        <input type="checkbox" id="toggle-value-1" ?disabled=${disabled}>
        <span tp-toggle-slider tp-toggle-round ds-color=${dsColor}></span>
      </label>
      <label tp-label for="toggle-value-1" token="p14">Value 1</label>
    </div>

    <div tp-container-toggle inverted ?disabled=${disabled}>
      <label tp-toggle inverted>
        <input type="checkbox" id="toggle-value-2" ?disabled=${disabled}>
        <span tp-toggle-slider tp-toggle-round ds-color=${dsColor}></span>
      </label>
      <label tp-label for="toggle-value-2" token="p14">Value 2</label>
    </div>
  <section>  
  `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/01.-Componentes?node-id=12435%3A44190",
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

import { html } from "lit-html";
import { withDesign } from "storybook-addon-designs";
import { MedColors } from "../../../../templarios";

export default {
  title: "Components/CSS Framework/Radio",
  decorators: [withDesign],
};

const Template = ({ "ds-color": dsColor, "ds-name": dsName, disabled }) => {
  return html`
        <style>
        section {
          display: flex;
          flex-direction: column;
        }

        section > * {
          margin: 10px;
        }
        </style>

        <section>
          <div
            tp-container-radio
            ds-color=${dsColor}
            ds-name=${dsName}
            ?disabled=${disabled}>
            <input type="radio" tp-radio id="tp-radio-value-1" name="tp-radio">  </input>
            <label tp-label token="p14" for="tp-radio-value-1">
              Value 1
            </label>
          </div>

          <div
            tp-container-radio
            inverted
            ds-color=${dsColor}
            ds-name=${dsName}
            ?disabled=${disabled}>
            <input type="radio" tp-radio id="tp-radio-value-2" name="tp-radio">  </input>
            <label tp-label token="p14" for="tp-radio-value-2">
              Value 2
            </label>
          </div>

        </section >
         `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/01.-Componentes?node-id=4668%3A26339",
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
};

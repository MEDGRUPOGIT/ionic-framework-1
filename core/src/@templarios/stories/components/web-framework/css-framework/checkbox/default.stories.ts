import { html } from "lit-html";
import { withDesign } from "storybook-addon-designs";
import { MedColors } from "../../../../../templarios";

export default {
  title: "Components/Web Framework/CSS Framework/Checkbox",
  decorators: [withDesign],
};

const Template = ({ "ds-color": dsColor, disabled }) => {
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
      <div tp-container-checkbox ?disabled=${disabled} ds-color=${dsColor}>
        <input tp-checkbox type="checkbox" id="tp-checkbox-value-1">
        </input>
        <label tp-label token="p14" for="tp-checkbox-value-1">
          <div tp-checkbox-frame>
            <ion-icon class="med-icon" name="med-check"></ion-icon>  
          </div>            
          Value 1          
        </label>
      </div>

      <div tp-container-checkbox ?disabled=${disabled} ds-color=${dsColor} inverted>
        <input tp-checkbox type="checkbox" id="tp-checkbox-value-2">
        </input>
        <label tp-label token="p14" for="tp-checkbox-value-2">
          <div tp-checkbox-frame>
            <ion-icon class="med-icon" name="med-check"></ion-icon>  
          </div>            
          Value 2          
        </label>
      </div>     
    </section>
  `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/01.-Componentes?node-id=4920%3A33705",
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

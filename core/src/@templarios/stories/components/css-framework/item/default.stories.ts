import { withDesign } from "storybook-addon-designs";
import {
  BaseGap,
  BaseRadius,
  BaseSpacing,
  MedColors,
} from "../../../../templarios";

export default {
  title: "Components/CSS Framework/Item",
  decorators: [withDesign],
};

const Template = ({
  "ds-color": dsColor,
  radius,
  gap,
  "spacing-v": spacingV,
  "spacing-h": spacingH,
  "ds-name": dsName,
  disabled,
}) => {
  return `
      <div>
        <label tp-label token="h24">Default</label>

        <div
          tp-item
          ds-color=${dsColor}
          radius=${radius}
          gap=${gap}
          spacing-v=${spacingV}
          spacing-h=${spacingH}>
          <label tp-label>Texto Primario</label>
        </div>
      </div>

      <div>
        <label tp-label token="h24">Icon</label>

        <div
          tp-item
          ds-color=${dsColor}
          radius=${radius}
          gap=${gap}
          spacing-v=${spacingV}
          spacing-h=${spacingH}>
          <ion-icon class="med-icon" name="med-direita"></ion-icon>
          <label tp-label>Texto Primario</label>
        </div>

        <div
          tp-item
          ds-color=${dsColor}
          radius=${radius}
          gap=${gap}
          spacing-v=${spacingV}
          spacing-h=${spacingH}>
          <ion-icon class="med-icon" slot="start" name="med-direita"></ion-icon>
          <label tp-label>Texto Primario</label>
          <ion-icon class="med-icon" slot="end" name="med-direita"></ion-icon>
        </div>

        <div
          tp-item
          ds-color=${dsColor}
          radius=${radius}
          gap=${gap}
          spacing-v=${spacingV}
          spacing-h=${spacingH}>
          <label tp-label>Texto Primario</label>
          <ion-icon class="med-icon" slot="end" name="med-direita"></ion-icon>
        </div>
      </div>

      <div>
        <label tp-label token="h24">Button</label>

        <div
          tp-item
          ds-color=${dsColor}
          radius=${radius}
          gap=${gap}
          spacing-v=${spacingV}
          spacing-h=${spacingH}>
          <button tp-button fill="clear" icon-only ds-size="xs">
            <ion-icon class="med-icon" name="med-direita"></ion-icon>
          </button>
          <label tp-label>Texto Primario</label>
        </div>

        <div
          tp-item
          ds-color=${dsColor}
          radius=${radius}
          gap=${gap}
          spacing-v=${spacingV}
          spacing-h=${spacingH}>
          <button tp-button fill="clear" icon-only ds-size="xs">
            <ion-icon class="med-icon" name="med-direita"></ion-icon>
          </button>
          <label tp-label>Texto Primario</label>
          <button tp-button fill="clear" icon-only ds-size="xs">
            <ion-icon class="med-icon" name="med-direita"></ion-icon>
          </button>
        </div>

        <div
          tp-item
          ds-color=${dsColor}
          radius=${radius}
          gap=${gap}
          spacing-v=${spacingV}
          spacing-h=${spacingH}>
          <label tp-label>Texto Primario</label>
          <button tp-button fill="clear" icon-only ds-size="xs">
            <ion-icon class="med-icon" slot="icon-only" name="med-direita"></ion-icon>
          </button>
        </div>
      </div>

      <div>
        <label tp-label token="h24">Radio</label>

        <div
          tp-item
          ds-color=${dsColor}
          radius=${radius}
          gap=${gap}
          spacing-v=${spacingV}
          spacing-h=${spacingH}>
            <div tp-container-radio ds-name=${dsName} ?disabled=${disabled}  ds-color=${dsColor}>
              <input type="radio" tp-radio id="tp-radio-value-1" name="tp-radio"></input>
              <label tp-label token="p14" for="tp-radio-value-1">Value 1</label>
            </div>
        </div>

        <div
          tp-item
          ds-color=${dsColor}
          radius=${radius}
          gap=${gap}
          spacing-v=${spacingV}
          spacing-h=${spacingH}>
            <div tp-container-radio inverted ds-name=${dsName} ?disabled=${disabled} ds-color=${dsColor}>
              <input type="radio" tp-radio id="tp-radio-value-2" name="tp-radio"></input>
              <label tp-label token="p14" for="tp-radio-value-2">Value 2</label>
            </div>
        </div>
      </div>

      <div>
        <label tp-label token="h24">Checkbox</label>

        <div
          tp-item
          ds-color=${dsColor}
          radius=${radius}
          gap=${gap}
          spacing-v=${spacingV}
          spacing-h=${spacingH}>
          <div tp-container-checkbox ?disabled=${disabled} ds-color=${dsColor}>
            <input type="checkbox" tp-checkbox id="tp-checkbox-value-1">  </input>
            <label tp-label token="p14" for="tp-checkbox-value-1">
              Value 1
              <ion-icon class="med-icon" name="med-check"></ion-icon>
            </label>
          </div>
        </div>

        <div
          tp-item
          ds-color=${dsColor}
          radius=${radius}
          gap=${gap}
          spacing-v=${spacingV}
          spacing-h=${spacingH}>
          <div tp-container-checkbox inverted ?disabled=${disabled} ds-color=${dsColor}>
            <input type="checkbox" tp-checkbox id="tp-checkbox-value-2">  </input>
            <label tp-label token="p14" for="tp-checkbox-value-2">
              Value 2
              <ion-icon class="med-icon" name="med-check"></ion-icon>
            </label>
          </div>
        </div>
        
      </div>

      <div>
        <label tp-label token="h24">Toogle</label>

        <div
          tp-item
          ds-color=${dsColor}
          radius=${radius}
          gap=${gap}
          spacing-v=${spacingV}
          spacing-h=${spacingH}>
            <div tp-container-toggle ?disabled=${disabled}>
              <label tp-toggle>
                <input type="checkbox" id="toggle-value-1" ?disabled=${disabled}>
                <span tp-toggle-slider tp-toggle-round ds-color=${dsColor}></span>
              </label>
              <label tp-label for="toggle-value-1" token="p14">Value 1</label>
            </div>
        </div>

        <div
          tp-item
          ds-color=${dsColor}
          radius=${radius}
          gap=${gap}
          spacing-v=${spacingV}
          spacing-h=${spacingH}>
            <div tp-container-toggle inverted ?disabled=${disabled}>
              <label tp-toggle inverted>
                <input type="checkbox" id="toggle-value-2" ?disabled=${disabled}>
                <span tp-toggle-slider tp-toggle-round ds-color=${dsColor}></span>
              </label>
              <label tp-label for="toggle-value-2" token="p14">Value 2</label>
            </div>
        </div>
      </div>

      <div>
        <label tp-label token="h24">Input</label>

        <ion-item
          ds-color=${dsColor}
          radius=${radius}
          gap=${gap}
          spacing-v=${spacingV}
          spacing-h=${spacingH}
          mode="ios"
          lines="none">
          <label tp-label>Description</label>
          <tp-input-container>
            <ion-datetime
              mode="ios"
              placeholder="dd/mm/aaaa">
            </ion-datetime>
            <ion-icon class="med-icon" slot="end" name="med-cronograma"></ion-icon>
          </tp-input-container>
        </ion-item>

        <ion-item>
          <label tp-label position="floating">Select</label>
          <ion-select mode="md">
            <ion-select-option value="">No Game Console</ion-select-option>
            <ion-select-option value="nes">NES</ion-select-option>
            <ion-select-option value="n64" selected>Nintendo64</ion-select-option>
            <ion-select-option value="ps">PlayStation</ion-select-option>
            <ion-select-option value="genesis">Sega Genesis</ion-select-option>
            <ion-select-option value="saturn">Sega Saturn</ion-select-option>
            <ion-select-option value="snes">SNES</ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <label tp-label>Toggle</label>
          <ion-toggle slot="end"></ion-toggle>
        </ion-item>

        <ion-item>
          <label tp-label position="floating">Floating Input</label>
          <ion-input mode="md"></ion-input>
        </ion-item>

        <ion-item>
          <label tp-label>Input (placeholder)</label>
          <ion-input mode="md" placeholder="Placeholder"></ion-input>
        </ion-item>

        <ion-item>
          <label tp-label>Checkbox</label>
          <ion-checkbox slot="start"></ion-checkbox>
        </ion-item>

        <ion-item>
          <label tp-label>Range</label>
          <ion-range></ion-range>
        </ion-item>
      </div>
  `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/01.-Componentes?node-id=13338%3A46802",
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
  radius: {
    options: [undefined, ...Object.values(BaseRadius)],
    control: { type: "select" },
    description: "Define o token do componente.",
    defaultValue: undefined,
    table: {
      type: { summary: Object.values(BaseRadius).join(" |") },
      defaultValue: { summary: "undefined" },
    },
  },
  gap: {
    options: [undefined, ...Object.values(BaseGap)],
    control: { type: "select" },
    description: "Define o token do componente.",
    defaultValue: undefined,
    table: {
      type: { summary: Object.values(BaseGap).join(" |") },
      defaultValue: { summary: "undefined" },
    },
  },
  "spacing-v": {
    options: [undefined, ...Object.values(BaseSpacing)],
    control: { type: "select" },
    description: "Define o token do componente.",
    defaultValue: undefined,
    table: {
      type: { summary: Object.values(BaseSpacing).join(" |") },
      defaultValue: { summary: "undefined" },
    },
  },
  "spacing-h": {
    options: [undefined, ...Object.values(BaseSpacing)],
    control: { type: "select" },
    description: "Define o token do componente.",
    defaultValue: undefined,
    table: {
      type: { summary: Object.values(BaseSpacing).join(" |") },
      defaultValue: { summary: "undefined" },
    },
  },
};

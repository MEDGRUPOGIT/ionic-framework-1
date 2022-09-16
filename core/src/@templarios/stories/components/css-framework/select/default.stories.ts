import { html } from "lit-html";
import { withDesign } from "storybook-addon-designs";
import { MedColors } from "../../../../templarios";

export default {
  title: "Components/CSS Framework/Select",
  decorators: [withDesign],
};

const Template = ({ "ds-color": dsColor, "ds-name": dsName, disabled, state }) => {
  return html`
    <p tp-label token="p14" for="tp-select">Description:</p>

    <div
      tp-container-select
      ds-color=${dsColor}
      ds-name=${dsName}
      ?disabled=${disabled}
      state=${state}
    >
      <select tp-select id="tp-select" placeholder="Lorem ipsum dolor">
        <option placeholder value="" disabled selected>
          Lorem ipsum dolor
        </option>
        <option>Lorem ipsum dolor 1</option>
        <option>Lorem ipsum dolor 2</option>
        <option>Lorem ipsum dolor 3</option>
        <option>Lorem ipsum dolor 4</option>
        <option>Lorem ipsum dolor 5</option>
      </select>
      <div tp-select-header>
        <p tp-label token="p14">Lorem ipsum dolor</p>
        <ion-icon class="med-icon" name="med-baixo"></ion-icon>
      </div>
      <div tp-select-content>
        <ul tp-select-list>
          <li tp-select-item>
            <p tp-label token="p14">Lorem ipsum dolor 1</p>
          </li>
          <li tp-select-item>
            <p tp-label token="p14">Lorem ipsum dolor 2</p>
          </li>
          <li tp-select-item>
            <p tp-label token="p14">Lorem ipsum dolor 3</p>
          </li>
          <li tp-select-item>
            <p tp-label token="p14">Lorem ipsum dolor 4</p>
          </li>
          <li tp-select-item>
            <p tp-label token="p14">Lorem ipsum dolor 5</p>
          </li>
        </ul>
      </div>
    </div>

    <p tp-label token="p14" for="tp-select">Description:</p>

    <div
      tp-container-select
      ds-color=${dsColor}
      ds-name=${dsName}
      ?disabled=${disabled}
      state=${state}
      class="open"
    >
      <select tp-select id="tp-select" placeholder="Lorem ipsum dolor">
        <option placeholder value="" disabled selected>
          Lorem ipsum dolor
        </option>
        <option>Lorem ipsum dolor 1</option>
        <option>Lorem ipsum dolor 2</option>
        <option>Lorem ipsum dolor 3</option>
        <option>Lorem ipsum dolor 4</option>
        <option>Lorem ipsum dolor 5</option>
      </select>
      <div tp-select-header>
        <p tp-label token="p14">Lorem ipsum dolor</p>
        <ion-icon class="med-icon" name="med-baixo"></ion-icon>
      </div>
      <div tp-select-content>
        <ul tp-select-list>
          <li tp-select-item>
            <p tp-label token="p14">Lorem ipsum dolor 1</p>
          </li>
          <li tp-select-item>
            <p tp-label token="p14">Lorem ipsum dolor 2</p>
          </li>
          <li tp-select-item>
            <p tp-label token="p14">Lorem ipsum dolor 3</p>
          </li>
          <li tp-select-item>
            <p tp-label token="p14">Lorem ipsum dolor 4</p>
          </li>
          <li tp-select-item>
            <p tp-label token="p14">Lorem ipsum dolor 5</p>
          </li>
          <li tp-select-item>
          <p tp-label token="p14">Lorem ipsum dolor 6</p>
          </li>
          <li tp-select-item>
            <p tp-label token="p14">Lorem ipsum dolor 7</p>
          </li>
          <li tp-select-item>
            <p tp-label token="p14">Lorem ipsum dolor 8</p>
          </li>
          <li tp-select-item>
            <p tp-label token="p14">Lorem ipsum dolor 9</p>
          </li>
          <li tp-select-item>
            <p tp-label token="p14">Lorem ipsum dolor 10</p>
          </li>
          <li tp-select-item>
            <p tp-label token="p14">Lorem ipsum dolor 11</p>
          </li>
          <li tp-select-item>
          <p tp-label token="p14">Lorem ipsum dolor 12</p>
          </li>
        </ul>
      </div>
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

import { withDesign } from "storybook-addon-designs";
import { TemplariosButtonSize, MedColors } from "../../../../templarios";

export default {
  title: "Components/CSS Framework/Button",
  decorators: [withDesign],
};

const Template = ({
  "ds-color": dsColor,
  "ds-size": dsSize,
  disabled,
  expand,
}) => {
  return `
  <style>
  section {
    display: flex;
  }

  section > * {
    margin: 10px;
  }
  </style>
  
    <section>
      <button
          tp-button
          ${dsColor ? `ds-color=${dsColor}` : ""}
          ${dsSize ? `ds-size=${dsSize}` : ""}
          ${disabled ? `disabled=${disabled}` : ""}
          ${expand !== "none" ? `expand=${expand}` : ""}
          >
          <span>Button ${dsSize}</span>
       </button>

       <button
          tp-button
          ${dsColor ? `ds-color=${dsColor}` : ""}
          ${dsSize ? `ds-size=${dsSize}` : ""}
          ${disabled ? `disabled=${disabled}` : ""}
          ${expand !== "none" ? `expand=${expand}` : ""}
          >
          <ion-icon class="med-icon" name="med-esquerda"></ion-icon>
          <span>Button ${dsSize}</span>
       </button>

       <button
          tp-button
          ${dsColor ? `ds-color=${dsColor}` : ""}
          ${dsSize ? `ds-size=${dsSize}` : ""}
          ${disabled ? `disabled=${disabled}` : ""}
          ${expand !== "none" ? `expand=${expand}` : ""}
          >
          <span>Button ${dsSize}</span>
          <ion-icon class="med-icon" name="med-direita"></ion-icon>
        </button>

        <button
          tp-button
          icon-only
          ${dsColor ? `ds-color=${dsColor}` : ""}
          ${dsSize ? `ds-size=${dsSize}` : ""}
          ${disabled ? `disabled=${disabled}` : ""}
          ${expand !== "none" ? `expand=${expand}` : ""}
          >
          <ion-icon class="med-icon" name="med-star-filled"></ion-icon>
        </button>
    </section>
  `;
};

export const Primary = Template.bind({});
Primary.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=3398%3A561",
  },
};
Primary.argTypes = {
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
    options: [undefined, ...Object.values(TemplariosButtonSize)],
    control: { type: "select" },
    description: "Define a variação de tamanho do componente.",
    defaultValue: "md",
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
  expand: {
    defaultValue: "none",
    options: ["block"],
    control: { type: "check" },
    description: "Define a variação de estilo do componente.",
    table: {
      type: { summary: ["block"] },
      defaultValue: { summary: "undefined" },
    },
  },
};

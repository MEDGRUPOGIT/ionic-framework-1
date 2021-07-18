import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { medColors, medNeutrals } from '../../../med-colors';
import { medIcons } from '../../../med-icons';

export default {
  title: 'Components/Core/Button',
  decorators: [withDesign],
};

const Template = ({ color, neutral, disabled, expand, dsSize, iconLeft, iconRight, iconOnly, slot }) => {
  return html`
    <ion-app class="storybook-only">
      <div class="storybook-only__container">

        <!-- component -->
          <ion-button .color="${color}" .neutral=${neutral} ?disabled=${disabled} .expand=${expand} ds-size=${dsSize}>${slot}</ion-button>

          <ion-button .color="${color}" .neutral=${neutral} ?disabled=${disabled} .expand=${expand} ds-size=${dsSize}>
            <ion-icon slot="start" name=${iconLeft}></ion-icon>
            ${slot}
          </ion-button>

          <ion-button .color="${color}" .neutral=${neutral} ?disabled=${disabled} .expand=${expand} ds-size=${dsSize}>
            ${slot}
            <ion-icon slot="end" name=${iconRight}></ion-icon>
          </ion-button>

          <ion-button .color="${color}" .neutral=${neutral} ?disabled=${disabled} .expand=${expand} ds-size=${dsSize}>
            <ion-icon slot="start" name=${iconLeft}></ion-icon>
            ${slot}
            <ion-icon slot="end" name=${iconRight}></ion-icon>
          </ion-button>

          <ion-button .color="${color}" .neutral=${neutral} ?disabled=${disabled} .expand=${expand} ds-size=${dsSize}>
            <ion-icon slot="icon-only" name=${iconOnly}></ion-icon>
          </ion-button>
        <!-- component -->

      </div>
    </ion-app>
  `
}

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=729%3A189',
  },
}
Default.argTypes = {
  color: {
    options: medColors,
    control: { type: 'inline-radio'},
    description: "Define a cor do componente.",
    table: {
      type:  { summary: 'Color' },
      defaultValue: { summary: 'undefined' },
    },
  },
  neutral: {
    options: medNeutrals,
    control: { type: 'inline-radio'},
    description: "Define a cor neutra do componente.",
    table: {
      type:  { summary: 'Neutrals' },
      defaultValue: { summary: 'undefined' },
    },
  },
  disabled: {
    disabled: false,
    control: { type: 'boolean' },
    description: 'Define o comportamento disabled do componente.',
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
  dsSize: {
    options: [undefined, 'xxs', 'xs', 'sm'],
    control: { type: 'radio'},
    description: "Define a variação de tamanho componente.",
    table: {
      type:  { summary: 'xs | sm | md | lg' },
      defaultValue: { summary: 'undefined' },
    },
  },
  expand: {
    defaultValue: 'none',
    options: [undefined, 'full', 'block'],
    control: { type: 'radio'},
    description: "Define a variação de estilo do componente.",
    table: {
      type:  { summary: ['full | block'] },
      defaultValue: { summary: 'undefined' },
    },
  },
  iconLeft: {
    options: medIcons,
    control: { type: 'select'},
    defaultValue: 'med-arrow-left-circle',
    description: '**Atributo utilizado apenas no storybook. Não é um atributo do componente!.**',
    table: {
      type:  { summary: ['string'] },
      defaultValue: { summary: 'med-arrow-left-circle' },
    },
  },
  iconRight: {
    options: medIcons,
    control: { type: 'select'},
    defaultValue: 'med-arrow-right-circle',
    description: '**Atributo utilizado apenas no storybook. Não é um atributo do componente!.**',
    table: {
      type:  { summary: ['string'] },
      defaultValue: { summary: 'med-arrow-left-circle' },
    },
  },
  iconOnly: {
    options: medIcons,
    control: { type: 'select'},
    defaultValue: 'med-arrow-right-circle',
    description: '**Atributo utilizado apenas no storybook. Não é um atributo do componente!.**',
    table: {
      type:  { summary: ['string'] },
      defaultValue: { summary: 'med-arrow-left-circle' },
    },
  },
  slot: {
    control: { type: 'text' },
    defaultValue: 'button',
  },
};

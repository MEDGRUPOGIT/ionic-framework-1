import { withDesign } from "storybook-addon-designs";
import { MedColors } from "../../../../templarios";

export default {
  title: "Components/Core/Accordion",
  decorators: [withDesign],
};

const Template = ({ dsName, 'ds-color': dsColor }) => {
  return `
    <ion-app>
      <ion-content>
        <tp-accordion-group>
          <tp-accordion value="first" ds-name=${dsName} ds-color=${dsColor}>
            <ion-item
            radius="s08"
            gap="s16"
            mode="ios"
            lines="none"
            slot="header">
              <ion-icon class="med-icon" slot="start" name="med-estrela"></ion-icon>
              <ion-label>Primeiro conteudo</ion-label>
              <ion-icon class="med-icon med-rotate" slot="end" name="med-baixo"></ion-icon>
            </ion-item>
            <div slot="content">
              <ion-label>Teste 01</ion-label>
            </div>
          </tp-accordion>

          <tp-accordion value="second" ds-name=${dsName} ds-color=${dsColor}>
            <ion-item
            radius="s08"
            gap="s16"
            mode="ios"
            lines="none"
            slot="header">
              <ion-icon class="med-icon" slot="start" name="med-estrela"></ion-icon>
              <ion-label>Segundo conteudo</ion-label>
              <ion-icon class="med-icon med-rotate" slot="end" name="med-baixo"></ion-icon>
            </ion-item>
            <div slot="content">
              <ion-label>Teste 02</ion-label>
            </div>
          </tp-accordion>

          <tp-accordion value="third" ds-name=${dsName} ds-color=${dsColor}>
            <ion-item
            radius="s08"
            gap="s16"
            mode="ios"
            lines="none"
            slot="header">
              <ion-icon class="med-icon" slot="start" name="med-estrela"></ion-icon>
              <ion-label>Terceiro conteudo</ion-label>
              <ion-icon class="med-icon med-rotate" slot="end" name="med-baixo"></ion-icon>
            </ion-item>
            <div slot="content">
              <ion-label>Teste 03</ion-label>
            </div>
          </tp-accordion>
        </tp-accordion-group>
      </ion-content>
    </ion-app>
  `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=3398%3A561",
  },
};
Default.argTypes = {
  dsName: {
    options: [undefined, "secondary"],
    control: { type: "radio" },
    description: "Define a variação do componente.",
    table: {
      type: { summary: "secondary" },
      defaultValue: { summary: "undefined" },
    },
  },
  'ds-color': {
    options: [undefined, ...Object.values(MedColors)],
    control: { type: 'select' },
    description: 'Define a cor do componente.',
    defaultValue: undefined,
    table: {
      type: { summary: Object.values(MedColors).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
};

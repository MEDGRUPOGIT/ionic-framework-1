import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from '../../../../../../../templarios';

export default {
  title: 'Components/Ionic/Button/Test/Secondary',
  decorators: [withDesign],
};

const Template = ({ }) => {
  return html`
    <ion-app>
      <ion-content>
        ${Object.values(MedColors).map(color => {
          return html`
            <ion-button mode="ios" ds-color=${color}>Button</ion-button>
          `
        })}

        ${Object.values(MedColors).map(color => {
          return html`
            <ion-button mode="ios" ds-color=${color}>
              <ion-icon slot="start" class="med-icon" name="med-esquerda"></ion-icon>
              Button
            </ion-button>
          `
        })}

        ${Object.values(MedColors).map(color => {
          return html`
            <ion-button mode="ios" ds-color=${color}>
              Button
              <ion-icon slot="end" class="med-icon" name="med-direita"></ion-icon>
            </ion-button>
          `
        })}

        ${Object.values(MedColors).map(color => {
          return html`
            <ion-button icon-only mode="ios" ds-color=${color}>
              <ion-icon slot="icon-only" class="med-icon" name="med-star-filled"></ion-icon>
            </ion-button>
          `
        })}
      </ion-content>
    </ion-app>
  `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=3398%3A561',
  },
};

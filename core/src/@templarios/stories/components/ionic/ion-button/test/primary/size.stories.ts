import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { TemplariosButtonSize } from '../../../../../../templarios';

export default {
  title: 'Components/Ionic/Button/Test/Primary',
  decorators: [withDesign],
};

const Template = ({ }) => {
  return html`
    <ion-app>
      <ion-content>
        ${Object.values(TemplariosButtonSize).map(size => {
          return html`
            <ion-button mode="ios" ds-size=${size}>Button</ion-button>
          `
        })}

        ${Object.values(TemplariosButtonSize).map(size => {
          return html`
            <ion-button mode="ios" ds-size=${size}>
              <ion-icon slot="start" class="med-icon" name="med-esquerda"></ion-icon>
              Button
            </ion-button>
          `
        })}

        ${Object.values(TemplariosButtonSize).map(size => {
          return html`
            <ion-button mode="ios" ds-size=${size}>
              Button
              <ion-icon slot="end" class="med-icon" name="med-direita"></ion-icon>
            </ion-button>
          `
        })}

        ${Object.values(TemplariosButtonSize).map(size => {
          return html`
            <ion-button icon-only mode="ios" ds-size=${size}>
              <ion-icon slot="icon-only" class="med-icon" name="med-star-filled"></ion-icon>
            </ion-button>
          `
        })}
      </ion-content>
    </ion-app>
  `;
};

export const Size = Template.bind({});
Size.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=3398%3A561',
  },
};

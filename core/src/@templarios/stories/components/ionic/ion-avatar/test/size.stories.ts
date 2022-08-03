import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { TemplariosAvatarSize } from '../../../../../templarios';

export default {
  title: 'Components/Ionic/Avatar/Test',
  decorators: [withDesign],
};

const Template = ({ }) => {
  return html`
    <ion-app>
      <ion-content>
        ${Object.values(TemplariosAvatarSize).map(size => {
          return html`
            <ion-avatar ds-size=${size}>
              <ion-label>AB<ion-label>
            </ion-avatar>
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
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/01.-Componentes?node-id=5248%3A39909',
  },
};

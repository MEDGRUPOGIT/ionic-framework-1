import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { TemplariosBadgeSize } from '../../../../../templarios';

export default {
  title: 'Components/Ionic/Badge/Test',
  decorators: [withDesign],
};

const Template = ({ }) => {
  return html`
    <ion-app>
      <ion-content>
        ${Object.values(TemplariosBadgeSize).map(size => {
          return html`
            <ion-badge ds-size=${size}> Badge </ion-badge>
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

import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Core/Calendar',
  decorators: [withDesign],
};

const Template = () => {
  return html`
    <ion-app>
      <med-calendar></med-calendar>
    </ion-app>
  `
}

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}

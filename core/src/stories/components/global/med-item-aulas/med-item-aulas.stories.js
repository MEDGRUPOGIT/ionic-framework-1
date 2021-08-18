import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { medColors, medNeutrals } from '../../../med-colors';

export default {
  title: 'Components/Core/Item Aulas',
  decorators: [withDesign],
};

const TemplateDefault = ({}) => {
  return html`
    <ion-app class="storybook-only">
      <ion-content class="storybook-only__container" style="text-align:left;">

        <!-- component -->
          <med-item-aulas></med-item-aulas>
        <!-- component -->

      </ion-content>
    </ion-app>
  `
}

export const ItemAulas = TemplateDefault.bind({});
ItemAulas.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QaJANG4TVrskupANopYUPL/Aulas?node-id=6%3A10088',
  },
}
ItemAulas.argTypes = {

};

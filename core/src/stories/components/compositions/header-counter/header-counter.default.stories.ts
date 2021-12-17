import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Compositions/Header Counter',
  decorators: [withDesign],
};

const Template = () => {
  return html`
    <ion-app>
      <ion-content>
        <!-- component -->
        <med-base class="cp-header-counter" spacing-v="s16" spacing-h="s16" ds-color="brand" radius="s00">
          <div class="cp-header-counter__middle" slot="middle">
            <med-type token="p16b">CIR 1</med-type>
            <med-type token="p12x">Trauma I – Primeiro atendimento, cabeça e tórax</med-type>
          </div>
          <med-chart-radial class="cp-header-counter__end" ds-color="aula" ds-name="secondary" slot="end"></med-chart-radial>
        </med-base>
        <!-- component -->
      </ion-content>
    </ion-app>
    `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};
Default.argTypes = {};

import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Compositions/Video Caption Feedback',
  decorators: [withDesign],
};

const Template = () => {
  return html`
    <ion-app>
      <ion-content>
        <!-- component -->
        <med-base class="cp-video-caption-feedback" radius="s00">
          <med-type class="cp-video-caption-feedback__start" token="p14" slot="start" ds-color="neutral-5">Ventilação Mecânica; Cardiointensivismo; Sepse; Neurointensivismo; Cuidados Paliativos</med-type>
          <med-rate-aula class="cp-video-caption-feedback__end" slot="end" ></med-rate-aula>
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

import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Team/Aulas/Rate Feedback',
  decorators: [withDesign],
};

const Template = () => {

  setTimeout(() => {
    document.querySelector('med-video-thumbnail').addEventListener('click', (e) => {
      e.stopPropagation();
    })

    document.querySelector('.accordion-professor__middle').addEventListener('click', (e) => {
      e.stopPropagation();
    })
  }, 1000);

  return html`

  <style>
  .med-rate-feedback {
    min-height: 65px;
  }

  .med-rate-feedback__start {
    display: flex;
    align-items: center;
  }

  </style>
    <ion-app>
      <ion-content>

      <!-- component -->
      <med-base class="med-rate-feedback">
        <med-caption class="med-rate-feedback__start" slot="start" ds-color="neutral-6">
          <h3 class="med-clamp">Nome</h3>
        </med-caption>

        <med-rate-aula slot="end" class="med-rate-feedback__end"></med-rate-aula>
      </med-base>
      <!-- component -->

      </ion-content>
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
Default.argTypes = {
};

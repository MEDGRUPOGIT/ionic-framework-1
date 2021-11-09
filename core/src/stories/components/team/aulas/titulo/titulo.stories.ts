import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Team/Aulas/Título',
  decorators: [withDesign],
};

const Template = ({valores}) => {

  setTimeout(() => {
    document.querySelector('med-chart-radial').valores = valores.valores;
  }, 1000);

  return html`
    <style>
      .titulo {
        align-items: center;
      }

      .titulo__end {
        margin-left: 16px;
      }
    </style>
    <ion-app>
      <ion-content>
        <div class="flex-center">

          <!-- component -->
          <med-base spacing-v="s16" spacing-h="s16" class="titulo" ds-color="brand">
            <med-heading ds-size="xs" slot="middle">
              <h3 class="med-clamp">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus?</h3>
            </med-heading>

            <med-chart-radial class="titulo__end" ds-color="aula" ds-name="secondary" slot="end"></med-chart-radial>
          </med-base>
          <!-- component -->

        </div>
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
  valores: {
    defaultValue: {
      valores: [
        {
          cor: '',
          label: 'acertos',
          quantia: 32,
          ignoreBarra: false,
        },
        {
          cor: '',
          label: 'restantes',
          quantia: 52,
          ignoreBarra: true,
        }
      ],
    },
    control: { type: 'array' },
  }
};

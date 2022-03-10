import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Remover/Card Modal',
  decorators: [withDesign],
};

const Template = () => {
  return html`
    <style>
      .cp-card-modal__detalhes-tarefa {
        display: flex;
        align-items: center;
        margin: 16px 0;
      }

      .cp-card-modal__categoria {
        display: flex;
        align-items: center;
        margin-right: 8px
      }

      .cp-card-modal__buttons {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 16px 0;
      }

      .cp-card-modal__icon {
        stroke: hsl(var(--med-color-neutral-8));
        margin-right: 8px
      }

    </style>
    <ion-app>
      <ion-content>
        <div class="flex-center flex-center--xs">

          <!-- component -->
          <div class="cp-card-modal">
            <med-type token="h20x">Título da Tarefa</med-type>
            <div class="cp-card-modal__detalhes-tarefa">
              <div class="cp-card-modal__categoria">
                <ion-icon class="cp-card-modal__icon med-icon" name="med-apostila"></ion-icon>
                <med-type token="p14b" ds-color="neutral-8">Categoria</med-type>
              </div>
              <med-type token="p14" ds-color="neutral-8">21:00 - 23:00</med-type>
            </div>

            <med-type token="p14x">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nulla ornare dui tempor arcu porta fringilla. Cras vitae sem
              lacinia, sagittis mauris eget, convallis enim. Etiam metus enim,
              maximus at placerat in, suscipit ut felis. Nullam eu lorem eget
              dui porta fermentum eget at nisi. Duis placerat eros sed
              facilisis varius.
            </med-type>
            <div class="cp-card-modal__buttons">
              <ion-button ds-name="secondary" ds-size="sm" ds-color="brand">
                apagar
              </ion-button>
              <ion-button ds-name="primary" ds-size="sm">
                editar
              </ion-button>
            </div>


          </div>
          <!-- component -->

        </div>
      </ion-content>
    </ion-app>
    `;
};

export const DetalhesTarefa = Template.bind({});
DetalhesTarefa.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/1YvPOL5j7kW9Btmgkh2YzA/MEDSmart?node-id=6430%3A32282',
  },
};
 DetalhesTarefa.argTypes = {};

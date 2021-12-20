import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Compositions/Card Modal/Editar Tarefa',
  decorators: [withDesign],
};

const Template = () => {
  return html`
    <style>
      .cp-card-modal__titulo-tarefa {
        margin-top: 16px;
      }

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
            <med-type token="h20x" ds-color="brand">Deseja realmente apagar essa tarefa?</med-type>
            <med-type class="cp-card-modal__titulo-tarefa" token="h20x">Título da tarefa</med-type>
            <div class="cp-card-modal__detalhes-tarefa">
              <div class="cp-card-modal__categoria">
                <ion-icon class="cp-card-modal__icon med-icon" name="med-apostila"></ion-icon>
                <med-type token="p14b" ds-color="neutral-8">Categoria</med-type>
              </div>
              <med-type token="p14" ds-color="neutral-8">21:00 - 23:00</med-type>
            </div>
            <div class="cp-card-modal__buttons">
              <ion-button ds-name="secondary" ds-size="sm" ds-color="brand">
                Cancelar
              </ion-button>
              <ion-button ds-name="primary" ds-size="sm" >
                apagar
              </ion-button>
            </div>


          </div>
          <!-- component -->

        </div>
      </ion-content>
    </ion-app>
    `;
};

export const EditarTarefa = Template.bind({});
EditarTarefa.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/1YvPOL5j7kW9Btmgkh2YzA/MEDSmart?node-id=6430%3A32282',
  },
};
 EditarTarefa.argTypes = {};

import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Remover/Card Modal/Apagar Tarefa',
  decorators: [withDesign],
};

const Template = () => {
  return html`
    <style>
      .cp-card-modal {
        padding: 30px;
      }

      .cp-card-modal__titulo-acao {
        margin-bottom: 16px;
      }

      .cp-card-modal__input-label {
        margin-bottom: 8px;
      }

      .cp-card-modal__input-container {
        margin-bottom: 16px;
      }

      .cp-card-modal__inputs {
        display: flex;
        justify-content: space-between;
      }

      .cp-card-modal__input {
        background: hsl(var(--med-color-neutral-3));
        color: hsl(var(--med-color-neutral-9));
        border: none;
        --placeholder-opacity: 1;
      }

      .cp-card-modal__text-area {
        margin-bottom: 46px;
      }

    </style>
    <ion-app>
      <ion-content>
          <!-- component -->
          <div class="cp-card-modal">
            <med-type class="cp-card-modal__titulo-acao" token="h20x">Editar Tarefa</med-type>

            <div class="cp-card-modal__input-container">
              <med-type class="cp-card-modal__input-label" token="p14" ds-color="neutral-9">Título</med-type>
              <ion-input class="cp-card-modal__input" placeholder="Nome da Tarefa"></ion-input>
            </div>

            <div class="cp-card-modal__input-container">
              <med-type class="cp-card-modal__input-label" token="p14" ds-color="neutral-9">Categoria</med-type>
              <ion-select okText="Okay" placeholder="Selecione uma categoria" cancelText="Dismiss">
                <ion-select-option value="categoria-1">Categoria 1</ion-select-option>
                <ion-select-option value="categoria-2">Categoria 2</ion-select-option>
                <ion-select-option value="categoria-3">Categoria 3</ion-select-option>
              </ion-select>
            </div>

            <div class="cp-card-modal__input-container">
              <med-type class="cp-card-modal__input-label" token="p14" ds-color="neutral-9">Data</med-type>
              <ion-input class="cp-card-modal__input" placeholder="10/09/2021"></ion-input>
            </div>

            <div class="cp-card-modal__inputs">
              <div class="cp-card-modal__input-container">
                <med-type class="cp-card-modal__input-label" token="p14" ds-color="neutral-9">Começo</med-type>
                <ion-select okText="Okay" placeholder="Selecione uma categoria" cancelText="Dismiss">
                  <ion-select-option value="categoria-1">Categoria 1</ion-select-option>
                  <ion-select-option value="categoria-2">Categoria 2</ion-select-option>
                  <ion-select-option value="categoria-3">Categoria 3</ion-select-option>
                </ion-select>
              </div>
              <div class="cp-card-modal__input-container">
                <med-type class="cp-card-modal__input-label" token="p14" ds-color="neutral-9">Fim</med-type>
                <ion-select okText="Okay" placeholder="Selecione uma categoria" cancelText="Dismiss">
                  <ion-select-option value="categoria-1">Categoria 1</ion-select-option>
                  <ion-select-option value="categoria-2">Categoria 2</ion-select-option>
                  <ion-select-option value="categoria-3">Categoria 3</ion-select-option>
                </ion-select>
              </div>
            </div>

            <div class="cp-card-modal__input-container">
              <med-type class="cp-card-modal__input-label" token="p14" ds-color="neutral-9">Recorrência</med-type>
              <ion-select okText="Okay" placeholder="Selecione uma opçãp" cancelText="Dismiss">
                <ion-select-option value="categoria-1">Não se repete</ion-select-option>
                <ion-select-option value="categoria-2">Repete</ion-select-option>
                <ion-select-option value="categoria-3">Repete 2</ion-select-option>
              </ion-select>
            </div>

            <div class="cp-card-modal__input-container">
              <med-type class="cp-card-modal__input-label" token="p14" ds-color="neutral-9">Notas</med-type>
              <ion-textarea class="cp-card-modal__input cp-card-modal__text-area" placeholder="Deixe aqui suas notas"></ion-textarea>
            </div>


            <ion-button ds-name="primary" ds-size="sm" expand="block">
              Criar
            </ion-button>
          </div>
          <!-- component -->
      </ion-content>
    </ion-app>
    `;
};

export const ApagarTarefa = Template.bind({});
ApagarTarefa.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/1YvPOL5j7kW9Btmgkh2YzA/MEDSmart?node-id=6430%3A32282',
  },
};
 ApagarTarefa.argTypes = {};

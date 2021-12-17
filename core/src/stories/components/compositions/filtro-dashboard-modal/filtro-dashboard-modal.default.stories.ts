import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Compositions/Filtro Dashboard Modal',
  decorators: [withDesign],
};

const Template = () => {
  return html`
    <ion-app>
      <ion-content>

        <!-- component -->
        <ion-content class="cp-filtro-dashboard-modal__content">

          <div class="cp-filtro-dashboard-modal__header">
            <ion-button ds-name="tertiary">
              <ion-icon class="med-icon" name="med-fechar" slot="icon-only"></ion-icon>
            </ion-button>
          </div>

          <div class="cp-filtro-dashboard-modal__filtro-container">
            <med-type token="h20">Base de alunos considerados</med-type>

            <div class="cp-filtro-dashboard-modal__seletor">
              <ion-button ds-name="tertiary" ds-size="md">
                <ion-icon class="med-icon" name="med-menos-circulo" slot="icon-only"></ion-icon>
              </ion-button>

              <div class="cp-filtro-dashboard-modal__label">
                <med-type token="h20">TOP 5</med-type>
                <med-type token="p12">Alunos</med-type>
              </div>

              <ion-button ds-name="tertiary" ds-size="md">
                <ion-icon class="med-icon" name="med-mais-circulo" slot="icon-only"></ion-icon>
              </ion-button>
            </div>
          </div>

          <div class="cp-filtro-dashboard-modal__concursos-container">
            <med-type token="h20">Concursos</med-type>

            <ion-radio-group>
              <div class="cp-filtro-dashboard-modal__concurso">
                <ion-radio class="cp-filtro-dashboard-modal__radio" slot="start" value="concurso-1"></ion-radio>
                <med-type token="p16">UFRJ</med-type>
              </div>
              <div class="cp-filtro-dashboard-modal__concurso">
                <ion-radio class="cp-filtro-dashboard-modal__radio" slot="start" value="concurso-2"></ion-radio>
                <med-type token="p16">UFRJ</med-type>
              </div>
              <div class="cp-filtro-dashboard-modal__concurso">
                <ion-radio class="cp-filtro-dashboard-modal__radio" slot="start" value="concurso-3"></ion-radio>
                <med-type token="p16">UFRJ</med-type>
              </div>
            </ion-radio-group>
          </div>

        </ion-content>

        <ion-footer class="cp-filtro-dashboard-modal__footer">
          <ion-button ds-color="neutral-4" ds-size="sm">limpar filtro</ion-button>
          <ion-button ds-size="sm">filtrar</ion-button>
        </ion-footer>
        <!-- component -->

      </ion-content>
    </ion-app>
    `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/1YvPOL5j7kW9Btmgkh2YzA/MEDSmart?node-id=6430%3A32282',
  },
};
Default.argTypes = {};

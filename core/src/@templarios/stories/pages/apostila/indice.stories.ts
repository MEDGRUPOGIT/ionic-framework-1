import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Pages/Medsoft/Apostila',
  decorators: [withDesign],
};

const Template = () => {
  return html`
    <ion-app>
      <med-header>
        <med-navbar slot="navbar">
          <ion-back-button slot="left" mode="ios" text="" ds-size="xxs">
            <ion-icon class="med-icon" name="med-esquerda"></ion-icon>
          </ion-back-button>

          <ion-label slot="title" token="p16b">ÍNDICE</ion-label>
          <ion-label slot="subtitle" ds-color="brand" token="p12xb">NEF 1</ion-label>

        </med-navbar>
      </med-header>

      <ion-content class="indice">
        <div class="indice__content">
          <div class="indice__heading">
            <div class="indice__section">
              <div class="indice__dotted"></div>
              <ion-label ds-color="neutral-1" token="p16xb">INTRODUÇÃO À NEFROLOGIA</ion-label>
            </div>

            <div class="indice__heading indice__heading--subheading">
              <div class="indice__section">
                <div class="indice__dotted"></div>
                <ion-label ds-color="neutral-1" token="p16">INTRODUÇÃO ÀS DOENÇAS DOS RINS E VIAS URINÁRIAS</ion-label>
              </div>

              <div class="indice__heading indice__heading--subheading">
                <div class="indice__section">
                  <div class="indice__dotted"></div>
                  <ion-label ds-color="neutral-1" token="p16">CONCEITOS ANATÔMICOS BÁSICOS</ion-label>
                </div>
              </div>
            </div>

            <div class="indice__heading indice__heading--subheading">
              <div class="indice__section">
                <div class="indice__dotted"></div>
                <ion-label ds-color="neutral-1" token="p16">O NÉFRON</ion-label>
              </div>

              <div class="indice__heading indice__heading--subheading">
                <div class="indice__section">
                  <div class="indice__dotted"></div>
                  <ion-label ds-color="neutral-1" token="p16">O CORPÚSCULO DE MALPIGHO</ion-label>
                </div>
                <div class="indice__section">
                  <div class="indice__dotted"></div>
                  <ion-label ds-color="neutral-1" token="p16">O SISTEMA TUBULAR</ion-label>
                </div>
                <div class="indice__section">
                  <div class="indice__dotted"></div>
                  <ion-label ds-color="neutral-1" token="p16">O APARELHO JUSTAGLOMERULAR</ion-label>
                </div>
              </div>
            </div>

            <div class="indice__heading indice__heading--subheading">
              <div class="indice__section">
                <div class="indice__dotted"></div>
                <ion-label ds-color="neutral-1" token="p16">A VASCULARIZAÇÃO RENAL</ion-label>
              </div>
            </div>

            <div class="indice__heading indice__heading--subheading">
              <div class="indice__section">
                <div class="indice__dotted"></div>
                <ion-label ds-color="neutral-1" token="p16">ASPECTOS FISIOLÓGICOS</ion-label>
              </div>

              <div class="indice__heading indice__heading--subheading">
                <div class="indice__section">
                  <div class="indice__dotted"></div>
                  <ion-label ds-color="neutral-1" token="p16">NOS CORPÚSCULOS DE MALPIGHI</ion-label>
                </div>
                <div class="indice__section">
                  <div class="indice__dotted"></div>
                  <ion-label ds-color="neutral-1" token="p16">NOS TÚBULOS CONTORCIDOS PROXIMAIS</ion-label>
                </div>
                <div class="indice__section">
                  <div class="indice__dotted"></div>
                  <ion-label ds-color="neutral-1" token="p16">NA ALÇA DE HENLE</ion-label>
                </div>
                <div class="indice__section">
                  <div class="indice__dotted"></div>
                  <ion-label ds-color="neutral-1" token="p16">NO TÚBULO CONTORCIDOS DISTAL</ion-label>
                </div>
                <div class="indice__section">
                  <div class="indice__dotted"></div>
                  <ion-label ds-color="neutral-1" token="p16">NO TÚBULO COLETOR</ion-label>
                </div>
              </div>
            </div>

            <div class="indice__heading indice__heading--subheading">
              <div class="indice__section">
                <div class="indice__dotted"></div>
                <ion-label ds-color="neutral-1" token="p16">ASPECTOS PATOLÓGICOS</ion-label>
              </div>
            </div>
          </div>


          <div class="indice__heading">
            <div class="indice__section">
              <div class="indice__dotted"></div>
              <ion-label ds-color="neutral-1" token="p16xb">AS DOENÇAS DOS GLOMÉRULOS</ion-label>
            </div>

            <div class="indice__heading indice__heading--subheading">
              <div class="indice__section">
                <div class="indice__dotted"></div>
                <ion-label ds-color="neutral-1" token="p16">INTRODUÇÃO</ion-label>
              </div>
            </div>

            <div class="indice__heading indice__heading--subheading">
              <div class="indice__section">
                <div class="indice__dotted"></div>
                <ion-label ds-color="neutral-1" token="p16">SÍNDROME NEFRÍTICA OU GLOMERULONEFRITE DIFUSA AGUDA (GNDA)</ion-label>
              </div>

              <div class="indice__heading indice__heading--subheading">
                <div class="indice__section">
                  <div class="indice__dotted"></div>
                  <ion-label ds-color="neutral-1" token="p16">GLOMERULONEFRITE AGUDA PÓS-ESTREPTOCÓCICA</ion-label>
                </div>
                <div class="indice__section">
                  <div class="indice__dotted"></div>
                  <ion-label ds-color="neutral-1" token="p16">GLOMERULONEFRITE AGUDA INFECCIOSA, NÃO PÓS-ESTREPTOCÓCICA</ion-label>
                </div>
                <div class="indice__section">
                  <div class="indice__dotted"></div>
                  <ion-label ds-color="neutral-1" token="p16">GLOMERULONEFRITE AGUDA NÃO INFECCIOSA</ion-label>
                </div>
              </div>
            </div>

            <div class="indice__heading indice__heading--subheading">
              <div class="indice__section">
                <div class="indice__dotted"></div>
                <ion-label ds-color="neutral-1" token="p16">GLOMERULONEFRITE RAPIDAMENTE PROGRESSIVA</ion-label>
              </div>
              <div class="indice__heading indice__heading--subheading">
                <div class="indice__section">
                  <div class="indice__dotted"></div>
                  <ion-label ds-color="neutral-1" token="p16">CLASSIFICAÇÃO E ETIOLOGIA DAS GNRP</ion-label>
                </div>
                <div class="indice__section">
                  <div class="indice__dotted"></div>
                  <ion-label ds-color="neutral-1" token="p16">GLOMERULONEFRITE ANTI-MBG E A SÍNDROME DE GOODPASTURE</ion-label>
                </div>
                <div class="indice__section">
                  <div class="indice__dotted"></div>
                  <ion-label ds-color="neutral-1" token="p16">GNRP POR IMUNOCOMPLEXOS</ion-label>
                </div>
                <div class="indice__section">
                  <div class="indice__dotted"></div>
                  <ion-label ds-color="neutral-1" token="p16">GNRP PAUCI-IMUNE (ANCA POSITIVO)</ion-label>
                </div>
              </div>
            </div>

            <div class="indice__heading indice__heading--subheading">
              <div class="indice__section">
                <div class="indice__dotted"></div>
                <ion-label ds-color="neutral-1" token="p16">A SÍNDROME NEFRÓTICA</ion-label>
              </div>

              <div class="indice__heading indice__heading--subheading">
                <div class="indice__section">
                  <div class="indice__dotted"></div>
                  <ion-label ds-color="neutral-1" token="p16">A PROTEINÚRIA</ion-label>
                </div>
                <div class="indice__section">
                  <div class="indice__dotted"></div>
                  <ion-label ds-color="neutral-1" token="p16">A HIPOPROTEINEMIA</ion-label>
                </div>
                <div class="indice__section">
                  <div class="indice__dotted"></div>
                  <ion-label ds-color="neutral-1" token="p16">O EDEMA</ion-label>
                </div>
                <div class="indice__section">
                  <div class="indice__dotted"></div>
                  <ion-label ds-color="neutral-1" token="p16">A HIPERLIPIDEMIA</ion-label>
                </div>
                <div class="indice__section">
                  <div class="indice__dotted"></div>
                  <ion-label ds-color="neutral-1" token="p16">COMPLICAÇÕES DA SÍNDROME NEFRÓTICA</ion-label>
                </div>
              </div>
            </div>
          </div>


          <div class="indice__heading">
            <div class="indice__section">
              <div class="indice__dotted"></div>
              <ion-label ds-color="neutral-1" token="p16xb">ÁREA DE TREINAMENTO</ion-label>
            </div>

            <div class="indice__heading indice__heading--subheading">
              <div class="indice__section">
                <div class="indice__dotted"></div>
                <ion-label ds-color="neutral-1" token="p16">QUESTÕES DA APOSTILA</ion-label>
              </div>
            </div>

            <div class="indice__heading indice__heading--subheading">
              <div class="indice__section">
                <div class="indice__dotted"></div>
                <ion-label ds-color="neutral-1" token="p16">TABELA DE EXAMES</ion-label>
              </div>
            </div>
          </div>
        </div>
      </ion-content>
    </ion-app>
  `;
};

export const Indice = Template.bind({});
Indice.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};

import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Team/Chart bar',
  decorators: [withDesign],
};

const Template = () => {
  return html`
    <style>
      /* !NÃO UTILIZAR! Apenas para estória */
        med-base {
          margin: 0 0 16px 0;
        }
      /* !NÃO UTILIZAR! Apenas para estória */
    </style>

    <ion-app>
      <ion-content>
        <div class="flex-center flex-center--xs flex-center--column">

          <!-- component -->
          <med-base class="cp-chart-bar">

            <div class="cp-chart-bar__top" slot="middle">
              <med-type token="p16b">Acertos</med-type>

              <div class="cp-chart-bar__legenda">
                <div class="cp-chart-bar__label">
                  <div class="cp-chart-bar__legenda-icon cp-chart-bar__legenda-icon--voce"></div>
                  <med-type token="p14b">Você</med-type>
                </div>
              </div>
            </div>

            <div class="cp-chart-bar__bottom med-scrollbar" slot="middle">

              <div class="cp-chart-bar__item">
                <div class="cp-chart-bar__container">
                  <med-chart-bar class="cp-chart-bar__chart" value="0">
                    <med-type class="cp-chart-bar__porcentagem" token="p10b">0%</med-type>
                  </med-chart-bar>
                </div>
                <med-type class="cp-chart-bar__semana" ds-color="neutral-8" token="p12">Sem. 01</med-type>
              </div>

              <div class="cp-chart-bar__item">
                <div class="cp-chart-bar__container">
                  <med-chart-bar class="cp-chart-bar__chart" value="10">
                    <med-type class="cp-chart-bar__porcentagem" token="p10b">10%</med-type>
                  </med-chart-bar>
                </div>
                <med-type class="cp-chart-bar__semana" ds-color="neutral-8" token="p12">Sem. 02</med-type>
              </div>

              <div class="cp-chart-bar__item">
                <div class="cp-chart-bar__container">
                  <med-chart-bar class="cp-chart-bar__chart" value="20">
                    <med-type class="cp-chart-bar__porcentagem" token="p10b">20%</med-type>
                  </med-chart-bar>
                </div>
                <med-type class="cp-chart-bar__semana" ds-color="neutral-8" token="p12">Sem. 03</med-type>
              </div>

              <div class="cp-chart-bar__item">
                <div class="cp-chart-bar__container">
                  <med-chart-bar class="cp-chart-bar__chart" value="30">
                    <med-type class="cp-chart-bar__porcentagem" token="p10b">30%</med-type>
                  </med-chart-bar>
                </div>
                <med-type class="cp-chart-bar__semana" ds-color="neutral-8" token="p12">Sem. 04</med-type>
              </div>

              <div class="cp-chart-bar__item">
                <div class="cp-chart-bar__container">
                  <med-chart-bar class="cp-chart-bar__chart" value="40">
                    <med-type class="cp-chart-bar__porcentagem" token="p10b">40%</med-type>
                  </med-chart-bar>
                </div>
                <med-type class="cp-chart-bar__semana" ds-color="neutral-8" token="p12">Sem. 05</med-type>
              </div>

              <div class="cp-chart-bar__item">
                <div class="cp-chart-bar__container">
                  <med-chart-bar class="cp-chart-bar__chart" value="50">
                    <med-type class="cp-chart-bar__porcentagem" token="p10b">50%</med-type>
                  </med-chart-bar>
                </div>
                <med-type class="cp-chart-bar__semana" ds-color="neutral-8" token="p12">Sem. 06</med-type>
              </div>

              <div class="cp-chart-bar__item">
                <div class="cp-chart-bar__container">
                  <med-chart-bar class="cp-chart-bar__chart" value="60">
                    <med-type class="cp-chart-bar__porcentagem" token="p10b">60%</med-type>
                  </med-chart-bar>
                </div>
                <med-type class="cp-chart-bar__semana" ds-color="neutral-8" token="p12">Sem. 07</med-type>
              </div>

              <div class="cp-chart-bar__item">
                <div class="cp-chart-bar__container">
                  <med-chart-bar class="cp-chart-bar__chart" value="70">
                    <med-type class="cp-chart-bar__porcentagem" token="p10b">70%</med-type>
                  </med-chart-bar>
                </div>
                <med-type class="cp-chart-bar__semana" ds-color="neutral-8" token="p12">Sem. 08</med-type>
              </div>

              <div class="cp-chart-bar__item">
                <div class="cp-chart-bar__container">
                  <med-chart-bar class="cp-chart-bar__chart" value="80">
                    <med-type class="cp-chart-bar__porcentagem" token="p10b">80%</med-type>
                  </med-chart-bar>
                </div>
                <med-type class="cp-chart-bar__semana" ds-color="neutral-8" token="p12">Sem. 09</med-type>
              </div>

              <div class="cp-chart-bar__item">
                <div class="cp-chart-bar__container">
                  <med-chart-bar class="cp-chart-bar__chart" value="90">
                    <med-type class="cp-chart-bar__porcentagem" token="p10b">90%</med-type>
                  </med-chart-bar>
                </div>
                <med-type class="cp-chart-bar__semana" ds-color="neutral-8" token="p12">Sem. 10</med-type>
              </div>

              <div class="cp-chart-bar__item">
                <div class="cp-chart-bar__container">
                  <med-chart-bar class="cp-chart-bar__chart" value="100">
                    <med-type class="cp-chart-bar__porcentagem" token="p10b">100%</med-type>
                  </med-chart-bar>
                </div>
                <med-type class="cp-chart-bar__semana" ds-color="neutral-8" token="p12">Sem. 11</med-type>
              </div>

            </div>

          </med-base>
          <!-- component -->

          <!-- component -->
          <med-base class="cp-chart-bar">

            <div class="cp-chart-bar__top" slot="middle">
              <med-type token="p16b">Acertos</med-type>

              <div class="cp-chart-bar__legenda">
                <div class="cp-chart-bar__label">
                  <div class="cp-chart-bar__legenda-icon cp-chart-bar__legenda-icon--voce"></div>
                  <med-type token="p14b">Você</med-type>
                </div>

                <div class="cp-chart-bar__label">
                  <div class="cp-chart-bar__legenda-icon cp-chart-bar__legenda-icon--concorrencia"></div>
                  <med-type token="p14b">Concorrência</med-type>
                </div>
              </div>
            </div>

            <div class="med-scrollbar cp-chart-bar__bottom" slot="middle">

              <div class="cp-chart-bar__item">
                <div class="cp-chart-bar__container">
                  <med-chart-bar class="cp-chart-bar__chart" value="0">
                    <med-type class="cp-chart-bar__porcentagem" token="p10b">0%</med-type>
                  </med-chart-bar>
                  <med-chart-bar class="cp-chart-bar__chart cp-chart-bar__chart--right" ds-color="neutral-8" value="100">
                    <med-type class="cp-chart-bar__porcentagem" ds-color="neutral-8" token="p10">100%</med-type>
                  </med-chart-bar>
                </div>
                <med-type class="cp-chart-bar__semana" ds-color="neutral-8" token="p12">Sem. 01</med-type>
              </div>

              <div class="cp-chart-bar__item">
                <div class="cp-chart-bar__container">
                  <med-chart-bar class="cp-chart-bar__chart" value="10">
                    <med-type class="cp-chart-bar__porcentagem" token="p10b">10%</med-type>
                  </med-chart-bar>
                  <med-chart-bar class="cp-chart-bar__chart cp-chart-bar__chart--right" ds-color="neutral-8" value="90">
                    <med-type class="cp-chart-bar__porcentagem" ds-color="neutral-8" token="p10">90%</med-type>
                  </med-chart-bar>
                </div>
                <med-type class="cp-chart-bar__semana" ds-color="neutral-8" token="p12">Sem. 02</med-type>
              </div>

              <div class="cp-chart-bar__item">
                <div class="cp-chart-bar__container">
                  <med-chart-bar class="cp-chart-bar__chart" value="20">
                    <med-type class="cp-chart-bar__porcentagem" token="p10b">20%</med-type>
                  </med-chart-bar>
                  <med-chart-bar class="cp-chart-bar__chart cp-chart-bar__chart--right" ds-color="neutral-8" value="80">
                    <med-type class="cp-chart-bar__porcentagem" ds-color="neutral-8" token="p10">80%</med-type>
                  </med-chart-bar>
                </div>
                <med-type class="cp-chart-bar__semana" ds-color="neutral-8" token="p12">Sem. 03</med-type>
              </div>

              <div class="cp-chart-bar__item">
                <div class="cp-chart-bar__container">
                  <med-chart-bar class="cp-chart-bar__chart" value="30">
                    <med-type class="cp-chart-bar__porcentagem" token="p10b">30%</med-type>
                  </med-chart-bar>
                  <med-chart-bar class="cp-chart-bar__chart cp-chart-bar__chart--right" ds-color="neutral-8" value="70">
                    <med-type class="cp-chart-bar__porcentagem" ds-color="neutral-8" token="p10">70%</med-type>
                  </med-chart-bar>
                </div>
                <med-type class="cp-chart-bar__semana" ds-color="neutral-8" token="p12">Sem. 04</med-type>
              </div>

              <div class="cp-chart-bar__item">
                <div class="cp-chart-bar__container">
                  <med-chart-bar class="cp-chart-bar__chart" value="40">
                    <med-type class="cp-chart-bar__porcentagem" token="p10b">40%</med-type>
                  </med-chart-bar>
                  <med-chart-bar class="cp-chart-bar__chart cp-chart-bar__chart--right" ds-color="neutral-8" value="60">
                    <med-type class="cp-chart-bar__porcentagem" ds-color="neutral-8" token="p10">60%</med-type>
                  </med-chart-bar>
                </div>
                <med-type class="cp-chart-bar__semana" ds-color="neutral-8" token="p12">Sem. 05</med-type>
              </div>

              <div class="cp-chart-bar__item">
                <div class="cp-chart-bar__container">
                  <med-chart-bar class="cp-chart-bar__chart" value="50">
                    <med-type class="cp-chart-bar__porcentagem" token="p10b">50%</med-type>
                  </med-chart-bar>
                  <med-chart-bar class="cp-chart-bar__chart cp-chart-bar__chart--right" ds-color="neutral-8" value="50">
                    <med-type class="cp-chart-bar__porcentagem" ds-color="neutral-8" token="p10">50%</med-type>
                  </med-chart-bar>
                </div>
                <med-type class="cp-chart-bar__semana" ds-color="neutral-8" token="p12">Sem. 06</med-type>
              </div>

              <div class="cp-chart-bar__item">
                <div class="cp-chart-bar__container">
                  <med-chart-bar class="cp-chart-bar__chart" value="60">
                    <med-type class="cp-chart-bar__porcentagem" token="p10b">60%</med-type>
                  </med-chart-bar>
                  <med-chart-bar class="cp-chart-bar__chart cp-chart-bar__chart--right" ds-color="neutral-8" value="40">
                    <med-type class="cp-chart-bar__porcentagem" ds-color="neutral-8" token="p10">40%</med-type>
                  </med-chart-bar>
                </div>
                <med-type class="cp-chart-bar__semana" ds-color="neutral-8" token="p12">Sem. 07</med-type>
              </div>

              <div class="cp-chart-bar__item">
                <div class="cp-chart-bar__container">
                  <med-chart-bar class="cp-chart-bar__chart" value="70">
                    <med-type class="cp-chart-bar__porcentagem" token="p10b">70%</med-type>
                  </med-chart-bar>
                  <med-chart-bar class="cp-chart-bar__chart cp-chart-bar__chart--right" ds-color="neutral-8" value="30">
                    <med-type class="cp-chart-bar__porcentagem" ds-color="neutral-8" token="p10">30%</med-type>
                  </med-chart-bar>
                </div>
                <med-type class="cp-chart-bar__semana" ds-color="neutral-8" token="p12">Sem. 08</med-type>
              </div>

              <div class="cp-chart-bar__item">
                <div class="cp-chart-bar__container">
                  <med-chart-bar class="cp-chart-bar__chart" value="80">
                    <med-type class="cp-chart-bar__porcentagem" token="p10b">80%</med-type>
                  </med-chart-bar>
                  <med-chart-bar class="cp-chart-bar__chart cp-chart-bar__chart--right" ds-color="neutral-8" value="20">
                    <med-type class="cp-chart-bar__porcentagem" ds-color="neutral-8" token="p10">20%</med-type>
                  </med-chart-bar>
                </div>
                <med-type class="cp-chart-bar__semana" ds-color="neutral-8" token="p12">Sem. 09</med-type>
              </div>

              <div class="cp-chart-bar__item">
                <div class="cp-chart-bar__container">
                  <med-chart-bar class="cp-chart-bar__chart" value="90">
                    <med-type class="cp-chart-bar__porcentagem" token="p10b">90%</med-type>
                  </med-chart-bar>
                  <med-chart-bar class="cp-chart-bar__chart cp-chart-bar__chart--right" ds-color="neutral-8" value="10">
                    <med-type class="cp-chart-bar__porcentagem" ds-color="neutral-8" token="p10">10%</med-type>
                  </med-chart-bar>
                </div>
                <med-type class="cp-chart-bar__semana" ds-color="neutral-8" token="p12">Sem. 10</med-type>
              </div>

              <div class="cp-chart-bar__item">
                <div class="cp-chart-bar__container">
                  <med-chart-bar class="cp-chart-bar__chart" value="100">
                    <med-type class="cp-chart-bar__porcentagem" token="p10b">100%</med-type>
                  </med-chart-bar>
                  <med-chart-bar class="cp-chart-bar__chart cp-chart-bar__chart--right" ds-color="neutral-8" value="0">
                    <med-type class="cp-chart-bar__porcentagem" ds-color="neutral-8" token="p10">0%</med-type>
                  </med-chart-bar>
                </div>
                <med-type class="cp-chart-bar__semana" ds-color="neutral-8" token="p12">Sem. 11</med-type>
              </div>

            </div>

          </med-base>
          <!-- component -->

        </div>
      </ion-content>
    </ion-app>
  `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/1YvPOL5j7kW9Btmgkh2YzA/MEDSmart?node-id=6430%3A32140',
  },
};
Default.argTypes = {};

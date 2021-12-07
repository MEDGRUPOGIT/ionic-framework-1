import { html } from "lit-html";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "Components/Composições/Chart bar",
  decorators: [withDesign],
};

const Template = () => {
  return html`
    <style>
      .cp-chart-bar {
        flex-direction: column;
      }

      .cp-chart-bar__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 16px
      }

      .cp-chart-bar__legenda {
        display: flex;
        align-items: center;
        padding-left: 16px;
      }

      .cp-chart-bar__label {
        display: flex;
        align-items: center;
      }

      .cp-chart-bar__label:not(:last-of-type) {
        padding-right: 16px;
      }

      .cp-chart-bar__legenda-icon {
        width: 6px;
        height: 6px;
        border-radius: 1px;
        margin-right: 6px;
        background: hsl(var(--med-color-neutral-10));
      }

      .cp-chart-bar__legenda-icon--voce {
        background: hsl(var(--med-color-brand-4));
      }

      .cp-chart-bar__legenda-icon--concorrencia {
        background: hsl(var(--med-color-neutral-8));
      }
    </style>

    <ion-app>
      <ion-content>
        <div class="flex-center">

          <!-- component -->
          <med-base class="cp-chart-bar">

            <div class="cp-chart-bar__top" slot="middle">
              <med-type token="p16b">Acertos</med-type>

              <div class="cp-chart-bar__legenda">
                <div class="cp-chart-bar__label">
                  <div class="cp-chart-bar__legenda-icon cp-chart-bar__legenda-icon--voce"></div>
                  <med-type token="p16b">Você</med-type>
                </div>

                <div class="cp-chart-bar__label">
                  <div class="cp-chart-bar__legenda-icon cp-chart-bar__legenda-icon--concorrencia"></div>
                  <med-type token="p16b">Concorrência</med-type>
                </div>
              </div>
            </div>

            <div class="med-scrollbar" slot="middle">
              <div class="med-pre">
                <med-chart-bar></med-chart-bar>
                <med-chart-bar></med-chart-bar>
                <med-chart-bar></med-chart-bar>
                <med-chart-bar></med-chart-bar>
                <med-chart-bar></med-chart-bar>
                <med-chart-bar></med-chart-bar>
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

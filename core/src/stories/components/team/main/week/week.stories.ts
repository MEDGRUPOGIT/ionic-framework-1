import { html } from "lit-html";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "Components/Team/Main/Week",
  decorators: [withDesign],
};

const Template = () => {
  return html`
    <style>
      .content {
        --background: hsl(var(--med-color-neutral-3));
      }
      .week {
        background: hsl(var(--med-color-neutral-1));
        padding: 8px;
        border-radius: 8px 31px 31px 8px;
      }

      .week__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .week__left {
        display: flex;
        flex-direction: column;
        align-items: start;
        margin-right: 20px;
      }

      .week__right {
        display: flex;
      }

      .week__semana {
        height: 10px;
        line-height: 10px;
      }

      .week__numero {
        --font-weight: 700;
        height: 16px;
        line-height: 16px;
        margin-top: 2px;
        margin-bottom: 4px;
      }

      .week__flip-btn {
      }

      .week__piechart:first-child {
        margin-right: 8px;
      }
    </style>
    <ion-app>
      <ion-content class="content">
        <div class="flex-center">
          <!-- component -->
          <div class="week">
            <div class="week__container">
              <div class="week__left">
                <med-caption class="week__semana" ds-size="xxs">
                  <label>Semana</label>
                </med-caption>
                <med-caption class="week__numero" ds-size="md">
                  <label>06</label>
                </med-caption>
                <ion-button
                  ds-size="xxxs"
                  ds-name="tertiary"
                  class="week__flip-btn"
                >
                  <ion-icon
                    slot="icon-only"
                    class="med-icon"
                    name="med-mais-circulo"
                  >
                  </ion-icon>
                </ion-button>
              </div>
              <div class="week__right">
                <med-piechart class="week__piechart"></med-piechart>
                <med-piechart class="week__piechart"></med-piechart>
              </div>
            </div>
          </div>
          <!-- component -->
        </div>
      </ion-content>
    </ion-app>
  `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};
Default.argTypes = {};

import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColor } from "../../../constants";

export default {
  title: 'Components/Core/Chart Bar Horizontal',
};

const Template = ({ dsColor, value }) => {
  return html`
    <ion-app>
      <ion-content>
        <ion-grid>
          <ion-row>
            <ion-col>
              <!-- component -->
              <med-chart-bar-horizontal .dsColor=${dsColor} value=${value}></med-chart-bar-horizontal>
              <!-- component -->
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    </ion-app>
  `;
};

export const Overview = Template.bind({});
Overview.argTypes = {
  dsColor: {
    options: MedColor,
    control: { type: "select" },
    description: "Define a cor do componente.",
    table: {
      type: { summary: "MedColor" },
      defaultValue: { summary: "undefined" },
    },
  },
  value: {
    defaultValue: '50',
    control: { type: 'range', min: 0, max: 100, step: 1 },
    description: 'Define a porcentagem a ser mostrada.'
  },
};

import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Core/Select',
  decorators: [withDesign],
};

const Template = () => {
  return html`
    <style>
      /* !NÃO UTILIZAR! Apenas para estória */
        .middle {
          padding: 0 16px;
        }
      /* !NÃO UTILIZAR! Apenas para estória */
    </style>

    <ion-app>
      <ion-content>
        <ion-grid>
          <ion-row>
            <ion-col>

              <!-- component -->
              <med-input>
                <med-type tag="label" token="p14" slot="label">Digite o título:</med-type>
                <ion-select placeholder="Select One">
                  <ion-select-option value="f">Female</ion-select-option>
                  <ion-select-option value="m">Male</ion-select-option>
                </ion-select>
              </med-input>
              <!-- component -->

            </ion-col>
          </ion-row>
        </ion-grid>
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

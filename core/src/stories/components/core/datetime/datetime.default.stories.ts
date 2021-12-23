import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';


export default {
  title: 'Components/Core/Date Time',
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
                <med-type tag="label" token="p14" slot="label">Data de Início</med-type>
                <ion-datetime
                  mode="ios"
                  [pickerOptions]="medDateTime"
                  placeholder="22/12/2021"
                  displayFormat="DD/MM/YYYY"
                  pickerFormat="DD MMMM YYYY"
                  monthShortNames='jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez'
                  monthNames='janeiro, fevereiro, março, abril, maio, junho, julho, agosto, setembro, outubro, novembro, dezembro'
                  cancelText="Cancelar"
                  doneText="Selecionar"
                  slot="input">
                </ion-datetime>
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

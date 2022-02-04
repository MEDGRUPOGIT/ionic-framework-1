import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from "../../../../../global/templarios/color.enum";

export default {
  title: 'Pages/Medsoft Pro/Desktop/Aulas',
  decorators: [withDesign],
};

const Template = ({ dsColor }) => {
  return html`
    <style>
      .desktop {
        display: flex;
      }

      .wrapper-right {
        width: 100%;
        height: 100vh;
      }

      .col-left {
        margin: 24px;
      }

      .week-date__container {
        margin: 16px 0;
        display: flex;
        align-items: center;
      }

      .week {
        margin-right: 16px;
      }

      .chart:last-child {
        margin-top: 16px;
        margin-bottom 24px;
      }
    </style>

    <ion-app>
      <div class="desktop">

        <div class="wrapper-left">

          <med-nav .dsColor=${dsColor}>
            <med-nav-item .dsColor=${dsColor} icon="med-play" text="Aulas" active></med-nav-item>
            <med-nav-item .dsColor=${dsColor} icon="med-apostila" text="Materiais"></med-nav-item>
            <med-nav-item .dsColor=${dsColor} icon="med-concursos" text="Questões"></med-nav-item>

            <med-nav-accordion></med-nav-accordion>
          </med-nav>

        </div>

        <div class="wrapper-right">
          <ion-content>
            <div class="col-left">
              <div class="week-date__container">
                <med-type class="week" token="h20x">Semana 10</med-type>
                <med-type class="date" token="p16" ds-color="neutral-7">De 02/01 até 08/01</med-type>
              </div>
              <div class="week-chart__container">
                <med-semana class="chart" .dsColor=${dsColor}></med-semana>
                <med-semana class="chart" .dsColor=${dsColor}></med-semana>
              </div>

              <div class="week-date__container">
                <med-type class="week" token="h20x">Semana 10</med-type>
                <med-type class="date" token="p16" ds-color="neutral-7">De 02/01 até 08/01</med-type>
              </div>
              <div class="week-chart__container">
                <med-semana class="chart" active .dsColor=${dsColor}></med-semana>
                <med-semana class="chart" active .dsColor=${dsColor}></med-semana>
              </div>

              <div class="week-date__container">
                <med-type class="week" token="h20x">Semana 10</med-type>
                <med-type class="date" token="p16" ds-color="neutral-7">De 02/01 até 08/01</med-type>
              </div>
              <div class="week-chart__container">
                <med-semana class="chart" .dsColor=${dsColor}></med-semana>
                <med-semana class="chart" .dsColor=${dsColor}></med-semana>
              </div>

              <div class="week-date__container">
                <med-type class="week" token="h20x">Semana 10</med-type>
                <med-type class="date" token="p16" ds-color="neutral-7">De 02/01 até 08/01</med-type>
              </div>
              <div class="week-chart__container">
                <med-semana class="chart" .dsColor=${dsColor}></med-semana>
                <med-semana class="chart" .dsColor=${dsColor}></med-semana>
              </div>
            </div>

            <div class="col-right">
            </div>
          </ion-content>
        </div>
      </div>
    </ion-app>
  `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};
Default.argTypes = {
  dsColor: {
    options: Object.values(MedColors),
    control: { type: 'select'},
    description: "Define a cor do componente.",
    table: {
      type:  { summary: Object.values(MedColors).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
};

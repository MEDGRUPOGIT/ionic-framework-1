import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from "../../../../global/templarios/color.enum";

export default {
  title: 'Components/Compositions/Menu Desktop',
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
    </style>

    <ion-app>
      <div class="desktop">

        <div class="wrapper-left">
          <!-- component -->
          <med-nav .dsColor=${dsColor}>
            <med-nav-item .dsColor=${dsColor} icon="med-play" text="Aulas" active></med-nav-item>
            <med-nav-item .dsColor=${dsColor} icon="med-apostila" text="Materiais"></med-nav-item>
            <med-nav-item .dsColor=${dsColor} icon="med-concursos" text="Questões"></med-nav-item>

            <med-nav-accordion .dsColor=${dsColor}></med-nav-accordion>
          </med-nav>
          <!-- component -->
        </div>

        <div class="wrapper-right">
          <ion-content>
            <ion-grid>
              <ion-row>
                <ion-col>
                  <med-type>TESTE</med-type>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-content>
        </div>
      </div>
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
}

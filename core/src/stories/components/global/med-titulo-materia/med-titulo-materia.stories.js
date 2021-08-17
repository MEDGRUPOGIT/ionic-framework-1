import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Core/Titulo Materia',
  decorators: [withDesign],
};

const TemplateDefault = ({ titulo, descricao }) => {
  return html`
    <ion-app class="storybook-only">
      <div class="storybook-only__container" style="text-align: left;">

        <!-- component -->
          <med-titulo-materia .titulo=${titulo} .descricao=${descricao} >

            <ion-icon slot="end" class="med-icon" name="med-arrow-left-circle">ion-button</ion-icon>
          </med-titulo-materia>
        <!-- component -->

      </div>
    </ion-app>
  `
}

export const TituloMateria = TemplateDefault.bind({});
TituloMateria.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QaJANG4TVrskupANopYUPL/Aulas?node-id=9%3A4201',
  },
}
TituloMateria.argTypes = {
  titulo: {
    control: { type: 'text' },
    description: "Define numero de votos regulares",
    defaultValue: 'CAR 1',
    table: {
      type:  { summary: 'string' },
      defaultValue: { summary: 'undefined' },
    },
  },
  descricao: {
    control: { type: 'text' },
    description: "Define numero de votos regulares",
    defaultValue: 'Arritimias Cardíacas, Morte Súbita',
    table: {
      type:  { summary: 'string' },
      defaultValue: { summary: 'undefined' },
    },
  },
};

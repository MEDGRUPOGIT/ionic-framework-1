import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Compositions/@OK Task/Add Card (New Task)',
  decorators: [withDesign],
};

const Template = ({ titulo, iconName }) => {
  return html`
    <ion-app>
      <ion-content>
        <div class="full-height-flex">

          <!-- component markdown-->
          <med-add-card titulo=${titulo} icon-name=${iconName}></med-add-card>
          <!-- component markdown-->

        </div>
      </ion-content>
    </ion-app>
  `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=12595%3A44049',
  },
};
Default.argTypes = {
  titulo: {
    description: "Define o titulo.",
    control: { type: 'text' },
    defaultValue: 'Adicionar tarefa',
  },
  iconName: {
    description: "Define o icone.",
    control: { type: 'text' },
    defaultValue: 'med-mais-circulo',
  },
};

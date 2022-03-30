import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { modalController } from '../../../../../dist/ionic/index.esm.js';

export default {
  title: "Components/Core/@OK Dialog",
  decorators: [withDesign],
};

const tpDialog = async () => {
  modalController.create({
    component: 'dialog-test',
    cssClass: 'tp-dialog',
  }).then((modal)=>{
    modal.present()
  });
}

const Template = () => {
  return html`
    <ion-app>
      <ion-content>
        <div class="full-height-flex">

          <ion-button @click="${tpDialog}">Abrir Dialog</ion-button>

        </div>
      </ion-content>
    </ion-app>
    `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=12138%3A43556',
  },
};

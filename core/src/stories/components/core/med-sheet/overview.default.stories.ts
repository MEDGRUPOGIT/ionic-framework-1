import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { modalController } from "../../../../../dist/ionic/index.esm.js";
import { modalEnterAnimationSheetDesktop, modalLeaveAnimationSheetDesktop } from "../../../../components/@medgrupo/core/med-sheet/sheet-animation";

export default {
  title: 'Components/Core/Sheet',
  decorators: [withDesign],
};

const createPopoverMobile = async () => {
  const modal = await modalController.create({
    component: 'med-sheet',
    cssClass: 'tp-sheet',
    mode: 'ios'
  });

  await modal.present();
}

const createPopoverDesktop = async () => {
  const modal = await modalController.create({
    component: 'med-sheet',
    cssClass: 'tp-sheet',
    mode: 'ios',
    enterAnimation: modalEnterAnimationSheetDesktop,
    leaveAnimation: modalLeaveAnimationSheetDesktop
  });

  await modal.present();
}

const Template = () => {
  return html`
    <style>
      .full-height-center {
        display: flex;
        align-items: center;
        height: 100vh;
      }
    </style>
    <ion-app>
      <ion-content>
        <div class="full-height-center">
          <ion-grid>
            <ion-row>
              <ion-col class="ion-text-center ion-margin-bottom">
                <ion-button ds-name="primary" @click="${() => createPopoverMobile()}">Abrir sheet mobile</ion-button>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col class="ion-text-center">
                <ion-button ds-name="primary" @click="${() => createPopoverDesktop()}">Abrir sheet desktop</ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
        </div>
      </ion-content>
    </ion-app>
  `
}

export const Overview = Template.bind({});
Overview.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=9937%3A64610',
  },
  actions: {
    handles: ['medClick'],
  },
}

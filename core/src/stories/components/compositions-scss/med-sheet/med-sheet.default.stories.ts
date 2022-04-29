import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { modalController } from "../../../../../dist/ionic/index.esm.js";
import { modalEnterAnimationSheetDesktop, modalLeaveAnimationSheetDesktop } from "../../../assets/sheet-animation";

export default {
  title: 'Components/Compositions-scss/Sheet',
  decorators: [withDesign],
};

const createSheetMobile = async () => {
  const modal = await modalController.create({
    component: 'sheet-test',
    cssClass: 'tp-sheet',
    mode: 'ios'
  });

  await modal.present();
}

const createSheetDesktop = async () => {
  const modal = await modalController.create({
    component: 'sheet-test',
    cssClass: 'tp-sheet',
    mode: 'ios',
    enterAnimation: modalEnterAnimationSheetDesktop,
    leaveAnimation: modalLeaveAnimationSheetDesktop
  });

  await modal.present();
}

const createSheetContentMobile = async () => {
  const modal = await modalController.create({
    component: 'sheet-content-test',
    cssClass: 'tp-sheet tp-sheet--ion-content',
    mode: 'ios'
  });

  await modal.present();
}

const createSheetContentDesktop = async () => {
  const modal = await modalController.create({
    component: 'sheet-content-test',
    cssClass: 'tp-sheet tp-sheet--ion-content',
    mode: 'ios',
    enterAnimation: modalEnterAnimationSheetDesktop,
    leaveAnimation: modalLeaveAnimationSheetDesktop
  });

  await modal.present();
}

const Template = () => {
  return html`
    <ion-app>
      <ion-content>
        <div class="full-height-center">

          <div class="ion-padding">
            <ion-button ds-name="primary" @click="${() => createSheetMobile()}">sheet mobile</ion-button>
          </div>
          <div class="ion-padding">
            <ion-button ds-name="primary" @click="${() => createSheetDesktop()}">sheet desktop</ion-button>
          </div>
          <div class="ion-padding">
            <ion-button ds-name="primary" @click="${() => createSheetContentMobile()}">sheet content mobile</ion-button>
          </div>
          <div class="ion-padding">
            <ion-button ds-name="primary" @click="${() => createSheetContentDesktop()}">sheet content desktop</ion-button>
          </div>

        </div>
      </ion-content>
    </ion-app>
  `
}

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=9937%3A64610',
  },
  actions: {
    handles: ['medClick'],
  },
}

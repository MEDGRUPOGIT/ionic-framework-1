import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Compositions/Tabs',
  decorators: [withDesign],
};

const Template = () => {
  return html`
    <ion-app>
      <ion-content>
        <div class="flex-center flex-center--xs">

          <!-- component -->
          <div class="cp-tabs med-scrollbar">

            <med-base class="cp-tab cp-tabs__tab cp-tab--active" ds-color="1">
              <div class="cp-tab__top" slot="middle">
                <med-type class="cp-tab__title" token="p16b">PED</med-type>

                <div class="cp-tab__icon-background cp-tab__icon-background--positivo">
                  <ion-icon class="med-icon cp-tab__icon" name="med-setacima"></ion-icon>
                </div>
              </div>

              <med-type class="cp-tab__porcentagem" slot="middle" token="h20">50%</med-type>
            </med-base>

            <med-base class="cp-tab cp-tabs__tab" ds-color="1">
              <div class="cp-tab__top" slot="middle">
                <med-type class="cp-tab__title" token="p16b">PED</med-type>

                <div class="cp-tab__icon-background cp-tab__icon-background--negativo">
                  <ion-icon class="med-icon cp-tab__icon" name="med-setacima"></ion-icon>
                </div>
              </div>

              <med-type class="cp-tab__porcentagem" slot="middle" token="h20">50%</med-type>
            </med-base>

            <med-base class="cp-tab cp-tabs__tab" ds-color="1">
              <div class="cp-tab__top" slot="middle">
                <med-type class="cp-tab__title" token="p16b">PED</med-type>

                <div class="cp-tab__icon-background cp-tab__icon-background--positivo">
                  <ion-icon class="med-icon cp-tab__icon" name="med-setacima"></ion-icon>
                </div>
              </div>

              <med-type class="cp-tab__porcentagem" slot="middle" token="h20">50%</med-type>
            </med-base>

            <med-base class="cp-tab cp-tabs__tab" ds-color="1">
              <div class="cp-tab__top" slot="middle">
                <med-type class="cp-tab__title" token="p16b">PED</med-type>

                <div class="cp-tab__icon-background cp-tab__icon-background--negativo">
                  <ion-icon class="med-icon cp-tab__icon" name="med-setacima"></ion-icon>
                </div>
              </div>

              <med-type class="cp-tab__porcentagem" slot="middle" token="h20">50%</med-type>
            </med-base>

            <med-base class="cp-tab cp-tabs__tab" ds-color="1">
              <div class="cp-tab__top" slot="middle">
                <med-type class="cp-tab__title" token="p16b">PED</med-type>

                <div class="cp-tab__icon-background cp-tab__icon-background--positivo">
                  <ion-icon class="med-icon cp-tab__icon" name="med-setacima"></ion-icon>
                </div>
              </div>

              <med-type class="cp-tab__porcentagem" slot="middle" token="h20">50%</med-type>
            </med-base>

            <med-base class="cp-tab cp-tabs__tab" ds-color="1">
              <div class="cp-tab__top" slot="middle">
                <med-type class="cp-tab__title" token="p16b">PED</med-type>

                <div class="cp-tab__icon-background cp-tab__icon-background--negativo">
                  <ion-icon class="med-icon cp-tab__icon" name="med-setacima"></ion-icon>
                </div>
              </div>

              <med-type class="cp-tab__porcentagem" slot="middle" token="h20">50%</med-type>
            </med-base>

          </div>
          <!-- component -->

        </div>
      </ion-content>
    </ion-app>
    `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/1YvPOL5j7kW9Btmgkh2YzA/MEDSmart?node-id=6430%3A32204',
  },
};
Default.argTypes = {};

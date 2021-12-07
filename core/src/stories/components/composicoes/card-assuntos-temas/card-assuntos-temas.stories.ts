import { html } from "lit-html";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "Components/Composições/Card Assuntos Temas",
  decorators: [withDesign],
};

const Template = () => {
  return html`
    <ion-app>
      <ion-content>

        <!-- component -->
        <med-base class="cp-card-assuntos-temas">
          <div class="cp-card-assuntos-temas__column" slot="start">
            <div class="cp-card-assuntos-temas__icon-background cp-card-assuntos-temas__icon-background--positivo">
              <ion-icon class="med-icon cp-card-assuntos-temas__icon" name="med-setacima"></ion-icon>
            </div>
          </div>

          <div class="cp-card-assuntos-temas__column" slot="middle">
            <med-type token="p16b">Distúrbio do equilíbrio eletrolítico e acido básico do equilíbrio</h3></med-type>
          </div>

          <div class="cp-card-assuntos-temas__column" slot="end">
            <med-type token="p16b">81%</med-type>
          </div>
        </med-base>
        <!-- component -->

      </ion-content>
    </ion-app>
    `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/1YvPOL5j7kW9Btmgkh2YzA/MEDSmart?node-id=6430%3A32263',
  },
};
Default.argTypes = {};

import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Core/Nav Item',
  decorators: [withDesign],
};

const Template = ({ active }) => {
  return html`
    <ion-app>
      <ion-content>
        <ion-grid>
          <ion-row>
            <ion-col>

              <!-- component -->
              <med-nav-item text="Aulas" icon="med-duvidas" ?active=${active}></med-nav-item>
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
Default.argTypes = {
  active: {
    active: false,
    control: { type: "boolean" },
    description: "Define o estado do componente.",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "undefined" },
    },
  },
}

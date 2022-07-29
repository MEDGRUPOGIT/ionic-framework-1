import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: "Components/Compositions/Autocomplete",
  decorators: [withDesign],
};

const Template = ({ dsName }) => {
  return html`
    <ion-app>
      <ion-content>
        <div class="ion-padding">

          <!-- component markdown -->
          <med-autocomplete ds-name=${dsName}>
            <med-dropdown ds-name=${dsName}>
              <med-item>
                <med-type token="p14">Lorem ipsum Dolor</med-type>
              </med-item>
              <med-item>
                <med-type token="p14">Lorem ipsum Dolor</med-type>
              </med-item>
              <med-item>
                <med-type token="p14">Lorem ipsum Dolor</med-type>
              </med-item>
            </med-dropdown>
            <ion-searchbar ds-name=${dsName} no-icon mode="ios" placeholder="Placeholder"></ion-searchbar>
          </med-autocomplete>
          <!-- component markdown -->

        </div>
      </ion-content>
    </ion-app>
  `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=12393%3A47877',
  },
};
Default.argTypes = {
  dsName: {
    options: [undefined, 'secondary'],
    control: { type: 'radio'},
    description: "Define a variação do componente.",
    table: {
      type:  { summary: 'secondary' },
      defaultValue: { summary: 'undefined' },
    },
  },
};

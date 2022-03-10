import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Team/Tabs',
  decorators: [withDesign],
};

const Template = () => {
  return html`
    <style>
    .med-scrollbar {
      --style: 0;
      --width: 0;
      --height: 0;
    }
    </style>

    <ion-app>
      <ion-content>
        <med-tabs class="med-scrollbar">
          <med-tab-button active>
            Aulas
          </med-tab-button>
          <med-tab-button>
            Material
          </med-tab-button>
          <med-tab-button>
            Questões
          </med-tab-button>
          <med-tab-button>
            Revalida
          </med-tab-button>
          <med-tab-button>
            Smart
          </med-tab-button>
        </med-tabs>
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

};

import { html } from "lit-html";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "Components/Team/Dashboard/Filtro Dashboard",
  decorators: [withDesign],
};

const Template = () => {
  return html`
    <ion-app>
      <ion-content>
          <!-- component -->
            <filtro-dashboard></filtro-dashboard>
          <!-- component -->
      </ion-content>
    </ion-app>
    `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};
Default.argTypes = {};

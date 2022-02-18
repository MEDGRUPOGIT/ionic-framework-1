import { html } from "lit-html";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "Components/Compositions/Dashboard/Filtro",
  decorators: [withDesign],
};

const Template = () => {
  return html`
    <style>
      .dashboard-filtro {
        align-items: center;
        justify-content: space-between;
      }

      .dashboard-filtro__icon {
        stroke: hsl(var(--med-color-neutral-8));
      }
    </style>

    <ion-app>
      <ion-content>
        <!-- component -->
        <med-base class="dashboard-filtro" ds-color="neutral-2" spacing-v="s16" spacing-h="s16" radius="s08">
          <div slot="start">
            <med-heading ds-size="xs" ds-color="neutral-10">
              <h3>Personalize seu dashboard</h3>
            </med-heading>
          </div>
          <div slot="end">
            <ion-button ds-name="tertiary">
              <ion-icon slot="icon-only" class="med-icon dashboard-filtro__icon" name="med-filtro"></ion-icon>
            </ion-button>
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
    type: "figma",
    url: "",
  },
};
Default.argTypes = {};

import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Core/Accordion Item',
  decorators: [withDesign],
};

const Template = ({noBorder, icon}) => {
  return html`
    <style>
      h4 {
        text-align: left;
        margin: 0;
        color: var(--med-color-neutral-10);
      }

      p {
        text-align: left;
        margin: 0;
        color: var(--med-color-neutral-10);
      }

      .med-accordion__content {
        padding: var(--med-spacing-inset-sm);
        padding-top: 0;
      }

      .med-context-menu__list {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .med-context-menu__item {
        padding-right: var(--med-spacing-inline-xs);
        margin-bottom: var(--med-spacing-stack-base);
        font-size: var(--med-font-size-xs);
        line-height: var(--med-line-height-compressed);
        color: var(--med-color-neutral-3);
        display: flex;
        align-items: center;
        transition: color 300ms ease-out;
        cursor: pointer;
      }

      .med-context-menu__item:hover {
        color: var(--med-color-neutral-1);
      }

      .med-context-menu__icon {
        padding-right: var(--med-spacing-inline-xxxs);
        stroke: var(--med-color-neutral-3);
      }

      .med-context-menu__info {
        padding: 0;
        margin: 0;
        font-size: var(--med-font-size-xs);
        line-height: var(--med-line-height-compressed);
        color: var(--med-color-neutral-5);
        padding: var(--med-spacing-inset-xs);
        text-align: center;
      }
    </style>

    <ion-app style="height: auto;">
      <ion-content class="storybook-only__container">

        <!-- component -->
        <med-accordion-list single-open="false">

          <med-accordion-item .icon=${icon} ?no-border=${noBorder}>
            <div slot="header">
              <h4>Header 1</h4>
            </div>
            <div slot="content" class="med-accordion__content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nisi quos saepe similique eius illum voluptatibus unde cupiditate sit fuga ea, neque in odit, iste non delectus! Mollitia, ipsam natus delectus maiores veniam quaerat iusto dignissimos beatae cum corporis eaque quod nostrum inventore possimus voluptates dolore velit, praesentium minus adipisci ad enim nihil impedit in rerum. Aut, distinctio velit ab quis iusto dolorum voluptatum reiciendis neque repellendus culpa quo exercitationem corrupti molestiae maxime ut ratione optio. Commodi, vitae obcaecati ullam quis minus consequuntur tempora eum corporis doloribus mollitia voluptatem. Necessitatibus dolor vitae id quia facilis tempore explicabo aliquam quisquam dolores.</p>
            </div>
          </med-accordion-item>
        </med-accordion-list>
        <!-- component -->

      </ion-content>
    </ion-app>
  `
}

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=2802%3A8897',
  },
}
Default.argTypes = {
  icon: {
    options: [undefined, 'left', 'right'],
    control: { type: 'radio'},
    description: "Define a posição do ícone.",
    defaultValue: undefined,
    table: {
      type:  { summary: 'left | right' },
      defaultValue: { summary: 'undefined' },
    },
  },
  noBorder: {
    control: { type: 'boolean' },
    description: 'Define a variação da borda do componente.',
    defaultValue: true,
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'true' },
    },
  },
};

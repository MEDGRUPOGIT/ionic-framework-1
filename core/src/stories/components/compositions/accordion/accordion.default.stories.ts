import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from "../../../../global/templarios/color.enum";

export default {
  title: 'Components/Compositions/Accordion',
  decorators: [withDesign],
};

const Template = (
    {dsColor,
      margin,
      singleOpen,
      noBorder,
      noAnimation,
      icon,
      background,
      canCollapse,
      isOpened,
      slotsToggle
  }) => {
  return html`
    <style>
      med-accordion-item {
        --align-items: center;
      }

      med-accordion-item [slot="middle"] {
        padding: 0 16px;
      }

      med-accordion-item [slot="content"] {
        padding: 16px;
      }
    </style>

    <ion-app>
      <ion-content>

        <!-- component markdown -->
        <med-accordion-list
          margin=${margin}
          ?single-open=${singleOpen}
          ?noBorder=${noBorder}
          ?noAnimation=${noAnimation}
        >
          <med-accordion-item
            .dsColor=${dsColor}
            ?background=${background}
            ?noBorder=${noBorder}
            ?canCollapse=${canCollapse}
            ?isOpened=${isOpened}
            slotsToggle=${slotsToggle}
           >

            <div slot="start">
              <ion-button ds-name="tertiary" ds-size="xxs">
                <ion-icon class="med-icon" slot="icon-only" name="med-estrela"></ion-icon>
              </ion-button>
            </div>

            <div slot="middle">
              <med-type token="p16xb">Header</med-type>
            </div>

            <div slot="end">
              <ion-button ds-name="tertiary" ds-size="xxs">
                <ion-icon class="med-rotate med-icon" slot="icon-only" name="med-baixo"></ion-icon>
              </ion-button>
            </div>

            <div slot="content">
              <med-type>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et dignissim lorem. Aliquam ut erat tortor. Duis maximus metus nec mi imperdiet sagittis. Pellentesque ornare rutrum orci et faucibus. Curabitur cursus turpis eu metus facilisis, a maximus risus mollis. Integer sodales sollicitudin nisi, et pellentesque diam eleifend id. Maecenas sit amet neque eget lorem rutrum mollis. Cras volutpat, nulla eleifend pretium dapibus, augue metus aliquam metus, sed aliquet nulla libero fermentum sapien. Etiam pretium accumsan velit eget lobortis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed at mattis nisl, id vulputate lectus. Praesent ac urna lorem.</med-type>
            </div>

          </med-accordion-item>

          <med-accordion-item
            .dsColor=${dsColor}
            ?background=${background}
            ?noBorder=${noBorder}
            ?canCollapse=${canCollapse}
            ?isOpened=${isOpened}
            slotsToggle=${slotsToggle}
          >

            <div slot="start">
              <ion-button ds-name="tertiary" ds-size="xxs">
                <ion-icon class="med-icon" slot="icon-only" name="med-estrela"></ion-icon>
              </ion-button>
            </div>

            <div slot="middle">
              <med-type token="p16xb">Header</med-type>
            </div>

            <div slot="end">
              <ion-button ds-name="tertiary" ds-size="xxs">
                <ion-icon class="med-rotate med-icon" slot="icon-only" name="med-baixo"></ion-icon>
              </ion-button>
            </div>

            <div slot="content">
              <med-type>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et dignissim lorem. Aliquam ut erat tortor. Duis maximus metus nec mi imperdiet sagittis. Pellentesque ornare rutrum orci et faucibus. Curabitur cursus turpis eu metus facilisis, a maximus risus mollis. Integer sodales sollicitudin nisi, et pellentesque diam eleifend id. Maecenas sit amet neque eget lorem rutrum mollis. Cras volutpat, nulla eleifend pretium dapibus, augue metus aliquam metus, sed aliquet nulla libero fermentum sapien. Etiam pretium accumsan velit eget lobortis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed at mattis nisl, id vulputate lectus. Praesent ac urna lorem.</med-type>
            </div>

          </med-accordion-item>
        </med-accordion-list>
        <!-- component markdown -->

      </ion-content>
    </ion-app>
  `;
};

export const Default = Template.bind({
  actions: {
    handles: ['toggle', 'opened', 'medClick'],
  },
});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=4303%3A20729',
  },
};
Default.argTypes = {
  dsColor: {
    options: Object.values(MedColors),
    control: { type: 'select'},
    description: "Define a cor do componente.",
    table: {
      type:  { summary: Object.values(MedColors).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
  margin: {
    options: [undefined, 'xs', 'sm', 'md', 'lg'],
    control: { type: 'radio'},
    description: "Define a variação de tamanho componente.",
    table: {
      type:  { summary: 'xs | sm | md | lg' },
      defaultValue: { summary: 'undefined' },
    },
  },
  singleOpen: {
    singleOpen: false,
    control: { type: 'boolean' },
    description: 'Abre um item de cada vez.',
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
  noBorder: {
    noBorder: false,
    control: { type: 'boolean' },
    description: 'Define a variação da borda do componente.',
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
  noAnimation: {
    noAnimation: false,
    control: { type: 'boolean' },
    description: 'Remove a animação do componente.',
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
  background: {
    background: false,
    control: { type: 'boolean' },
    description: 'Define se o componente irá ter background quando aberto.',
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
  canCollapse: {
    canCollapse: false,
    control: { type: 'boolean' },
    description: 'Permite que a abertura do accordion seja bloqueada pelo front.',
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
  isOpened: {
    isOpened: false,
    control: { type: 'boolean' },
    description: 'Permite que o front consiga definir quando o accordion vem aberto ou fechado.',
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
  slotsToggle: {
    options: [undefined, 'start', 'middle', 'end'],
    control: { type: 'radio'},
    description: "Define a posição do ícone de abertura do componente.",
    table: {
      type:  { summary: 'start | middle | end' },
      defaultValue: { summary: 'undefined' },
    },
  },
};

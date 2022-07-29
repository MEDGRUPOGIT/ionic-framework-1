import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from '../../../../templarios';

export default {
  title: 'Components/Compositions/Calendar',
  decorators: [withDesign],
};

const Template = ({dsColor, mes, ano, fill, container, disable, choice}) => {
  return html`
    <style>
      med-calendar {
        max-width: 1200px;
        margin: 0 auto;
      }

      .teste {
        max-width: 600px;
      }
    </style>
    <ion-app>
      <div class="teste">
        <med-calendar .dsColor=${dsColor} mes=${mes} ano=${ano} container=${container} ?disable=${disable} choice=${choice}>
          <med-calendar-day .dsColor=${dsColor} active>1</med-calendar-day>
          <med-calendar-day .fill=${fill} .dsColor=${dsColor}>2</med-calendar-day>
          <med-calendar-day .dsColor=${dsColor}>3</med-calendar-day>
          <med-calendar-day .dsColor=${dsColor}>4</med-calendar-day>
          <med-calendar-day .dsColor=${dsColor}>5</med-calendar-day>
          <med-calendar-day .dsColor=${dsColor}>6</med-calendar-day>
          <med-calendar-day .dsColor=${dsColor}>7</med-calendar-day>
          <med-calendar-day .dsColor=${dsColor}>8</med-calendar-day>
          <med-calendar-day .dsColor=${dsColor}>9</med-calendar-day>
          <med-calendar-day .dsColor=${dsColor}>10</med-calendar-day>
          <med-calendar-day .dsColor=${dsColor}>11</med-calendar-day>
          <med-calendar-day .dsColor=${dsColor}>12</med-calendar-day>
          <med-calendar-day .dsColor=${dsColor}>13</med-calendar-day>
          <med-calendar-day .dsColor=${dsColor}>14</med-calendar-day>
          <med-calendar-day .dsColor=${dsColor}>15</med-calendar-day>
          <med-calendar-day .dsColor=${dsColor}>16</med-calendar-day>
          <med-calendar-day .dsColor=${dsColor}>18</med-calendar-day>
          <med-calendar-day .dsColor=${dsColor}>18</med-calendar-day>
          <med-calendar-day .dsColor=${dsColor}>19</med-calendar-day>
          <med-calendar-day .dsColor=${dsColor}>20</med-calendar-day>
          <med-calendar-day .dsColor=${dsColor}>21</med-calendar-day>
          <med-calendar-day .dsColor=${dsColor}>22</med-calendar-day>
          <med-calendar-day .dsColor=${dsColor}>23</med-calendar-day>
          <med-calendar-day .dsColor=${dsColor}>24</med-calendar-day>
          <med-calendar-day .dsColor=${dsColor}>25</med-calendar-day>
          <med-calendar-day .dsColor=${dsColor}>26</med-calendar-day>
          <med-calendar-day .dsColor=${dsColor}>27</med-calendar-day>
          <med-calendar-day .dsColor=${dsColor}>28</med-calendar-day>
          <med-calendar-day .dsColor=${dsColor}>29</med-calendar-day>
          <med-calendar-day .dsColor=${dsColor}>30</med-calendar-day>
          <med-calendar-day .dsColor=${dsColor}>31</med-calendar-day>
        </med-calendar-day>
      </div>
    </ion-app>
  `
}

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=11565%3A80634',
  },
}
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
  mes: {
    control: { type: 'text' },
    defaultValue: 'Dezembro',
  },
  ano: {
    control: { type: 'text' },
    defaultValue: '2021',
  },
  container: {
    control: { type: 'text' },
    defaultValue: 'teste',
  },
  choice: {
    control: { type: 'text' },
    defaultValue: 'teste',
  },
  fill: {
    defaultValue: 'none',
    options: [undefined, 'outline'],
    control: { type: 'radio'},
    description: "Define a variação de estilo do componente.",
    table: {
      type:  { summary: ['outline'] },
      defaultValue: { summary: 'undefined' },
    },
  },
  disable: {
    control: { type: 'boolean' },
    description: 'Desabilita botão do componente.',
    defaultValue: false,
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
}

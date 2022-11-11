import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Pages/Medsoft/Duvidas Academicas',
  decorators: [withDesign],
};

const Template = () => {
  return html`
    <div class="container container--height-vh">
      <med-header>
        <med-navbar class="header" slot="navbar">
          <ion-back-button slot="left" mode="ios" text="" ds-size="xxs">
            <ion-icon class="med-icon" name="med-fechar"></ion-icon>
          </ion-back-button>

          <ion-label class="header__title" slot="title" token="p16xb">Depositar dúvida</ion-label>

          <ion-button slot="right" mode="ios" fill="clear" icon-only ds-size="xs">
            <ion-icon slot="icon-only" class="med-icon" name="med-enviar"></ion-icon>
          </ion-button>
        </med-navbar>
      </med-header>

      <main class="text-area">
        <ion-textarea class="text-area__campo" mode="md" placeholder="Escreva a sua dúvida"></ion-textarea>
      </main>
    </div>
  `;
};

export const TextArea = Template.bind({});
TextArea.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};

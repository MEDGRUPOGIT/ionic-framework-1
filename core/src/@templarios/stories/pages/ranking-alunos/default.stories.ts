import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Pages/Medsoft/Ranking Alunos',
  decorators: [withDesign],
};

const Template = () => {
  return html`
    <ion-app>
      <ion-content class="ranking">
        <div class="ranking__content">
          <ion-list class="ranking__list" mode="md">
            <ion-item
              class="ranking__item"
              ds-color="neutral-2"
              radius="s08"
              spacing-v="s12"
              mode="ios"
              lines="none"
              detail="false"
            >
              <ion-avatar class="ranking__avatar" slot="start" ds-size="sm" ds-color="brand">
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"" />
              </ion-avatar>
              <ion-label class="ranking__name">Nome do aluno pode ser muito comprido</ion-label>
              <ion-label class="ranking__position" slot="end">Sua posição: 32°</ion-label>
            </ion-item>
            <ion-item
              class="ranking__item ranking__item--highlight"
              radius="s08"
              spacing-v="s12"
              mode="ios"
              lines="none"
              detail="false"
            >
              <ion-avatar class="ranking__avatar" slot="start" ds-size="sm" ds-color="brand">
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"" />
              </ion-avatar>
              <ion-label class="ranking__name">Nome do aluno</ion-label>
              <ion-label class="ranking__position" slot="end">1°</ion-label>
            </ion-item>
            <ion-item
              class="ranking__item ranking__item--highlight"
              radius="s08"
              spacing-v="s12"
              mode="ios"
              lines="none"
              detail="false"
            >
              <ion-avatar class="ranking__avatar" slot="start" ds-size="sm" ds-color="brand">
                <ion-label class="ranking__avatar-label">AB<ion-label>
              </ion-avatar>
              <ion-label class="ranking__name">Nome do aluno</ion-label>
              <ion-label class="ranking__position" slot="end">2°</ion-label>
            </ion-item>
            <ion-item
              class="ranking__item ranking__item--highlight"
              radius="s08"
              spacing-v="s12"
              mode="ios"
              lines="none"
              detail="false"
            >
              <ion-avatar class="ranking__avatar" slot="start" ds-size="sm" ds-color="brand">
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"" />
              </ion-avatar>
              <ion-label class="ranking__name">Nome do aluno</ion-label>
              <ion-label class="ranking__position" slot="end">3°</ion-label>
            </ion-item>
            <ion-item
              class="ranking__item"
              ds-color="neutral-2"
              radius="s08"
              spacing-v="s12"
              mode="ios"
              lines="none"
              detail="false"
            >
              <ion-avatar class="ranking__avatar" slot="start" ds-size="sm" ds-color="brand">
                <ion-label class="ranking__avatar-label">AB<ion-label>
              </ion-avatar>
              <ion-label class="ranking__name">Nome do aluno</ion-label>
              <ion-label class="ranking__position" slot="end">4°</ion-label>
            </ion-item>
            <ion-item
              class="ranking__item"
              ds-color="neutral-2"
              radius="s08"
              spacing-v="s12"
              mode="ios"
              lines="none"
              detail="false"
            >
              <ion-avatar class="ranking__avatar" slot="start" ds-size="sm" ds-color="brand">
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"" />
              </ion-avatar>
              <ion-label class="ranking__name">Nome do aluno</ion-label>
              <ion-label class="ranking__position" slot="end">5°</ion-label>
            </ion-item>
            <ion-item
              class="ranking__item"
              ds-color="neutral-2"
              radius="s08"
              spacing-v="s12"
              mode="ios"
              lines="none"
              detail="false"
            >
              <ion-avatar class="ranking__avatar" slot="start" ds-size="sm" ds-color="brand">
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"" />
              </ion-avatar>
              <ion-label class="ranking__name">Nome do aluno</ion-label>
              <ion-label class="ranking__position" slot="end">6°</ion-label>
            </ion-item>
            <ion-item
              class="ranking__item"
              ds-color="neutral-2"
              radius="s08"
              spacing-v="s12"
              mode="ios"
              lines="none"
              detail="false"
            >
              <ion-avatar class="ranking__avatar" slot="start" ds-size="sm" ds-color="brand">
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"" />
              </ion-avatar>
              <ion-label class="ranking__name">Nome do aluno</ion-label>
              <ion-label class="ranking__position" slot="end">7°</ion-label>
            </ion-item>
            <ion-item
              class="ranking__item"
              ds-color="neutral-2"
              radius="s08"
              spacing-v="s12"
              mode="ios"
              lines="none"
              detail="false"
            >
              <ion-avatar class="ranking__avatar" slot="start" ds-size="sm" ds-color="brand">
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"" />
              </ion-avatar>
              <ion-label class="ranking__name">Nome do aluno</ion-label>
              <ion-label class="ranking__position" slot="end">8°</ion-label>
            </ion-item>
            <ion-item
              class="ranking__item"
              ds-color="neutral-2"
              radius="s08"
              spacing-v="s12"
              mode="ios"
              lines="none"
              detail="false"
            >
              <ion-avatar class="ranking__avatar" slot="start" ds-size="sm" ds-color="brand">
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"" />
              </ion-avatar>
              <ion-label class="ranking__name">Nome do aluno</ion-label>
              <ion-label class="ranking__position" slot="end">9°</ion-label>
            </ion-item>
            <ion-item
              class="ranking__item"
              ds-color="neutral-2"
              radius="s08"
              mode="ios"
              lines="none"
              detail="false"
            >
              <ion-avatar class="ranking__avatar" slot="start" ds-size="sm" ds-color="brand">
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"" />
              </ion-avatar>
              <ion-label class="ranking__name">Nome do aluno</ion-label>
              <ion-label class="ranking__position" slot="end">10°</ion-label>
            </ion-item>
            <ion-item
              class="ranking__item"
              ds-color="neutral-2"
              radius="s08"
              mode="ios"
              lines="none"
              detail="false"
            >
              <ion-avatar class="ranking__avatar" slot="start" ds-size="sm" ds-color="brand">
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"" />
              </ion-avatar>
              <ion-label class="ranking__name">Nome do aluno</ion-label>
              <ion-label class="ranking__position" slot="end">11°</ion-label>
            </ion-item>
            <ion-item
              class="ranking__item"
              ds-color="neutral-2"
              radius="s08"
              mode="ios"
              lines="none"
              detail="false"
            >
              <ion-avatar class="ranking__avatar" slot="start" ds-size="sm" ds-color="brand">
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"" />
              </ion-avatar>
              <ion-label class="ranking__name">Nome do aluno</ion-label>
              <ion-label class="ranking__position" slot="end">12°</ion-label>
            </ion-item>
            <ion-item
              class="ranking__item"
              ds-color="neutral-2"
              radius="s08"
              mode="ios"
              lines="none"
              detail="false"
            >
              <ion-avatar class="ranking__avatar" slot="start" ds-size="sm" ds-color="brand">
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"" />
              </ion-avatar>
              <ion-label class="ranking__name">Nome do aluno</ion-label>
              <ion-label class="ranking__position" slot="end">13°</ion-label>
            </ion-item>
            <ion-item
              class="ranking__item"
              ds-color="neutral-2"
              radius="s08"
              mode="ios"
              lines="none"
              detail="false"
            >
              <ion-avatar class="ranking__avatar" slot="start" ds-size="sm" ds-color="brand">
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"" />
              </ion-avatar>
              <ion-label class="ranking__name">Nome do aluno</ion-label>
              <ion-label class="ranking__position" slot="end">14°</ion-label>
            </ion-item>
            <ion-item
              class="ranking__item"
              ds-color="neutral-2"
              radius="s08"
              mode="ios"
              lines="none"
              detail="false"
            >
              <ion-avatar class="ranking__avatar" slot="start" ds-size="sm" ds-color="brand">
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"" />
              </ion-avatar>
              <ion-label class="ranking__name">Nome do aluno</ion-label>
              <ion-label class="ranking__position" slot="end">15°</ion-label>
            </ion-item>
          </ion-list>
        </div>
      </ion-content>
    </ion-app>
  `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};


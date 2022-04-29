import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Compositions/Menu',
  decorators: [withDesign],
};

const Template = () => {
  return html`
    <script type="text/javascript">
      function a() {
        var element = document.getElementById("logo");
        element.classList.toggle("tp-menu--open");
      }
    </script>

    <ion-app>

      <!-- component -->
      <div class="tp-menu" id="logo">
        <div class="tp-menu__logo">
          <div class="tp-menu__logo-wrap" onclick="a()">
            <svg class="svg-left" xmlns="http://www.w3.org/2000/svg" width="101" height="54" viewBox="0 0 101 54" fill="none">
            <path d="M76.25 13C82.2072 3.79339 90.25 0 100.25 0V54H0.75V41H37.75C72.75 41 70.2928 22.2066 76.25 13Z" fill="#F9FAFA"/>
            </svg>

            <svg class="svg-right" width="101" height="54" viewBox="0 0 101 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.75 13C18.7928 3.79339 10.75 0 0.75 0V54H100.25V41H63.25C28.25 41 30.7072 22.2066 24.75 13Z" fill="#F9FAFA"/>
            </svg>

            <div class="tp-menu__logo-item">
              <ion-icon class="tp-menu__logo-icon med-icon" name="med-logo"></ion-icon>
            </div>
          </div>
        </div>

        <div class="tp-menu__wrap tp-scroll">
          <div class="tp-menu__aluno">
            <med-type class="tp-menu__title" token="h14x" ds-color="neutral-3">Olá Acadêmico</med-type>
          </div>

          <div class="tp-menu__heading">
            <med-type class="tp-menu__title" token="h20" ds-color="neutral-3">Mentoria</med-type>
          </div>

          <ul class="tp-menu__list">
            <li class="tp-menu__item">
              <ion-icon class="med-icon tp-menu__icon" name="med-orientacao"></ion-icon>
              <med-type class="tp-menu__label" token="p14" ds-color="neutral-3">Orientações</med-type>
            </li>
            <li class="tp-menu__item">
              <ion-icon class="med-icon tp-menu__icon" name="med-metricas"></ion-icon>
              <med-type class="tp-menu__label" token="p14" ds-color="neutral-3">Orientações</med-type>
            </li>
          </ul>

          <div class="tp-menu__heading">
            <med-type class="tp-menu__title" token="h20" ds-color="neutral-3">Geral</med-type>
          </div>

          <ul class="tp-menu__list">
            <li class="tp-menu__item">
              <ion-icon class="med-icon tp-menu__icon" name="med-main"></ion-icon>
              <med-type class="tp-menu__label" token="p14" ds-color="neutral-3">Main</med-type>
            </li>
            <li class="tp-menu__item">
              <ion-icon class="med-icon tp-menu__icon" name="med-usuario"></ion-icon>
              <med-type class="tp-menu__label" token="p14" ds-color="neutral-3">Perfil</med-type>
            </li>
            <li class="tp-menu__item">
              <ion-icon class="med-icon tp-menu__icon" name="med-duplicar"></ion-icon>
              <med-type class="tp-menu__label" token="p14" ds-color="neutral-3">Slide de Aula</med-type>
            </li>
            <li class="tp-menu__item">
              <ion-icon class="med-icon tp-menu__icon" name="med-qrcode"></ion-icon>
              <med-type class="tp-menu__label" token="p14" ds-color="neutral-3">Medcode</med-type>
            </li>
            <li class="tp-menu__item">
              <ion-icon class="med-icon tp-menu__icon" name="med-gabarito"></ion-icon>
              <med-type class="tp-menu__label" token="p14" ds-color="neutral-3">Dúvidas Acadêmicas</med-type>
            </li>
            <li class="tp-menu__item">
              <ion-icon class="med-icon tp-menu__icon" name="med-cronograma"></ion-icon>
              <med-type class="tp-menu__label" token="p14" ds-color="neutral-3">Cronograma</med-type>
            </li>
            <li class="tp-menu__item">
              <ion-icon class="med-icon tp-menu__icon" name="med-drogas"></ion-icon>
              <med-type class="tp-menu__label" token="p14" ds-color="neutral-3">Drogas</med-type>
            </li>
            <li class="tp-menu__item">
              <ion-icon class="med-icon tp-menu__icon" name="med-bonus"></ion-icon>
              <med-type class="tp-menu__label" token="p14" ds-color="neutral-3">Bônus</med-type>
            </li>
          </ul>

          <div class="tp-menu__heading">
            <med-type class="tp-menu__title" token="h20" ds-color="neutral-3">Área de Treinamento</med-type>
          </div>

          <ul class="tp-menu__list">
            <li class="tp-menu__item">
              <ion-icon class="med-icon tp-menu__icon" name="med-anotacao"></ion-icon>
              <med-type class="tp-menu__label" token="p14" ds-color="neutral-3">Simulados</med-type>
            </li>
            <li class="tp-menu__item">
              <ion-icon class="med-icon tp-menu__icon" name="med-multimidia"></ion-icon>
              <med-type class="tp-menu__label" token="p14" ds-color="neutral-3">Multimídia</med-type>
            </li>
            <li class="tp-menu__item">
              <ion-icon class="med-icon tp-menu__icon" name="med-concursos"></ion-icon>
              <med-type class="tp-menu__label" token="p14" ds-color="neutral-3">Concursos na Íntegra</med-type>
            </li>
            <li class="tp-menu__item">
              <ion-icon class="med-icon tp-menu__icon" name="med-montaprovas"></ion-icon>
              <med-type class="tp-menu__label" token="p14" ds-color="neutral-3">Monta Provas</med-type>
            </li>
          </ul>

          <div class="tp-menu__heading">
            <med-type class="tp-menu__title" token="h20" ds-color="neutral-3">Administrativo</med-type>
          </div>

          <ul class="tp-menu__list">
            <li class="tp-menu__item">
              <ion-icon class="med-icon tp-menu__icon" name="med-financeiro"></ion-icon>
              <med-type class="tp-menu__label" token="p14" ds-color="neutral-3">Financeiro</med-type>
            </li>
            <li class="tp-menu__item">
              <ion-icon class="med-icon tp-menu__icon" name="med-notasfiscais"></ion-icon>
              <med-type class="tp-menu__label" token="p14" ds-color="neutral-3">Notas Fiscais</med-type>
            </li>
          </ul>
        </div>
      </div>
      <!-- component -->

    </ion-app>
    `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=13873%3A55156',
  },
};
Default.argTypes = {};

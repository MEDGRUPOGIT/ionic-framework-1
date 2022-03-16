import { html,render } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from "../../../../global/templarios/color.enum";

export default {
  title: 'Pages/MedsoftPro/Aulas',
  decorators: [withDesign],
};

const Template = ({ dsColor, dsSize, skin, contents }) => {
  return html`
    <script type="text/javascript">
      function a() {
        var element = document.getElementById("logo");
        element.classList.toggle("cp-menu--open");
      }
    </script>


    <style>
      .desktop {
        display: flex;
      }

      .content {
        height: calc(100% - 100px);
      }

      .wrapper-right {
        width: 100%;
        height: 100vh;
      }

      .col-left {
        margin: 24px;
        padding-bottom: 24px;
      }

      .header {
        display: flex;
        width: 100%;
        padding: 24px;
        justify-content: space-between;
      }

      .header-left {
        display: flex;
      }

      .header-right {
        display: flex;
      }

      .header-right__notify {
        position: relative;
        margin-left: 48px;
      }

      .header-right__badge {
        position: absolute;
        z-index: 1;
        right: 16px;
        --med-color-feedback-contrast: hsl(var(--med-color-neutral-10)) !important;
      }

      .search {
        display: flex;
        padding: 0 12px;
      }

      .search__bar {
        margin-right: 32px;
        width: calc(100% - 170px);
      }

      .search__grid {
        margin-left: 16px;
      }

      .week-date__container {
        margin: 16px 0;
        display: flex;
        align-items: center;
      }

      .week {
        margin-right: 16px;
      }

      .chart:last-child {
        margin-top: 16px;
        margin-bottom: 24px;
      }

      .cp-menu {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 90vh;
        z-index: 961;

        transform: translateY(calc(100% - 75px));
        transition: 300ms all ease;
      }

      .cp-menu--open {
        transform: translateY(0%);
      }

      .cp-menu__logo {
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #141414 100%);
      }

      .cp-menu__logo-wrap {
        text-align: center;
        transform: translateY(20px);
        cursor: pointer;
        z-index: 1;
        position: relative;
      }

      .svg-left {
        transform: translateX(0px);
      }

      .svg-left path {
        fill: hsl(var(--med-color-neutral-10));
      }

      .svg-right {
        transform: translateX(-6px);
      }

      .svg-right path {
        fill: hsl(var(--med-color-neutral-10));
      }

      .cp-menu__logo-item {
        background: hsl(var(--med-color-brand-2));
        width: 41px;
        height: 41px;
        position: absolute;
        left: 50%;
        transform: translate(-58%, -50%);
        border-radius: 50%;
        top: 26px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .cp-menu__logo-icon {
        stroke: hsl(var(--med-color-neutral-10));
        font-size: 28px;
      }

      .cp-menu__wrap {
        background: hsl(var(--med-color-neutral-10));
        padding: 36px 16px 56px 16px;
        overflow: auto;
        width: 100%;
        height: 100%;
      }

      .cp-menu__aluno {
        margin-bottom: 36px;
      }

      .cp-menu__heading {
        display: flex;
        align-items: center;
        position: relative;
        justify-content: center;
      }

      .cp-menu__heading:before {
        content: '';
        background: hsl(var(--med-color-neutral-9));
        height: 1px;
        width: 100%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }

      .cp-menu__title {
        background: hsl(var(--med-color-neutral-10));
        position: relative;
        padding: 0 16px;
        text-align: center;
      }

      .cp-menu__list {
        display: flex;
        padding: 22px 0 0 0;
        margin: 0 auto;
        flex-wrap: wrap;
        max-width: 1200px;
      }

      .cp-menu__item {
        display: flex;
        min-width: 132px;
        width: 33.33%;
        flex-direction: column;
        align-items: center;
        flex-shrink: 0;
        cursor: pointer;
        margin-bottom: 30px;
      }

      .cp-menu__icon {
        stroke: hsl(var(--med-color-brand-2));
      }

      .cp-menu__label {
        padding-top: 10px;
        text-align: center;
      }
    </style>

    <ion-app>
      <div class="desktop">

        <div class="wrapper-left">

          <med-nav .dsColor=${dsColor}>
            <med-nav-item .dsColor=${dsColor} icon="med-play" text="Aulas" active></med-nav-item>
            <med-nav-item .dsColor=${dsColor} icon="med-apostila" text="Materiais"></med-nav-item>
            <med-nav-item .dsColor=${dsColor} icon="med-concursos" text="Questões"></med-nav-item>

            <med-nav-accordion></med-nav-accordion>
          </med-nav>

        </div>

        <div class="wrapper-right">

          <div class="header">
            <div class="header-left">
              <med-type token="h24x">Aulas</med-type>
            </div>

            <div class="header-right">
              <ion-button ds-name="tertiary">
                2022 MEDCURSO
                <ion-icon class="med-icon" slot="end" name="med-baixo"></ion-icon>
              </ion-button>
              <div class="header-right__notify">
                <ion-badge class="header-right__badge" ds-color="fb-warning" ds-size="xs">231</ion-badge>
                <ion-button ds-name="tertiary">
                  <ion-icon class="med-icon" slot="icon-only" name="med-notificacao"></ion-icon>
                </ion-button>
              </div>
            </div>
          </div>

          <div class="search">
            <ion-searchbar class="search__bar" show-clear-button="never" show-cancel-button="focus" cancel-button-text="Cancelar" mode="ios" search-icon="med-busca"></ion-searchbar>
            <ion-button ds-name="tertiary">
              <med-type token="p14b">List</med-type>
              <ion-icon slot="end" class="med-icon" name="med-indice"></ion-icon>
            </ion-button>
            <ion-button class="search__grid" ds-name="tertiary">
              <med-type token="p14b">Grid</med-type>
              <ion-icon slot="end" class="med-icon" name="med-cartao"></ion-icon>
            </ion-button>
          </div>
          <ion-content class="content">
            <med-semana .dsColor=${dsColor} .dsSize=${dsSize} .active=${contents[0].active} .skin=${skin} .content=${contents[0]}></med-semana>
            <med-semana .dsColor=${dsColor} .dsSize=${dsSize} .active=${contents[1].active} .skin=${skin} .content=${contents[1]}></med-semana>
            <med-semana .dsColor=${dsColor} .dsSize=${dsSize} .active=${contents[2].active} .skin=${skin} .content=${contents[2]}></med-semana>
            <med-semana .dsColor=${dsColor} .dsSize=${dsSize} .active=${contents[2].active} .skin=${skin} .content=${contents[2]}></med-semana>
            <med-semana .dsColor=${dsColor} .dsSize=${dsSize} .active=${contents[2].active} .skin=${skin} .content=${contents[2]}></med-semana>
            <div class="col-right">
            </div>
          </ion-content>
        </div>
      </div>

      <div class="cp-menu" id="logo">
        <div class="cp-menu__logo">
          <div class="cp-menu__logo-wrap" onclick="a()">
            <svg class="svg-left" xmlns="http://www.w3.org/2000/svg" width="101" height="54" viewBox="0 0 101 54" fill="none">
            <path d="M76.25 13C82.2072 3.79339 90.25 0 100.25 0V54H0.75V41H37.75C72.75 41 70.2928 22.2066 76.25 13Z" fill="#F9FAFA"/>
            </svg>

            <svg class="svg-right" width="101" height="54" viewBox="0 0 101 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.75 13C18.7928 3.79339 10.75 0 0.75 0V54H100.25V41H63.25C28.25 41 30.7072 22.2066 24.75 13Z" fill="#F9FAFA"/>
            </svg>

            <div class="cp-menu__logo-item">
              <ion-icon class="cp-menu__logo-icon med-icon" name="med-logo"></ion-icon>
            </div>
          </div>
        </div>

        <div class="cp-menu__wrap tp-scroll">
          <div class="cp-menu__aluno">
            <med-type class="cp-menu__title" token="h14x" ds-color="neutral-3">Olá Acadêmico</med-type>
          </div>

          <div class="cp-menu__heading">
            <med-type class="cp-menu__title" token="h20" ds-color="neutral-3">Mentoria</med-type>
          </div>

          <ul class="cp-menu__list">
            <li class="cp-menu__item">
              <ion-icon class="med-icon cp-menu__icon" name="med-orientacao"></ion-icon>
              <med-type class="cp-menu__label" token="p14" ds-color="neutral-3">Orientações</med-type>
            </li>
            <li class="cp-menu__item">
              <ion-icon class="med-icon cp-menu__icon" name="med-metricas"></ion-icon>
              <med-type class="cp-menu__label" token="p14" ds-color="neutral-3">Orientações</med-type>
            </li>
          </ul>

          <div class="cp-menu__heading">
            <med-type class="cp-menu__title" token="h20" ds-color="neutral-3">Geral</med-type>
          </div>

          <ul class="cp-menu__list">
            <li class="cp-menu__item">
              <ion-icon class="med-icon cp-menu__icon" name="med-main"></ion-icon>
              <med-type class="cp-menu__label" token="p14" ds-color="neutral-3">Main</med-type>
            </li>
            <li class="cp-menu__item">
              <ion-icon class="med-icon cp-menu__icon" name="med-usuario"></ion-icon>
              <med-type class="cp-menu__label" token="p14" ds-color="neutral-3">Perfil</med-type>
            </li>
            <li class="cp-menu__item">
              <ion-icon class="med-icon cp-menu__icon" name="med-duplicar"></ion-icon>
              <med-type class="cp-menu__label" token="p14" ds-color="neutral-3">Slide de Aula</med-type>
            </li>
            <li class="cp-menu__item">
              <ion-icon class="med-icon cp-menu__icon" name="med-qrcode"></ion-icon>
              <med-type class="cp-menu__label" token="p14" ds-color="neutral-3">Medcode</med-type>
            </li>
            <li class="cp-menu__item">
              <ion-icon class="med-icon cp-menu__icon" name="med-gabarito"></ion-icon>
              <med-type class="cp-menu__label" token="p14" ds-color="neutral-3">Dúvidas Acadêmicas</med-type>
            </li>
            <li class="cp-menu__item">
              <ion-icon class="med-icon cp-menu__icon" name="med-cronograma"></ion-icon>
              <med-type class="cp-menu__label" token="p14" ds-color="neutral-3">Cronograma</med-type>
            </li>
            <li class="cp-menu__item">
              <ion-icon class="med-icon cp-menu__icon" name="med-drogas"></ion-icon>
              <med-type class="cp-menu__label" token="p14" ds-color="neutral-3">Drogas</med-type>
            </li>
            <li class="cp-menu__item">
              <ion-icon class="med-icon cp-menu__icon" name="med-bonus"></ion-icon>
              <med-type class="cp-menu__label" token="p14" ds-color="neutral-3">Bônus</med-type>
            </li>
          </ul>

          <div class="cp-menu__heading">
            <med-type class="cp-menu__title" token="h20" ds-color="neutral-3">Área de Treinamento</med-type>
          </div>

          <ul class="cp-menu__list">
            <li class="cp-menu__item">
              <ion-icon class="med-icon cp-menu__icon" name="med-anotacao"></ion-icon>
              <med-type class="cp-menu__label" token="p14" ds-color="neutral-3">Simulados</med-type>
            </li>
            <li class="cp-menu__item">
              <ion-icon class="med-icon cp-menu__icon" name="med-multimidia"></ion-icon>
              <med-type class="cp-menu__label" token="p14" ds-color="neutral-3">Multimídia</med-type>
            </li>
            <li class="cp-menu__item">
              <ion-icon class="med-icon cp-menu__icon" name="med-concursos"></ion-icon>
              <med-type class="cp-menu__label" token="p14" ds-color="neutral-3">Concursos na Íntegra</med-type>
            </li>
            <li class="cp-menu__item">
              <ion-icon class="med-icon cp-menu__icon" name="med-montaprovas"></ion-icon>
              <med-type class="cp-menu__label" token="p14" ds-color="neutral-3">Monta Provas</med-type>
            </li>
          </ul>

          <div class="cp-menu__heading">
            <med-type class="cp-menu__title" token="h20" ds-color="neutral-3">Administrativo</med-type>
          </div>

          <ul class="cp-menu__list">
            <li class="cp-menu__item">
              <ion-icon class="med-icon cp-menu__icon" name="med-financeiro"></ion-icon>
              <med-type class="cp-menu__label" token="p14" ds-color="neutral-3">Financeiro</med-type>
            </li>
            <li class="cp-menu__item">
              <ion-icon class="med-icon cp-menu__icon" name="med-notasfiscais"></ion-icon>
              <med-type class="cp-menu__label" token="p14" ds-color="neutral-3">Notas Fiscais</med-type>
            </li>
          </ul>
        </div>
      </div>
    </ion-app>
  `;
};

export const AulasMain = Template.bind({});
AulasMain.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};
AulasMain.argTypes = {
  dsColor: {
    options: Object.values(MedColors),
    control: { type: 'select'},
    description: "Define a cor do componente.",
    table: {
      type:  { summary: Object.values(MedColors).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
  dsSize: {
    options: [undefined, 'sm'],
    control: { type: 'radio'},
    description: "Define a variação de tamanho componente.",
    table: {
      type:  { summary: 'sm' },
      defaultValue: { summary: 'undefined' },
    },
  },
  contents:{
    defaultValue:[
      {
        Title: "Semana",
        Numero: "01",
        DataInicio: "16/08",
        DataFim: "24/08",
        active:true,
        Itens: [
          {
            Nome: "nef 1",
            PercentLido: 75,
            Downloaded: false,
            DownloadProgress: 0,
            Time: "2h30m",
            Descricao: "Lorem Ipslum at lanium",
          },
          {
            Nome: "nef 2",
            PercentLido: 100,
            Downloaded: true,
            DownloadProgress: 0,
            Time: "2h30m",
            Descricao: "Lorem Ipslum at lanium",
          },
          {
            Nome: "nef 3",
            PercentLido: 0,
            Downloaded: false,
            DownloadProgress: 20,
            Time: "2h30m",
            Descricao: "Lorem Ipslum at lanium",
          },
        ],
      },
      {
        Title: "Semana",
        Numero: "02",
        DataInicio: "24/08",
        DataFim: "1/09",
        active:true,
        Itens: [
          {
            Nome: "nef 3",
            PercentLido: 75,
            Downloaded: false,
            DownloadProgress: 0,
            Time: "2h30m",
            Descricao: "Lorem Ipslum at lanium",
          },
          {
            Nome: "nef 4",
            PercentLido: 100,
            Downloaded: true,
            DownloadProgress: 0,
            Time: "2h30m",
            Descricao: "Lorem Ipslum at lanium",
          },
        ],
      },
      {
        Title: "Semana",
        Numero: "03",
        DataInicio: "01/09",
        DataFim: "17/09",
        active:false,
        Itens: [
          {
            Nome: "CLM 1",
            PercentLido: 0,
            Downloaded: false,
            DownloadProgress: 0,
            Time: "2h30m",
            Descricao: "Lorem Ipslum at lanium",
          },
          {
            Nome: "nef 6",
            PercentLido: 0,
            Downloaded: false,
            DownloadProgress: 0,
            Time: "2h30m",
            Descricao: "Lorem Ipslum at lanium",
          },
        ],
      },
    ],
  control: { type: 'object' },
  description: 'Define o conteúdo do componente.',
  }
};

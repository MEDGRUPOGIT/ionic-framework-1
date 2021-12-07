import { Component, Element, Host, h } from '@stencil/core';

@Component({
  tag: 'filtro-modal',
  styleUrl: 'filtro-modal.scss',
  shadow: true,
})
export class FiltroModal {
  @Element() el!: HTMLElement;

  async closeModal() {
    await (this.el.closest('ion-modal') as
      HTMLIonModalElement).dismiss();
  }

  render() {
    return (
      <Host class="dashboard-filtro-modal">
        <ion-content class="dashboard-filtro-modal__content">
          <div class="dashboard-filtro-modal__fechar">
            <ion-button ds-name="tertiary" ds-size="base" slot="right" onClick={() => this.closeModal()}>
              <ion-icon class="med-icon" slot="icon-only" name="med-fechar"></ion-icon>
            </ion-button>
          </div>
          <div class="dashboard-filtro-modal__middle">
            <med-type token="h20" class="dashboard-filtro-modal__title">
              Base de alunos considerados
            </med-type>
            <div class="dashboard-filtro-modal__seletor-quantidade">
              <ion-button ds-name="tertiary" ds-size="md">
                <ion-icon class="med-icon" slot="icon-only" name="med-menos-circulo"></ion-icon>
              </ion-button>
              <div class="dashboard-filtro-modal__quantidade">
                <med-type token="h20">
                  TOP 5
                </med-type>
                <med-type token="p12" class="dashboard-filtro-modal__label">
                  Alunos
                </med-type>
              </div>
              <ion-button ds-name="tertiary" ds-size="md">
                <ion-icon class="med-icon" slot="icon-only" name="med-mais-circulo"></ion-icon>
              </ion-button>
            </div>
          </div>
          <div class="dashboard-filtro-modal__concursos">
            <med-type token="h20" class="dashboard-filtro-modal__concursos-title">
              TOP 5
            </med-type>
            <div class="dashboard-filtro-modal__concurso">
              <ion-radio-group value="" class="dashboard-filtro-modal__concurso-radio">
                <ion-radio slot="start" value="teste"></ion-radio>
              </ion-radio-group>
              <med-type token="p16" class="dashboard-filtro-modal__concurso-label">
                UFRJ
              </med-type>
            </div>
            <div class="dashboard-filtro-modal__concurso">
              <ion-radio-group value="" class="dashboard-filtro-modal__concurso-radio">
                <ion-radio slot="start" value="teste"></ion-radio>
              </ion-radio-group>
              <med-type token="p16" class="dashboard-filtro-modal__concurso-label">
                UFRJ
              </med-type>
            </div>
            <div class="dashboard-filtro-modal__concurso">
              <ion-radio-group value="" class="dashboard-filtro-modal__concurso-radio">
                <ion-radio slot="start" value="teste"></ion-radio>
              </ion-radio-group>
              <med-type token="p16" class="dashboard-filtro-modal__concurso-label">
                UFRJ
              </med-type>
            </div>
          </div>
        </ion-content>
        <ion-footer class="dashboard-filtro-modal__footer">
          <ion-button ds-name="primary" class="dashboard-filtro-modal__limpar-btn" ds-size="sm">Limpar</ion-button>
          <ion-button ds-name="primary" ds-size="sm">Filtrar</ion-button>
        </ion-footer>
      </Host>
    );
  }
}

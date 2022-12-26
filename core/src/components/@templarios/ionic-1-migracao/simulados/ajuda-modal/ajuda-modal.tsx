import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'ajuda-modal',
  styleUrl: 'ajuda-modal.scss',
  scoped: true,
})
export class AjudaModal {

  render() {
    return (
      <Host>
         <ion-header class="header">
          <div class="header__left">
            <div>
              <ion-button mode="ios" icon-only fill="clear" ds-size="xxs">
                <ion-icon class="med-icon" name="med-fechar"></ion-icon>
              </ion-button>
            </div>
          </div>
        </ion-header>

        <ion-content class="modal-content">
          <div class="modal-ajuda">
            <ion-label class="modal-ajuda__title">
              Realizar simulado
            </ion-label>

            <ion-slides class="modal-ajuda__slides" pager>
              <ion-slide class="modal-ajuda__slide">
                <ion-icon class="modal-ajuda__icon" name="med-montaprovas"></ion-icon>
                <ion-label class="modal-ajuda__subtitle" ds-color="neutral-10">Modo Prova</ion-label>
                <ion-label class="modal-ajuda__text" ds-color="neutral-10">
                  O objetivo é que você experimente o simulado como se estivesse na época em que ele aconteceu.
                </ion-label>
                <ion-label class="modal-ajuda__text" ds-color="neutral-10">
                  Um cronômetro regressivo informa a você quanto tempo falta para o fim do simulado.
                </ion-label>
                <ion-label class="modal-ajuda__text" ds-color="neutral-10">
                  Ao final, você pode comparar o seu resultado com os resultados de todos os que fizeram a prova, na época em que ela aconteceu.
                </ion-label>
                <ion-label class="modal-ajuda__text" ds-color="neutral-10">
                  Faça e refaça este simulado, quantas vezes desejar.
                </ion-label>
              </ion-slide>

              <ion-slide class="modal-ajuda__slide">
                <ion-icon class="modal-ajuda__icon" name="med-faculdade"></ion-icon>
                <ion-label class="modal-ajuda__subtitle" ds-color="neutral-10">Modo Estudo</ion-label>
                <ion-label class="modal-ajuda__text" ds-color="neutral-10">
                  Você realiza as questões do simulado, sem tempo.
                </ion-label>
                <ion-label class="modal-ajuda__text" ds-color="neutral-10">
                  A cada questão respondida, você pode conferir seu gabarito, ver as estatísticas de resposta dos outros alunos e estudar os comentários dos professores.
                </ion-label>
              </ion-slide>
            </ion-slides>
          </div>
        </ion-content>

      </Host>
    );
  }
}

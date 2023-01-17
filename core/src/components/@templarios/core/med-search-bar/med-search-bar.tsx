import { Component, h, Host, Prop, Element } from '@stencil/core';
import { MedColor } from '../../../../@templarios/types/color.type';
import { generateMedColor } from '../../../../@templarios/utilities/color';

@Component({
  tag: 'med-search-bar',
  styleUrl: 'med-search-bar.scss',
  scoped: true,
})
export class MedSearchBar {
  @Element() el!: any;

  /**
   * todo
   */
  @Prop({ reflect: true }) dsColor?: MedColor;

  toggleClass(e: any) {
    this.el.classList.toggle('active');

    e.target.classList.add('click');

    setTimeout(() => {
      e.target.classList.remove('click');
    }, 1000);

    if(e.target === document.getElementById("busca")) {
      document.querySelector('ion-searchbar')?.setFocus();
    }
}

  render() {
    const { dsColor } = this;

    return (
      <Host
        class={generateMedColor(dsColor, {
          'med-search-bar': true,
        })}>
          <div class="busca">
            <button class="busca__button" id="fechar" onClick={(e) => this.toggleClass(e)}>
              <ion-icon class="med-icon" name="med-fechar"></ion-icon>
            </button>
            <slot></slot>
          </div>
          <div class="title-container">
            <h1 class="title-container__title">Conteúdos</h1>
            <button class="title-container__button" id="busca" onClick={(e) => this.toggleClass(e)}>
             <ion-icon class="med-icon" name="med-busca"></ion-icon>
            </button>
          </div>
      </Host>
    );
  }

}


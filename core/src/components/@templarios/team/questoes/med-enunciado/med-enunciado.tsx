import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../../@templarios/utilities/color';

@Component({
  tag: 'med-enunciado',
  styleUrl: 'med-enunciado.scss',
  scoped: true,
})

export class MedEnunciado {

  /**
   * todo
   */
  @Prop({ mutable: true, reflect: true }) imagens!: string[] | string;

  /**
   * todo
   */
  @Event() medGalleryRequest!: EventEmitter<string>;

  /**
   * todo
   */
  @Prop({ reflect: true }) dsName?: 'skin';

  /**
 * todo
 */
  @Prop({ reflect: true }) content?: string;

  private imageRequest(imagem: string) {
    this.medGalleryRequest.emit(imagem);
  }

  render() {
    let imagens;
    const { content, dsName } = this;

    if (this.imagens) {
      this.imagens = typeof this.imagens === 'string' ? JSON.parse(this.imagens) : this.imagens;

      imagens = (
        <ul class='list'>
          {(this.imagens as string[]).map((imagem: any) => (
            <li class="list__item" onClick={() => this.imageRequest(imagem)}>
              <img class="list__image" src={imagem} alt=""/>
              <div class="image__zoom">
                <ion-icon class="med-icon" name="med-busca"></ion-icon>
              </div>
            </li>
          ))}
        </ul>
      );
    }

    return (
      <Host
        from-stencil
        class={generateMedColor(null, {
          'med-enunciado': true,
          [`med-enunciado--${dsName}`]: dsName !== undefined,
        })}>
        <slot></slot>
        {content &&
          <span innerHTML={content}>
          </span>
        }
        { imagens }
      </Host>
    );
  }

}

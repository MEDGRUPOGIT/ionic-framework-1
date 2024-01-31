import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import { generateMedColor } from '../../../@templarios/utilities/color';
import { RateStatus } from '../../../@templarios/enums/rate-like.enum';

@Component({
  tag: 'med-rate-like',
  styleUrl: 'med-rate-like.scss',
  shadow: true,
})
export class MedRateLike {
  @Prop({ reflect: true, mutable: true }) status?: RateStatus;

  @Event() medChange!: EventEmitter<RateStatus>;

  private onClick = (status: RateStatus) => {
    if (this.status) {
      return;
    }

    this.status = status;
    this.medChange.emit(this.status);
  }

  render() {
    return (
      <Host
        from-stencil
        class={generateMedColor(null, {
          'med-rate-like': true,
        })}>
        <button class={`button button-spacing
          ${this.status === RateStatus.LIKE ? 'button--like' : ''}
          ${this.status ? 'button--disabled' : ''}`}
          onClick={() => this.onClick(RateStatus.LIKE)}>
          <ion-icon name="med-positivo" class="med-icon rate"></ion-icon>
        </button>
        <button class={`button
          ${this.status === RateStatus.DISLIKE ? 'button--dislike' : ''}
          ${this.status ? 'button--disabled' : ''}`}
          onClick={() => this.onClick(RateStatus.DISLIKE)}>
          <ion-icon name="med-negativo" class="med-icon rate" ></ion-icon>
        </button>
      </Host>
    );
  }

}

import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'med-scheme',
  styleUrl: 'med-scheme.scss',
  shadow: true,
})
export class MedScheme {

  render() {
    return (
      <Host>
        <form id="scheme-switcher" class="switcher">
          <ul class="switcher__list">
            <li class="switcher__item">
              <h2>Schemes:</h2>
            </li>
            <li class="switcher__item">
              <input id="auto" class="switcher__input switcher__input--radio" type="radio" name="scheme" value="auto" checked />
              <label class="switcher__label" htmlFor="auto">Auto</label>
            </li>
            <li class="switcher__item">
              <input id="light" class="switcher__input switcher__input--radio" type="radio" name="scheme" value="light" />
              <label class="switcher__label" htmlFor="light">Light</label>
            </li>
            <li class="switcher__item">
              <input id="dark" class="switcher__input switcher__input--radio" type="radio" name="scheme" value="dark" />
              <label class="switcher__label" htmlFor="dark">Dark</label>
            </li>
          </ul>
        </form>

        <ul class="switcher__list">
          <li class="switcher__item">
            <h2>Configuração:</h2>
          </li>
          <li class="switcher__item">
            <input class="hue" type="range" id="hue" name="hue" min="0" max="360" value="0" />
            <label class="switcher__label" htmlFor="hue">hue</label>
          </li>
          <li class="switcher__item">
            <input class="saturation" type="range" id="saturation" name="saturation" min="0" max="50" value="0" />
            <label class="switcher__label" htmlFor="saturation">saturation</label>
          </li>
          <li class="switcher__item">
            <input class="luminosity" type="range" id="luminosity" name="luminosity" min="0" max="50" value="0" />
            <label class="switcher__label" htmlFor="luminosity">contrast</label>
          </li>
          <li class="switcher__item">
            <input class="font-size" type="range" id="font-size" name="font-size" min="12" max="20" value="16" />
            <label class="switcher__label" htmlFor="font-size">font-size (12px - 20px)</label>
          </li>
        </ul>
      </Host>
    );
  }

}

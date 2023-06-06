import {
  Component,
  Host,
  Element,
  Listen,
  h,
  Prop,
  State,
  Method,
  Watch,
} from "@stencil/core";

@Component({
  tag: "med-autocomplete",
  styleUrl: "med-autocomplete.scss",
  scoped: true,
})
export class MedAutocomplete {
  /**
   * O estado do dropdown (aberto ou fechado)
   */
  @State() open!: boolean;

  /**
   * O tamanho da altura mínima do autocomplete, representada
   * pelo tamanho do searchbar
   */
  @State() baseHeight!: number;

  /**
   * Indica se o componente deve ser renderizado mostrando o dropdown ou não
   */
  @Prop({ reflect: true }) dropdown!: boolean;

  /**
   * Se a pesquisa por items possuir debounce time até o item ser inserido
   *  no dom, deve ser indicado por essa propriedade (defaults to 0)
   */
  @Prop({ reflect: true }) debounceTime = 0;

  /**
   * Referência ao host
   */
  @Element() host!: HTMLElement;

  /**
   * Referência ao elemento de dropdown
   */
  dropdownElement!: HTMLMedDropdownElement;

  /**
   * Refêrencia a função de polling que vai buscar um valor base de altura
   * não nulo, e usar essa referência para cancelar a função de polling
   */
  pollTrigger!: NodeJS.Timeout;

  @Listen("click", { target: "body" })
  closeOnOutsideClick(e: MouseEvent) {
    const target = e.target as Node;

    if (!this.host.contains(target)) {
      this.open = false;
    }
  }

  @Listen("ionInput")
  handleInput() {
    this.open = true;

    /**
     * debounceTime deve ser setado de acordo com o tempo de debounce
     * do método de busca de items
     */
    setTimeout(() => {
      const extraHeight = this.dropdownElement.getBoundingClientRect().height;
      return this.host.style.setProperty(
        "--autocomplete-height",
        `${this.baseHeight + extraHeight}px`
      );
    }, this.debounceTime);
  }

  @Listen("ionFocus")
  handleFocus() {
    this.handleInput();
  }

  @Watch("open")
  handleOpenChange() {
    if (!this.dropdownElement) {
      this.dropdownElement = this.host.querySelector(
        "med-dropdown"
      ) as HTMLMedDropdownElement;
    }

    if (this.open) {
      const extraHeight = this.dropdownElement.getBoundingClientRect().height;
      return this.host.style.setProperty(
        "--autocomplete-height",
        `${this.baseHeight + extraHeight}px`
      );
    }
  }

  @Method()
  async toggleDropdown() {
    this.open = !this.open;
  }

  componentWillLoad() {
    this.open = this.dropdown ?? false;
  }

  componentDidLoad() {
    const searchbar = this.host.querySelector(
      "ion-searchbar"
    ) as HTMLIonSearchbarElement;

    const searchbarHeight = searchbar?.getBoundingClientRect()?.height ?? 0;

    if (searchbarHeight) {
      this.baseHeight = searchbar.getBoundingClientRect().height;

      this.host.style.setProperty(
        "--autocomplete-base-height",
        `${this.baseHeight}px`
      );
    } else {
      const poll = setInterval(() => {
        const searchbar = this.host.querySelector(
          "ion-searchbar"
        ) as HTMLIonSearchbarElement;

        if (searchbar) {
          this.baseHeight = searchbar.getBoundingClientRect().height;

          if (this.baseHeight) {
            this.host.style.setProperty(
              "--autocomplete-base-height",
              `${this.baseHeight}px`
            );
          }

          clearInterval(this.pollTrigger);
        }
      }, 200);

      this.pollTrigger = poll;
    }
  }

  render() {
    const { open } = this;

    return (
      <Host
        class={{
          "med-autocomplete--dropdown-hide": !open,
          "med-autocomplete--dropdown-show": open,
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}

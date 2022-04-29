import { newSpecPage } from '@stencil/core/testing';
import { MedCartaoRespostaLista } from '../med-cartao-resposta-lista';

describe('med-cartao-resposta-lista', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedCartaoRespostaLista],
      html: `<med-cartao-resposta-lista></med-cartao-resposta-lista>`,
    });
    expect(page.root).toEqualHtml(`
      <med-cartao-resposta-lista>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-cartao-resposta-lista>
    `);
  });
});

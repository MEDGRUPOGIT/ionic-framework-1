import { newSpecPage } from '@stencil/core/testing';
import { MedCartaoRespostaItem } from '../med-cartao-resposta-item';

describe('med-cartao-resposta', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedCartaoRespostaItem],
      html: `<med-cartao-resposta-item></med-cartao-resposta-item>`,
    });
    expect(page.root).toEqualHtml(`
      <med-cartao-resposta>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-cartao-resposta>
    `);
  });
});

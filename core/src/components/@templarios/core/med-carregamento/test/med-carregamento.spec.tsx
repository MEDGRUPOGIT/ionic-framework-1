import { newSpecPage } from '@stencil/core/testing';
import { MedCarregamento } from '../med-carregamento';

describe('med-carregamento', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedCarregamento],
      html: `<med-carregamento></med-carregamento>`,
    });
    expect(page.root).toEqualHtml(`
      <med-carregamento>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-carregamento>
    `);
  });
});

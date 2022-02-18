import { newSpecPage } from '@stencil/core/testing';
import { MedLista } from '../med-lista';

describe('med-lista', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedLista],
      html: `<med-lista></med-lista>`,
    });
    expect(page.root).toEqualHtml(`
      <med-lista>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-lista>
    `);
  });
});

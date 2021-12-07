import { newSpecPage } from '@stencil/core/testing';
import { FiltroModal } from '../filtro-modal';

describe('filtro-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FiltroModal],
      html: `<filtro-modal></filtro-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <filtro-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </filtro-modal>
    `);
  });
});

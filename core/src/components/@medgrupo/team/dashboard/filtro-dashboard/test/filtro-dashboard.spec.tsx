import { newSpecPage } from '@stencil/core/testing';
import { FiltroDashboard } from '../filtro-dashboard';

describe('filtro-dashboard', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FiltroDashboard],
      html: `<filtro-dashboard></filtro-dashboard>`,
    });
    expect(page.root).toEqualHtml(`
      <filtro-dashboard>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </filtro-dashboard>
    `);
  });
});

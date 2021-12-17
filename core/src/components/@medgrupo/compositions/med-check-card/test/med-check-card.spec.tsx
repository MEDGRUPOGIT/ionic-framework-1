import { newSpecPage } from '@stencil/core/testing';
import { MedCheckCard } from '../med-check-card';

describe('med-check-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedCheckCard],
      html: `<med-check-card></med-check-card>`,
    });
    expect(page.root).toEqualHtml(`
      <med-check-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-check-card>
    `);
  });
});

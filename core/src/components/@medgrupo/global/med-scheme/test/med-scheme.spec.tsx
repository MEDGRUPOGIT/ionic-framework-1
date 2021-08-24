import { newSpecPage } from '@stencil/core/testing';
import { MedScheme } from '../med-scheme';

describe('med-scheme', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedScheme],
      html: `<med-scheme></med-scheme>`,
    });
    expect(page.root).toEqualHtml(`
      <med-scheme>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-scheme>
    `);
  });
});

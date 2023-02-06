import { newSpecPage } from '@stencil/core/testing';
import { MedToggle } from '../med-toggle';

describe('med-toggle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedToggle],
      html: `<med-toggle></med-toggle>`,
    });
    expect(page.root).toEqualHtml(`
      <med-toggle>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-toggle>
    `);
  });
});

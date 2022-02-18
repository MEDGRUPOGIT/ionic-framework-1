import { newSpecPage } from '@stencil/core/testing';
import { MedItem } from '../med-item';

describe('med-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedItem],
      html: `<med-item></med-item>`,
    });
    expect(page.root).toEqualHtml(`
      <med-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-item>
    `);
  });
});

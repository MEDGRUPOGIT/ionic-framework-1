import { newSpecPage } from '@stencil/core/testing';
import { MedTabs } from '../med-tabs';

describe('med-tabs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedTabs],
      html: `<med-tabs></med-tabs>`,
    });
    expect(page.root).toEqualHtml(`
      <med-tabs>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-tabs>
    `);
  });
});

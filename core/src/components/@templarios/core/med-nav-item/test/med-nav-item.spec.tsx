import { newSpecPage } from '@stencil/core/testing';
import { MedNavItem } from '../med-nav-item';

describe('med-nav-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedNavItem],
      html: `<med-nav-item></med-nav-item>`,
    });
    expect(page.root).toEqualHtml(`
      <med-nav-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-nav-item>
    `);
  });
});

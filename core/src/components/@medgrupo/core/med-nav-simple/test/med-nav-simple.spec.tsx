import { newSpecPage } from '@stencil/core/testing';
import { MedNavSimple } from '../med-nav-simple';

describe('med-nav-simple', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedNavSimple],
      html: `<med-nav-simple></med-nav-simple>`,
    });
    expect(page.root).toEqualHtml(`
      <med-nav-simple>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-nav-simple>
    `);
  });
});

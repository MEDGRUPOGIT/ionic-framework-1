import { newSpecPage } from '@stencil/core/testing';
import { MedNav } from '../med-nav';

describe('med-nav', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedNav],
      html: `<med-nav></med-nav>`,
    });
    expect(page.root).toEqualHtml(`
      <med-nav>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-nav>
    `);
  });
});

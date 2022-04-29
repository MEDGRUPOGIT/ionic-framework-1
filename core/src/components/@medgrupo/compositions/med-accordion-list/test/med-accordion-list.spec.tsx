import { newSpecPage } from '@stencil/core/testing';
import { Accordion } from '../med-accordion-list';

describe('med-accordion-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Accordion],
      html: `<med-accordion-list></med-accordion-list>`,
    });
    expect(page.root).toEqualHtml(`
      <med-accordion-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-accordion-list>
    `);
  });
});

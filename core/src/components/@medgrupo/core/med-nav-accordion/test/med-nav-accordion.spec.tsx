import { newSpecPage } from '@stencil/core/testing';
import { MedNavAccordion } from '../med-nav-accordion';

describe('med-nav-accordion', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedNavAccordion],
      html: `<med-nav-accordion></med-nav-accordion>`,
    });
    expect(page.root).toEqualHtml(`
      <med-nav-accordion>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-nav-accordion>
    `);
  });
});

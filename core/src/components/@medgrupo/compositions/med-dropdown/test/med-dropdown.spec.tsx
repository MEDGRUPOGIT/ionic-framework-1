import { newSpecPage } from '@stencil/core/testing';
import { MedDropdown } from '../med-dropdown';

describe('med-dropdown', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedDropdown],
      html: `<med-dropdown></med-dropdown>`,
    });
    expect(page.root).toEqualHtml(`
      <med-dropdown>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-dropdown>
    `);
  });
});

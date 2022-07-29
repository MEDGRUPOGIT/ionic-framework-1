import { newSpecPage } from '@stencil/core/testing';
import { MedDropdownContainer } from '../med-dropdown-container';

describe('med-dropdown-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedDropdownContainer],
      html: `<med-dropdown-container></med-dropdown-container>`,
    });
    expect(page.root).toEqualHtml(`
      <med-dropdown-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-dropdown-container>
    `);
  });
});

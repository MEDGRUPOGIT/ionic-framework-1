import { newSpecPage } from '@stencil/core/testing';
import { MedSearchBar } from '../med-search-bar';

describe('med-search-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedSearchBar],
      html: `<med-search-bar></med-search-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <med-search-bar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-search-bar>
    `);
  });
});

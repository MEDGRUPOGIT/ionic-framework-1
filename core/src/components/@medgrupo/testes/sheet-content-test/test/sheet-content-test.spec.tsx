import { newSpecPage } from '@stencil/core/testing';
import { SheetContentTest } from '../sheet-content-test';

describe('sheet-content-test', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SheetContentTest],
      html: `<sheet-content-test></sheet-content-test>`,
    });
    expect(page.root).toEqualHtml(`
      <sheet-content-test>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sheet-content-test>
    `);
  });
});

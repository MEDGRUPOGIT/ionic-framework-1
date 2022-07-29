import { newSpecPage } from '@stencil/core/testing';
import { SheetTest } from '../sheet-test';

describe('sheet-test', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SheetTest],
      html: `<sheet-test></sheet-test>`,
    });
    expect(page.root).toEqualHtml(`
      <sheet-test>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sheet-test>
    `);
  });
});

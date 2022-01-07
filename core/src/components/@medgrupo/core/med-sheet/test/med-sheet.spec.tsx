import { newSpecPage } from '@stencil/core/testing';
import { MedSheet } from '../med-sheet';

describe('med-sheet', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedSheet],
      html: `<med-sheet></med-sheet>`,
    });
    expect(page.root).toEqualHtml(`
      <med-sheet>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-sheet>
    `);
  });
});

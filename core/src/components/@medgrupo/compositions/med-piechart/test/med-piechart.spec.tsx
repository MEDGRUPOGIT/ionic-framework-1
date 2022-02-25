import { newSpecPage } from '@stencil/core/testing';
import { MedPiechart } from '../med-piechart';

describe('med-piechart', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedPiechart],
      html: `<med-piechart></med-piechart>`,
    });
    expect(page.root).toEqualHtml(`
      <med-piechart>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-piechart>
    `);
  });
});

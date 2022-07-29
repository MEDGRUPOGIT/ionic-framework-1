import { newSpecPage } from '@stencil/core/testing';
import { MedPlusminus } from '../med-plusminus';

describe('med-plusminus', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedPlusminus],
      html: `<med-plusminus></med-plusminus>`,
    });
    expect(page.root).toEqualHtml(`
      <med-plusminus>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-plusminus>
    `);
  });
});

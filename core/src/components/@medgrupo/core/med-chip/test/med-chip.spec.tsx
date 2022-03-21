import { newSpecPage } from '@stencil/core/testing';
import { MedChip } from '../med-chip';

describe('med-chip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedChip],
      html: `<med-chip></med-chip>`,
    });
    expect(page.root).toEqualHtml(`
      <med-chip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-chip>
    `);
  });
});

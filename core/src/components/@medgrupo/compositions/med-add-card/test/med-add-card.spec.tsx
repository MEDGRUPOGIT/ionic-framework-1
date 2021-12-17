import { newSpecPage } from '@stencil/core/testing';
import { MedAddCard } from '../med-add-card';

describe('med-add-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedAddCard],
      html: `<med-add-card></med-add-card>`,
    });
    expect(page.root).toEqualHtml(`
      <med-add-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-add-card>
    `);
  });
});

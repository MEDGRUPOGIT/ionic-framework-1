import { newSpecPage } from '@stencil/core/testing';
import { MedSemanas } from '../med-semanas';

describe('med-semanas', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedSemanas],
      html: `<med-semanas></med-semanas>`,
    });
    expect(page.root).toEqualHtml(`
      <med-semanas>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-semanas>
    `);
  });
});

import { newSpecPage } from '@stencil/core/testing';
import { MedSemana } from '../med-semana';

describe('med-semana', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedSemana],
      html: `<med-semana></med-semana>`,
    });
    expect(page.root).toEqualHtml(`
      <med-semana>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-semana>
    `);
  });
});

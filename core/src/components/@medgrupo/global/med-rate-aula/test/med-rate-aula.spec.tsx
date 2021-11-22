import { newSpecPage } from '@stencil/core/testing';
import { MedRateAula } from '../med-rate-aula';

describe('med-rate-aula', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedRateAula],
      html: `<med-rate-aula></med-rate-aula>`,
    });
    expect(page.root).toEqualHtml(`
      <med-rate-aula>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-rate-aula>
    `);
  });
});

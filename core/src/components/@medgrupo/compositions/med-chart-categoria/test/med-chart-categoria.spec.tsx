import { newSpecPage } from '@stencil/core/testing';
import { MedChartCategoria } from '../med-chart-categoria';

describe('med-chart-categoria', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedChartCategoria],
      html: `<med-chart-categoria></med-chart-categoria>`,
    });
    expect(page.root).toEqualHtml(`
      <med-chart-categoria>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-chart-categoria>
    `);
  });
});

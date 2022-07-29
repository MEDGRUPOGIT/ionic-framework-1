import { newSpecPage } from '@stencil/core/testing';
import { MedChartBar } from '../med-chart-bar';

describe('med-chart-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedChartBar],
      html: `<med-chart-bar></med-chart-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <med-chart-bar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-chart-bar>
    `);
  });
});

import { newSpecPage } from '@stencil/core/testing';
import { MedChartBarHorizontal } from '../med-chart-bar-horizontal';

describe('med-chart-bar-horizontal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedChartBarHorizontal],
      html: `<med-chart-bar-horizontal></med-chart-bar-horizontal>`,
    });
    expect(page.root).toEqualHtml(`
      <med-chart-bar-horizontal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-chart-bar-horizontal>
    `);
  });
});

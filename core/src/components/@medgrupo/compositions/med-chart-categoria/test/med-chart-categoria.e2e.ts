import { newE2EPage } from '@stencil/core/testing';

describe('med-chart-categoria', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-chart-categoria></med-chart-categoria>');

    const element = await page.find('med-chart-categoria');
    expect(element).toHaveClass('hydrated');
  });
});
